import '../styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import type { AppProps } from 'next/app';

import { SessionProvider, signOut, useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { FC } from 'react';
import PrivateComponent from '../components/PrivateComponent';
import Link from 'next/link';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

const NavBar: FC = () => {
  return (
    <PrivateComponent>
      <div className="sticky flex flex-col justify-center bg-green-800 h-16 top-0 text-white">
        <Link href="/">
          <a className="capitalize text-xl font-bold text-center">
            🌿 Water my plants 🌿
          </a>
        </Link>
        <button type="button" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </PrivateComponent>
  );
};

export default MyApp;
