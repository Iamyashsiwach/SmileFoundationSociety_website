'use client'
import React from 'react';
import Navbar from '../components/Navbar';
import HeroPage from '../components/HeroPage';
import MapCtxt from '../components/MapCtxt';
import Card from '../components/Card';
import VolunteerForm from '../components/VolunteerForm';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import { dummyData } from '../data';
import Link from 'next/link';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { fstore } from '@/app/firebase/config'

const page = () => {
  const [value, loading, error] = useCollection(collection(fstore, 'events'));

  return (
    <div>
      <Navbar />

      <main>
        <div className="flex align-center justify-between   w-4/5 m-auto my-8">
          <h1 className="text-purple text-4xl font-extrabold border-b-4 pb-2 border-yellow">
            {' '}
            EXPLORE YOUR WORK
          </h1>
          <Link
            href="/"
            className="hidden md:flex btn text-white bg-purple sm:btn-sm md:btn-md lg:btn-lg lg:w-40"
          >
            Back
          </Link>
        </div>
        <div className=" md:bg-purple md:w-4/5 m-auto my-2 md:my-8 py-4 md:py-16 h-7/12 overflow-y-auto rounded-3xl">

          {
            loading && <h1>Loading...</h1>
          }
          {
            value && (
              value.docs.map((item, idx) => {
                return <div key={idx} className="w-11/12 md:w-10/12 mx-auto">
                  <WorkCard title={item.data().title} date={item.data().date} passage={item.data().content} images={item.data().img} />
                </div>
              })
            )
          }

          {/* {dummyData.map((data, index) => (
            <div key={index} className="w-10/12 mx-auto">
              <WorkCard title={data.title} date={data.date} passage={data.passage} images={data.images} />
            </div>
          ))} */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default page;
