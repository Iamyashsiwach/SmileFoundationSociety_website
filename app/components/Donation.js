'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Donate from '../images/Donate.svg';

const Donation = () => {
  // const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   // Load Razorpay SDK on component mount
  //   const script = document.createElement('script');
  //   script.src = 'https://checkout.razorpay.com/v1/checkout.js';
  //   script.async = true;
  //   document.body.appendChild(script);

  //   return () => {
  //     // Clean up on component unmount
  //     document.body.removeChild(script);
  //   };
  // }, []);

  // const makePayment = async () => {
  //   // Make API call to server to create a Razorpay order
  //   const response = await fetch('/api/razorpay', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       amount: amount * 100, // Convert amount to paise
  //     }),
  //   });

  //   const orderData = await response.json();

  //   // Initialize Razorpay
  //   const options = {
  //     key: process.env.RAZORPAY_KEY, // Your Razorpay Key ID
  //     amount: orderData.amount,
  //     currency: orderData.currency,
  //     order_id: orderData.id,
  //     name: 'Smile Foundation Society',
  //     description: 'Donation',
  //     image: 'https://manuarora.in/logo.png',
  //     handler: function (response) {
  //       alert('Payment successful: ' + response.razorpay_payment_id);
  //       // You can perform additional actions here, like updating the UI, logging the payment, etc.
  //     },
  //     prefill: {
  //       name: 'John Doe',
  //       email: 'john.doe@example.com',
  //       contact: '1234567890',
  //     },
  //   };

  //   const paymentObject = new window.Razorpay(options);
  //   paymentObject.open();
  // };
  return (
    <main className="flex md:flex-col-reverse items-center flex-col bg-[#D9D9D926] m-20 rounded-3xl gap-8 p-8">
      <div className="md:w-1/2 w-auto flex flex-col justify-center items-center ">
        <Image src={Donate} alt="donate" />
        <h1 className="text-4xl  italic text-purple font-extrabold ">
          Thanks for Donating
        </h1>
      </div>
      <div className="  p-8 justify-content align-content mx-auto w-1/4 rounded-3xl">
        <button className='w-full'>
          <a
            href="https://rzp.io/l/x04CAX5"
            target="_blank"
            className="btn btn-white rounded-xl border-purple border-4 px-10"
          >
            DONATE{' '}
          </a>
        </button>
      </div>
    </main>
  );
};

export default Donation;
