import React from 'react';
import Image from 'next/image';
import Hero from '../images/hero.svg';
import Link from 'next/link';

const HeroPage = () => {
  return (
    <main>
      <div className="w-full flex flex-col-reverse md:flex-row items-center  md:pl-28  p-8 border--double border-b-4 border-dotted  border-yellow">
        <div>
          {' '}
          <h1 className=" text-3xl text-center md:text-start  md:text-5xl lg:text-7xl text-purple font-bold  max-w-screen-5xl    ">
            SPREADING <span className='text-yellow'>Smiles</span> ON EVERY FACE{' '}
          </h1>
          <div className='w-full flex flex-col items-center md:items-start'>
            <h4 className="text-xl md:text-3xl text-center lg:text-4xl my-2 md:my-4 py-2 md:py-6 font-bold italic">
              We never miss a smile...
            </h4>
            <Link
              href="https://rzp.io/l/x04CAX5"
              target='_blank'
              className="rounded-xl text-center bg-yellow hover:bg-[#7743DB] text-white px-20 py-4 text-xl font-bold duration-500 md:w-1/2 w-full hover:shadow-2xl"
            >
              Donate
            </Link>
          </div>
        </div>

        <div className="relative bottom-0 left-100">
          <Image
            src={Hero}
            alt="yellow background"
            height={2200}
            width={1500}
            className=''
          />
        </div>
      </div>
    </main>
  );
};

export default HeroPage;
