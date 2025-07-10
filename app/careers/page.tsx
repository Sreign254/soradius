import FeaturedJobSlider from '@/components/featured-job-slider';
import Footer from '@/components/footer';
import Header from '@/components/header';
import React from 'react';

const page = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <FeaturedJobSlider/>
        <Footer/>
      
    </div>
  );
}

export default page;
