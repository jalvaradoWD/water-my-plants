import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import client from '../lib/prismadb';

const SplashPage: NextPage = () => {
  const router = useRouter();
  const [userAuth, setUserAuth] = useState<
    'authenticate' | 'loading' | 'unauthenticated'
  >('loading');

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      setUserAuth('unauthenticated');
    },
  });

  if (status === 'authenticated') {
    router.push('/home');
  }

  if (userAuth === 'loading') {
    return <h1>Loading...</h1>;
  } else {
    return (
      <>
        <div className="flex flex-col text-center gap-4 h-screen items-center justify-center">
          <div>
            <h1 className="text-3xl text-green-600 font-bold capitalize">
              Water my plants 🌿
            </h1>

            <p>Get yourself signed up with my cool application</p>
          </div>
          <button className="button mb-2" onClick={() => signIn('google')}>
            Sign In with Google
          </button>
        </div>
      </>
    );
  }
};

export default SplashPage;
