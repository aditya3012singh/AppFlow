import passport from "passport";
import { PrismaClient } from "@prisma/client";
import GoogleStrategy from "passport-google-oauth20";
import GitHubStrategy from "passport-github2";
import dotenv from "dotenv";
import axios from "axios"
dotenv.config();
const prisma = new PrismaClient();

passport.use(
  new GoogleStrategy.Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/oauth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const email = profile.emails[0].value.toLowerCase();

      let user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            name: profile.displayName,
            password: ""
          },
        });
      }

      return done(null, user);
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/v1/auth/oauth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let email = profile.emails?.[0]?.value;

        // 🔍 If email is not present, fetch from GitHub manually
        if (!email) {
          const res = await axios.get("https://api.github.com/user/emails", {
            headers: {
              Authorization: `token ${accessToken}`,
              Accept: "application/vnd.github.v3+json",
            },
          });

          const primaryEmail = res.data.find(
            (emailObj) => emailObj.primary && emailObj.verified
          );
          email = primaryEmail?.email;
        }

        if (!email) {
          return done(new Error("GitHub email not available"));
        }

        let user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email,
              name: profile.displayName || profile.username,
              password: "", // empty password since it's OAuth
              oauthProvider: "github",
            },
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("GitHub OAuth error:", err);
        return done(err, null);
      }
    }
  )
);




passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  const user = await prisma.user.findUnique({ where: { id } });
  done(null, user);
});
