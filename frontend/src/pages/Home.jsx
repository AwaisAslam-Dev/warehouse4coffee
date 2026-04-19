import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ExploreMenu from '../components/ExploreMenu';
import Branches from '../components/Branches';
import ImageGallery from '../components/ImageGallery';

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      {/* Add padding-top equal to navbar height to prevent content from hiding */}
      <div className="pt-16 md:pt-20 lg:pt-24">
        <Hero />
        {/* Your other components will go here */}
        <ExploreMenu/>
        <Branches/>
        <ImageGallery/>
      </div>
    </div>
  );
};

export default Home;