// /app/oauth/callback/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function OAuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
    }

    // Redirect to homepage or dashboard
    router.replace('/');
  }, [router, searchParams]);

  return (
    <div className="flex items-center justify-center h-screen text-white text-xl">
      Logging you in...
    </div>
  );
}
