"use client"; 

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/About/Banner';


// Dynamically import components
const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));




const AboutPage = () => {
 
  
  useEffect(() => {
    document.title = 'About Us | Meet the Experts Behind Your Success';
  }, []); 



  return (
    <div>
      <Head>
        <title>About Us | Meet the Experts Behind Your Success</title>
      </Head>
      <Navbar  />
      <Banner/>
      
      <SingleButton/>
      <Footer />
      
  
      <StickyBtn/>
    </div>
  );
};

export default AboutPage;