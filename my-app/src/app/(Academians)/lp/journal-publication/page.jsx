"use client"; 
import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/Banner';


const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));
const Package = dynamic(()=> import('@/Components/Package'));
const SubBanner = dynamic(()=> import('@/Components/SubBanner'));
const Clients = dynamic(()=> import('@/Components/Clients'));
const Services = dynamic(()=> import('@/Components/Services'));
const HighValue = dynamic(()=> import('@/Components/HighValue'));
const DiscountBanner = dynamic(()=> import('@/Components/DiscountBanner'));
const SubjectExpert = dynamic(()=> import('@/Components/SubjectExpert'));
const Award = dynamic(()=> import('@/Components/Award'));
const Research = dynamic(()=> import('@/Components/Research'));
const Submission = dynamic(()=> import('@/Components/Submission'));
const Faq = dynamic(()=> import('@/Components/Faq'));



const LpPage = () => {


  
  useEffect(() => {
    document.title = 'Journal Publication - Research Publishing House Service';
  }, []); 



  return (
    <div>
      <Head>
        <title>Journal Publication - Research Publishing House Service</title>
      </Head>
      <Navbar />
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

export default LpPage;