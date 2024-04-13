import React from 'react';
import cardDesign from '../images/cardDesign.svg';
import Image from 'next/image';
import one from '../images/card1.svg';
import two from '../images/2card.svg';
import three from '../images/3card.svg';

const Card = () => {
  return (
    <main className="w-full bg-yellow max-h-content	md:p-20 p-8 " id='About us'>
      <div className="flex flex-col  md:gap-y-6   ">
        <h1 className="text-center text-3xl md:text-6xl font-bold text-purple">
          What We're Doing
        </h1>
        <h5 className="text-center test-lg  md:text-3xl font-semibold ">
          A Help To Those Who Need It
        </h5>
        <p className="text-center  text-lg md:text-lg  md:mx-24  mx-4 my-2">
          Smile Foundation Society ignites positive change through
          cultural events and impactful initiatives, fostering community
          well-being, and joy through various celebrations.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10 md:my-20 text-center">
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={one} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title mx-auto text-center">Supporting the Needy</h2>
            <p>A Call to Action</p>
          </div>
        </div>
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={two} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-center">Community Support</h2>
            <p>Avernus, Medical, Blood Camps</p>
          </div>
        </div>
        <div className="card card-compact w-full  bg-base-100 p-4 shadow-2xl ring-purple md:hover:ring-2">
          <figure>
            <Image src={three} alt="Shoes" width={60} height={60} />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto text-center">Nurturing Our Living Culture</h2>
            <p>Cultural events</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Card;
