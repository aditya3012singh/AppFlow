import { useState, useEffect, useCallback } from "react";

type User = {
  id: string;
  email: string;
  // Add more fields as needed
};

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    // TODO: Logic to check if user is signed in, if yes return the User Object
    // For now, assume user is not signed in
    setUser(null);
    setLoading(false);
  }, []);

  // Sign in with email/password
  const signInUsingEmailPassword = useCallback(async (email: string, password: string) => {
    setLoading(true);
    // TODO: Implement sign in (call backend, etc.)
    // On success:
    // setUser({...});
    setLoading(false);
  }, []);

  // Sign in with Google
  const signInUsingGoogle = useCallback(async () => {
    setLoading(true);
    // TODO: Implement Google sign-in
    // setUser({...});
    setLoading(false);
  }, []);

  // Sign in with GitHub
  const signInUsingGithub = useCallback(async () => {
    setLoading(true);
    // TODO: Implement GitHub sign-in
    // setUser({...});
    setLoading(false);
  }, []);

  // Sign out
  const signOut = useCallback(() => {
    // TODO: Implement sign out
    setUser(null);
  }, []);

  const isLoggedIn = !!user;

  return {
    user,           // user object or null
    isLoggedIn,     // boolean
    loading,        // boolean
    signInUsingEmailPassword,
    signInUsingGoogle,
    signInUsingGithub,
    signOut,
  };
}