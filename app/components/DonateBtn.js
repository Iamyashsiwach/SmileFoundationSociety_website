import Link from 'next/link';
import React from 'react';

const DonateBtn = () => {
  return (
    <div className="fixed top-1/2 -left-10 transform -translate-y-1/2 rotate-90 z-10">
      <Link
        href="https://rzp.io/l/x04CAX5"
        target="_blank"
        className="bg-purple  text-white font-bold py-2 px-2 hover:px-4 hover:rounded-xl rounded-t-xl text-xl"
      >
        Donate <span className="text-white">&#9829;</span>
      </Link>
    </div>
  );
};

export default DonateBtn;
