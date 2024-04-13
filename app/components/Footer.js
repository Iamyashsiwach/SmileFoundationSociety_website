import React from 'react';
import footerDe from '../images/footerDe.svg';
import logo from '../images/textlogo.svg';
import Image from 'next/image';
import Email from '../images/email-icon.svg';
import Phone from '../images/phone.svg';
import Facebook from '../images/faceboo-icon.svg';

const footer = () => {
  return (
    <main id='Contact'
      style={{
        backgroundImage: `url("${footerDe.src}")`,
        width: '100%',
        height: '85vh',
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
      }}
      className="flex flex-col md:flex-row gap-x-20 items-center justify-center relative w-full"
    >
      <div className="w-full md:absolute md:bottom-0 md:left-0 md:p-8 pt-40 px-5">
        <Image src={logo} alt="logo" width={400} height={400} />
        <p className=" w-full md:w-96 text-white my-4 md:text-base text-small p-4">
          Your support means the world to us! Thank you for standing with our
          NGO in our mission to create positive change. Every effort, big or
          small, brings us closer to making the world a better place. We
          appreciate you being a crucial part of our journey.
        </p>
      </div>

      <div className="flex flex-col md:absolute bottom-0 md:right-0 p-8  gap-y-40 ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 ">
          <a
            href="mailto:sunitasiwach23@gmail.com"
            className="flex text-white items-center space-x-2"
          >
            <Image
              src={Email}
              alt="Haryana"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <h2 className="text-base text-white">sunitasiwach23@gmail.com</h2>
          </a>
          <a
            href="tel:+918295744832"
            className="flex text-white items-center  space-x-2"
          >
            <Image
              src={Phone}
              alt="Haryana"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <h2 className="text-base">+918295744832</h2>
          </a>
          <a
            href="https://www.facebook.com/people/Smile-Foundation-Society/100068504346608/"
            target="_blank"
            className="flex items-center   text-white space-x-2"
          >
            <Image
              src={Facebook}
              alt="Haryana"
              width={40}
              height={40}
              className="h-8 w-8"
            />
            <h2 className="text-base">Smile foundation society</h2>
          </a>
        </div>
      </div>

      <div className="flex border-t-2  absolute bottom-0 w-11/12 justify-between px-8 py-1 max-sm:hidden  border-[#A8A8A8]">
        <div>
          <p className="text-xs  text-white">
            {' '}
            Copyright 2023 The Optimizers, Inc. All Rights Reserved
          </p>
        </div>
        <div className="flex gap-x-4">
          <p className="text-xs  text-white">Terms & Conditions</p>
          <p className="text-xs  text-white">Privacy Policy</p>
          <p className="text-xs  text-white">Cookies Policy</p>
        </div>
      </div>
    </main>
  );
};

export default footer;
