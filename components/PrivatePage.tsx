import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

const PrivatePage: FC<{ children: JSX.Element }> = ({ children }) => {
  const router = useRouter();
  const { status } = useSession();

  if (status === 'loading') return <>Loading...</>;
  if (status === 'unauthenticated') router.push('/');

  return children;
};

export default PrivatePage;
