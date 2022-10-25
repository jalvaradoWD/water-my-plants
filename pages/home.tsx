import React from 'react';
import CreatePostButton from '../components/CreatePostButton';
import PrivatePage from '../components/PrivatePage';

const Home = () => {
  return (
    <PrivatePage>
      <>
        <h1 className="text-3xl">Home</h1>
        <CreatePostButton />
      </>
    </PrivatePage>
  );
};

export default Home;
