"use client"
import React from 'react';
import Navbar from '@/Components/Navbar';
import ReviewBanner from '@/Components/ReviewBanner';
import ReviewCards from '@/Components/ReviewCards';
import Footer from '@/Components/Footer';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Head from 'next/head';
import Top from '@/Components/Top';

const ReviewPage = () => {
  const router = useRouter();

  useEffect(()=>{
    document.title = 'Review - Academians UK';
  })

  const handleAboutClick = () => {
    router.push('/#about'); // Navigate to the home page with the '/about' URL
  };

  const handleContactClick = () => {
    router.push('/#contact-us'); // Navigate to the home page with the '/contact-us' URL
  };

  return (
    <div>
      <Top>
        <title>Review - Academians UK</title>
      </Top>
      <Head/>
      <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
      <ReviewBanner />
      <ReviewCards />
      <Footer />
    </div>
  );
};

export default ReviewPage;
