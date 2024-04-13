'use client'
import Image from 'next/image';
import Navbar from './components/Navbar';

import MapCtxt from './components/MapCtxt';
import Card from './components/Card';
import HeroPage from './components/HeroPage';
import Gallery from './components/Gallery';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Events from './components/Events';
import VolunteerForm from './components/VolunteerForm';
import DonateBtn from './components/DonateBtn';
import { Roboto } from 'next/font/google';
import { Fade, Slide, Zoom } from "react-awesome-reveal"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})


export default function Home() {
  return (
    <main
      className={roboto.className}
      id='Home'>
      <Navbar />
      <DonateBtn />
      <Fade duration={2000} triggerOnce>
        <HeroPage />
      </Fade>
      <Slide delay={100} triggerOnce>
        <MapCtxt />
      </Slide>
      <Zoom fraction={0.5} triggerOnce>
        <Card />
      </Zoom>
      <Fade duration={2000} fraction={.25} triggerOnce>
        <Events />
      </Fade>
      <Slide direction='right' triggerOnce>
        <VolunteerForm />
      </Slide>
      <Zoom triggerOnce>
        <Gallery />
      </Zoom>
      <Slide triggerOnce>
        <Faq />
      </Slide>
      <Footer />
    </main>
  );
}
