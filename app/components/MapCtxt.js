import Image from 'next/image';
import React from 'react';
import Haryana from '../images/Haryana.svg';
import PurpleLogo from '../images/logo-purple.svg';

const MapCtxt = () => {
  return (
    <main className="flex flex-col md:flex-row justify-eve w-full p-10 mx-auto  gap-x-2 mt-4 items-center">
      <div className='w-1/2'>
        <Image src={Haryana} alt="Haryana" width={300} height={300} className='mx-auto' />
      </div>
      <div className=" mx-auto w-1/2">

        <h1 className=" text-2xl font-bold md:text-4xl text-center	 w-full md:text-center">
          Help us Create Smiles in{' '}
        </h1>
        <h1 className=" text-2xl font-bold md:text-4xl text-center w-full md:text-center">
          every part of Haryana{' '}
        </h1>
        <div className="flex justify-center items-center md:justify-start  ">
          <button className="rounded-xl bg-yellow hover:bg-[#7743DB] text-white px-20 py-4 text-xl font-bold duration-500 hover:shadow-2xl mx-auto my-8">
            Volunteer
          </button>{' '}
        </div>
        <Image src={PurpleLogo} alt="Haryana" width={400} height={400} className='mx-auto hidden md:block' />
        <h3 className="text-lg md:text-2xl italic my-2 text-center	 ">
          “Never miss a chance to make a difference”
        </h3>
        <Image src={PurpleLogo} alt="Haryana" width={400} height={400} className='mx-auto block md:hidden' />
      </div>
    </main>
  );
};

export default MapCtxt;
