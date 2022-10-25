import React, { FC } from 'react';
import { useSession } from 'next-auth/react';

const PrivateComponent: FC<{ children: JSX.Element }> = ({ children }) => {
  const { status } = useSession();

  if (status === 'loading' || status === 'unauthenticated') return <></>;

  return children;
};

export default PrivateComponent;
