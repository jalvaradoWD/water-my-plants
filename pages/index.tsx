import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      console.log('User is unauthenticated');
    },
  });

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
};

export default Home;
