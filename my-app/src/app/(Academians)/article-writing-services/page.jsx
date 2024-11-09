"use client"; 

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Top from '@/Components/Home/Top';
import Navbar from '@/Components/Home/Navbar';
import Banner from '@/Components/ArticalServices/Banner';


// Dynamically import components
const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));
const Package = dynamic(()=> import('@/Components/Article/Package'));
const SubBanner = dynamic(()=> import('@/Components/Article/SubBanner'));
const Services = dynamic(()=> import('@/Components/Article/Services'));
const HighValue = dynamic(()=> import('@/Components/Article/HighValue'));
const DiscountBanner = dynamic(()=> import('@/Components/Article/DiscountBanner'));
const SubjectExpert = dynamic(()=> import('@/Components/SubjectExpert'));
const Award = dynamic(()=> import('@/Components/Award'));
const Research = dynamic(()=> import('@/Components/Article/Research'));
const Submission = dynamic(()=> import('@/Components/Article/Submission'));
const Faq = dynamic(()=> import('@/Components/Article/Faq'));
const PubHead = dynamic(()=> import('@/Components/PubHead'));


const ArticleServicesPage = () => {
  
  
  useEffect(() => {
    document.title = 'Research Publishing House Article Writing Services and Writing Help By Experts';
  }, []); 

  

  return (
    <div>
      <Head>
        <title>Research Publishing House Article Writing Services and Writing Help By Experts</title>
      </Head>
      <Top/>
      <Navbar  />
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

export default ArticleServicesPage;