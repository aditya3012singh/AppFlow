'use client';

import "../styles/variables.css";
import './globals.css';
import Header from "@/components/main/Header";
import Hero from "@/components/main/Hero";
import Features from "@/components/main/Features";
import HowItWorks from "@/components/main/HowItWorks";
import Testimonials from "@/components/main/Testimonial";
import Pricing from "@/components/main/Pricing";
import Blog from "@/components/main/Blog";
import CTA from "@/components/main/CTA";
import FAQ from "@/components/main/FAQ";
import Footer from "@/components/main/Footer";
import { useAuth } from "@/features/auth";
import { useState} from "react";
import SignInDialog from "@/components/main/SignInDialog";

export default function HomePage() {

  const { user, isLoggedIn, loading, signInUsingEmailPassword, signInUsingGoogle, signInUsingGithub, signOut } = useAuth();

  const [isSignInDialogOpen, setSignInDialogOpen] = useState(false);

  function onLaunchAppClick() {
      if (isLoggedIn) {
        window.open('/app-flow', '_blank', 'noopener,noreferrer');
      }else{
        setSignInDialogOpen(true);
      }
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header handleLaunchApp={onLaunchAppClick}/>
      <main>
        <SignInDialog
          isOpen={isSignInDialogOpen}
          onClose={() => setSignInDialogOpen(false)}
          onSignIn={signInUsingEmailPassword}
          onGoogleSignIn={signInUsingGoogle}
          onGithubSignIn={signInUsingGithub}
        />
        <Hero handleLaunchApp={onLaunchAppClick}/>
        <Features handleLaunchApp={onLaunchAppClick}/>
        <HowItWorks handleLaunchApp={onLaunchAppClick}/>
        <Testimonials />
        <Pricing />
        <Blog />
        <FAQ />
        <CTA handleLaunchApp={onLaunchAppClick}/>
      </main>
      <Footer />
    </div>
  );
}