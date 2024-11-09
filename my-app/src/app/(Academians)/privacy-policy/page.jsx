"use client"; // Indicate that this component is a client component

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/Privacy/Banner';


// Dynamically import components
const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));




const AssignmentExpertPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    document.title = 'Privacy Policy | Data Protection Commitment';
  }, []); 

  const handleAboutClick = () => {
    router.push('/#about'); // Navigate to the home page with the '/about' URL
  };

  const handleContactClick = () => {
    router.push('/#contact-us'); // Navigate to the home page with the '/contact-us' URL
  };

  return (
    <div>
      <Head>
        <title>Privacy Policy | Data Protection Commitment</title>
      </Head>
      <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
      
      <Banner />
      <SingleButton/>
      <Footer />
      
  
      <StickyBtn/>
    </div>
  );
};

export default AssignmentExpertPage;