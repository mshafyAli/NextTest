"use client"; // Indicate that this component is a client component

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/MenuScript/Banner';


// Dynamically import components
const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));
const Package = dynamic(()=> import('@/Components/MenuScript/Package'));
const SubBanner = dynamic(()=> import('@/Components/MenuScript/SubBanner'));
const Clients = dynamic(()=> import('@/Components/Clients'));
const Services = dynamic(()=> import('@/Components/MenuScript/Services'));
const HighValue = dynamic(()=> import('@/Components/MenuScript/HighValue'));
const DiscountBanner = dynamic(()=> import('@/Components/MenuScript/DiscountBanner'));
const SubjectExpert = dynamic(()=> import('@/Components/SubjectExpert'));
const Award = dynamic(()=> import('@/Components/Award'));
const Research = dynamic(()=> import('@/Components/Research'));
const Submission = dynamic(()=> import('@/Components/MenuScript/Submission'));
const Faq = dynamic(()=> import('@/Components/MenuScript/Faq'));



const AssignmentExpertPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    document.title = 'Research Publishing House Manuscript Writing Services By Best Manuscript Writers';
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
        <title>Research Publishing House Manuscript Writing Services By Best Manuscript Writers</title>
      </Head>
      <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
      <Banner />
      <SubBanner />
      <Clients/>
      <Services/>
      <HighValue/>
      <Package/>
      <DiscountBanner/>
      <SubjectExpert/>
      <Award/>
      <Research/>
      <Submission/>
      <Faq/>
      <SingleButton/>
      <Footer />
      
  
      <StickyBtn/>
    </div>
  );
};

export default AssignmentExpertPage;