"use client"; 

import React, {useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Navbar from '@/Components/Home/Navbar';
import Banner from '@/Components/ManuScriptServices/Banner';
import Top from '@/Components/Home/Top';



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
const PubHead = dynamic(()=> import('@/Components/PubHead'));



const ManuScriptPage = () => {
 
  
  useEffect(() => {
    document.title = 'Research Publishing House Manuscript Writing Services By Best Manuscript Writers';
  }, []); 


  return (
    <div>
      <Head>
        <title>Research Publishing House Manuscript Writing Services By Best Manuscript Writers</title>
      </Head>
      <Top/>
      <Navbar />
      <Banner />
      <SubBanner />
      <Services/>
      <HighValue/>
      <Package/>
      <DiscountBanner/>
      <SubjectExpert/>
      <PubHead/>
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

export default ManuScriptPage;