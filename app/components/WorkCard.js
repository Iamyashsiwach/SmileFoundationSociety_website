'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const WorkCard = ({ title, date, passage, images }) => {
  // const { image, title, date, passage, images } = data;
  const [displayText, setDisplayText] = useState('');
  const [showFullText, setShowFullText] = useState(false);

  useEffect(() => {
    const initialText =
      passage.length > 200 ? passage.slice(0, 200) + '...' : passage;
    setDisplayText(initialText);
  }, []);

  const handleClick = () => {
    setShowFullText(!showFullText);
    if (!showFullText) {
      setDisplayText(passage);
    } else {
      const initialText =
        passage.length > 200 ? passage.slice(0, 200) + '...' : passage;
      setDisplayText(initialText);
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    setIntervalId(id);
    return () => clearInterval(id); // Clear interval when component unmounts
  }, []);

  const handleMouseEnter = () => {
    clearInterval(intervalId);
  };

  const handleMouseLeave = () => {
    const id = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    setIntervalId(id);
  };

  return (
    <main
      className=" bg-purple md:bg-white   gap-x-4 
    flex flex-col grow md:flex-row  w-auto m-4 p-4  md:w-full sm:mx-auto sm:p-auto sm:py-16   space-x-4 container  rounded-3xl"
    >
      <div
        className="md:w-2/5 w-auto h-auto grow m-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-wrap justify-between">
          <img
            src={images[currentIndex]}
            alt="work"
            width={300}
            height={300}
            className='my-2 md:my-0 rounded-xl'
          />
        </div>
      </div>
      <div className="flex flex-col space-y-4 md:w-3/5 text-white md:text-black">
        <h3 className="text-3xl">{title}</h3>
        <h6 className="text-1xl">{date}</h6>
        <p className="text-base">{displayText}</p>
        <button
          className="inset-0 right-0 bg-white md:bg-purple w-24 text-black md:text-white py-2 rounded-lg md:rounded-xl"
          onClick={handleClick}
        >
          {showFullText ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </main>
  );
};

export default WorkCard;
