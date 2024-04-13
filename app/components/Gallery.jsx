import React from 'react';
import image1 from '@/public/gallery/IMG-20240408-WA0006.jpg'
import image2 from '@/public/gallery/IMG-20240408-WA0007.jpg'
import image3 from '@/public/gallery/IMG-20240408-WA0008.jpg'
import image4 from '@/public/gallery/IMG-20240408-WA0009.jpg'
import image5 from '@/public/gallery/IMG-20240408-WA0010.jpg'
import image6 from '@/public/gallery/IMG-20240408-WA0011.jpg'
import image7 from '@/public/gallery/IMG-20240408-WA0012.jpg'
import image8 from '@/public/gallery/IMG-20240408-WA0013.jpg'
import image9 from '@/public/gallery/IMG-20240408-WA0014.jpg'
import image10 from '@/public/gallery/IMG-20240408-WA0015.jpg'
import image11 from '@/public/gallery/IMG-20240408-WA0016.jpg'

import Slider from "react-slick";
import Image from 'next/image';

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]

  };
  return (
    <main id='Gallery'>
      <div>
        <h1 className="text-5xl font-bold text-center m-2">Gallery</h1>
        {/* <p className="text-base  md:mx-52 mx-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
          tristique enim. Phasellus convallis at risus eget finibus. Mauris non
          arcu eu sem ornare aliquet. Mauris et enim pulvinar,{' '}
        </p> */}
      </div>

      <div>
        <div className='slider-container w-10/12 mx-auto'>
          <Slider {...settings}>
            <div className="p-2">
              <Image
                src={image1}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image2}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>

            <div className="p-2">
              <Image
                src={image3}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image4}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image5}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image6}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image7}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image8}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image9}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image10}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
            <div className="p-2">
              <Image
                src={image11}
                alt="Burger"
                // height={200}
                // width={300}
                className="h-56 rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </div>

      {/* <div className="md:mx-48 mx-8  md:my-10 my-2  flex gap-x-20">
        <Image src={image7} alt="image7" className="rounded-box" />

        <a link=""></a>
      </div> */}
    </main>
  );
};

export default Gallery;
