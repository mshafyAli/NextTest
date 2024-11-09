"use client"; 
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';

// Dynamically import components
const ReviewBanner = dynamic(() => import('@/Components/Review/ReviewBanner'));
const ReviewCards = dynamic(() => import('@/Components/Review/ReviewCards'));
const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn')) ;
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));


const ReviewPage = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Reviews - Research House Publication.';
  }, []); 

 

  return (
    <div>
      <Head>
        <title>Reviews - Research House Publication.</title>
      </Head>
      {/* <Head /> */}
      <Navbar  />
      <ReviewBanner />
      <ReviewCards />
      <SingleButton/>
      <Footer />
      <StickyBtn/>
      
    </div>
  );
};

export default ReviewPage;


