import Image from 'next/image';
import React from 'react';
import volunteer from '../images/Volunteer.svg';
import Link from 'next/link';

const VolunteerForm = () => {
  return (
    <main className="flex m-8 flex-col md:flex-row justify-center gap-5 items-center mb-20">
      <div className="w-full md:w-1/2 ">
        <div>
          <Image src={volunteer} alt="volunteer" className='mx-auto' />
        </div>
      </div>
      <div className="w-full md:w-1/2 grid  gap-2 content-center items-center">
        <h1 className="text-purple text-6xl font-bold my-4 text-center">Volunteer Form</h1>
        <p className="text-xl text-center italic">
          Never miss a chance to make a difference
        </p>
        <Link
          href="https://forms.gle/yhqhbX56F9nhNbuR8"
          target="_blank"
          className="rounded-xl bg-yellow hover:bg-[#7743DB] text-white px-10 py-4 text-xl font-bold duration-500 my-6 hover:shadow-2xl text-center mx-auto"
        >
          Join Us
        </Link>
      </div>
    </main>
  );
};

export default VolunteerForm;
