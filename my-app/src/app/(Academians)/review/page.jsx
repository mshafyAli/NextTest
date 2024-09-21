"use client"; 
import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Navbar from '@/Components/Navbar';

// Dynamically import components
const ReviewBanner = dynamic(() => import('@/Components/ReviewBanner'));
const ReviewCards = dynamic(() => import('@/Components/ReviewCards'));
const Footer = dynamic(() => import('@/Components/Footer'));
const Top = dynamic(() => import('@/Components/Top'));

const ReviewPage = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = 'Review - Academians UK';
  }, []); 

  const handleAboutClick = () => {
    router.push('/#about'); 
  };

  const handleContactClick = () => {
    router.push('/#contact-us'); 
  };

  return (
    <div>
      <Top>
        <title>Review - Academians UK</title>
      </Top>
      <Head />
      <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
      <ReviewBanner />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export default ReviewPage;


