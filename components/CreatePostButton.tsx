import Link from 'next/link';
import React from 'react';

const CreatePostButton = () => {
  return (
    <Link href="/reminder/create">
      <button
        type="button"
        className="fixed bottom-4 right-4 bg-gray-300 p-1 rounded text-black"
      >
        Testing Button
      </button>
    </Link>
  );
};

export default CreatePostButton;
