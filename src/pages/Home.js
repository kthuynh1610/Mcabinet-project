import React from 'react';
import HeroSection from '../components/HeroSection';
import OurBackground from '../components/OurBackground';
import OurService from '../components/OurService';
import OpeningHours from '../components/OpeningHours';

function Home() {
  return (
    <>
      <HeroSection />
      <OurBackground />
      <OurService />
      <OpeningHours />
    </>
  );
}

export default Home;

