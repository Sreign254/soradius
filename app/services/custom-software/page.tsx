import Footer from '@/components/footer';

import Header from '@/components/header';
import CustomSoftwareServices from '@/components/customer-service'
import React from 'react';

const page = () => {
  return (
    <div>
      <Header/>
      <CustomSoftwareServices/>
      <Footer/>
    </div>
  );
}

export default page;
