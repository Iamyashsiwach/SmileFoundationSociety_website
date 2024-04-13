'use client'
import React, { useState } from 'react';
import pt from '../images/pattern.svg';
import Image from 'next/image';
import image1 from '../work-images/image1.svg';
import image2 from '../work-images/image2.svg';
import image3 from '../work-images/image-tdy.jpeg';
import Link from 'next/link';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { fstore } from '@/app/firebase/config'
import CountUp from 'react-countup';
import { Fade } from 'react-awesome-reveal';
import ScrollTrigger from 'react-scroll-trigger';
import bloodCamp from '@/public/events/Blood Camp.jpg'
import consumerAwareness from '@/public/events/Consumer Awareness.jpg'
import medicalCamp from '@/public/events/Medical Camp.jpg'
import treePlantation from '@/public/events/Tree Plantation.jpg'


const Events = () => {
  const [value, loading, error] = useCollection(collection(fstore, 'events'));
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div>
      <main className="flex flex-col md:flex-row-reverse ">
        <div
          style={{
            backgroundImage: `url("${pt.src}")`,
            height: '80vh',
            backgroundRepeat: 'repeat',
            backgroundSize: 'cover',
            position: 'relative',
          }}
          className=" max-h-full md:w-1/2 "
        >
          <div className="flex flex-row  p-20 justify-center align-center gap-x-4 md:gap-x-8 grow py-12  ">
            <div className="flex flex-col gap-y-8 mt-20">
              <div className='rounded-xl overflow-hidden space-y-2'>
                <Image
                  src={bloodCamp}
                  alt="donation"
                  className="commonClass imageStyle"
                />
                <h1 className="commonClass bg-purple font-medium p-1 text-white text-center">
                  Blood Donation Camp
                </h1>
              </div>
              <div className='rounded-xl overflow-hidden space-y-2'>
                <Image
                  src={consumerAwareness}
                  alt="donation"
                  className="commonClass imageStyle"
                />
                <h1 className="bg-purple commonClass font-medium p-1 text-white  text-center">
                  Consumer Awareness
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className='rounded-xl overflow-hidden space-y-2'>
                <Image
                  src={medicalCamp}
                  alt="donation"
                  className=" commonClass imageStyle"
                />
                <h1 className="commonClass bg-purple font-medium p-1 text-white  text-center">
                  Medical Camp
                </h1>
              </div>
              <div className='rounded-xl overflow-hidden space-y-2'>
                <Image
                  src={treePlantation}
                  alt="donation"
                  className=" commonClass imageStyle"
                />
                <h1 className="commonClass bg-purple font-medium p-1 text-white  text-center">
                  Tree Plantation
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-y-2  p-8 justify-center items-center md:w-1/2 ">
          <h5 className="text-2xl text-center font-bold"> Current Events</h5>
          <h1 className="text-2xl md:text-5xl text-center my-3">Here what we did recently</h1>
          {
            loading && <h1>Loading...</h1>
          }
          <p className="text-base">

            {
              value && (
                value.docs[0].data().content
              )
            }
          </p>
          <Link
            href="/work"
            className="rounded-xl bg-yellow hover:bg-[#7743DB] text-white px-20 py-4 text-xl font-bold duration-500 hover:shadow-2xl my-10"
          >
            More Events{' '}
          </Link>{' '}
        </div>
      </main>

      <main className="w-full bg-yellow max-h-content	p-4 mt-8">
        <div className=" flex flex-col md:flex-row  inset-x-0 top-40  md:px-10 md:py-24 md:mx-8 m-4 px-5 justify-between items-center gap-x-20 gap-y-8 border-dashed border-4 border-purple  ">
          <div className="w-full md:w-1/2 md:block flex flex-col items-center ">
            <h1 className="lg:text-4xl md:text-2xl sm:text-3xl mb-8 text-xl text-purple font-semibold mt-5 text-center md:text-left">
              WE ARE BRINGING SMILE TO PEOPLE’S FACES SINCE 2017
            </h1>
            <Link
              href="https://forms.gle/yhqhbX56F9nhNbuR8"
              target="_blank"
              className="rounded-xl bg-purple md:bg-yellow md:hover:bg-[#7743DB] text-white px-4 md:px-20 py-4 mx-auto text-base md:text-xl font-bold duration-500 md:hover:shadow-2xl"
            >
              BE PART OF OUR TEAM
            </Link>{' '}
          </div>
          <div className="flex gap-8 justify-center py-5 lg:gap-x-5 flex-wrap md:w-1/2">

            <ScrollTrigger onEnter={() => setCounterOn(true)}>
              {
                counterOn && (
                  <div>
                    <h1 className="text-purple mb-2 md:text-5xl text-2xl font-extrabold">
                      <CountUp end={250} />
                      +
                    </h1>
                    <h2 className="text-purple  md:text-5xl text-2xl font-semibold">
                      Events
                    </h2>
                  </div>
                )
              }
            </ScrollTrigger>
            <ScrollTrigger onEnter={() => setCounterOn(true)} >
              {
                counterOn && (
                  <div className='md:ml-4'>
                    <h1 className="text-purple mb-2  md:text-5xl text-2xl font-extrabold">
                      <CountUp end={1000} />
                      +
                    </h1>
                    <h2 className="text-purple  md:text-5xl text-2xl font-semibold">
                      Smiles
                    </h2>
                  </div>
                )
              }
            </ScrollTrigger>

          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
