import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Donation from '../components/Donation';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div className="flex align-center justify-between   w-4/5 m-auto my-8">
          <h1 className="text-purple text-5xl font-extrabold border-b-4 border-yellow">
            {' '}
            Donation Page
          </h1>
          <Link
            href="/"
            className="btn text-white bg-purple sm:btn-sm md:btn-md lg:btn-lg lg:w-40"
          >
            Back
          </Link>
        </div>

        <div>
          <Donation />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
