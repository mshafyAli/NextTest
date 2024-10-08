"use client"; // Indicate that this component is a client component

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Top from '@/Components/Top';
import Navbar from '@/Components/Navbar';
import Banner from '@/Components/AssignmentHelp/Banner';

// Dynamically import components
const About = dynamic(() => import('@/Components/About'));
const ContactUs = dynamic(() => import('@/Components/ContactUs'));
const EasyToStart = dynamic(() => import('@/Components/EasyToStart'));
const Expert = dynamic(() => import('@/Components/Expert'));
const Footer = dynamic(() => import('@/Components/Footer'));
const FooterBanner = dynamic(() => import('@/Components/FooterBanner'));
const Gurantees = dynamic(() => import('@/Components/Gurantees'));
const Services = dynamic(() => import('@/Components/Services'));
const SubjectsCard = dynamic(() => import('@/Components/SubjectsCard'));
const Support = dynamic(() => import('@/Components/Support'));

const AssignmentHelpPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();
  
  useEffect(() => {
    document.title = 'Assignment Help - Academians UK';
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
        <title>Assignment Help - Academians UK</title>
      </Head>
      <Top />
      <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick} />
      <Banner />
      <About aboutRef={aboutRef} />
      <Services />
      <EasyToStart />
      <SubjectsCard />
      <Expert />
      <Gurantees />
      <Support />
      <ContactUs contactRef={contactRef} />
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default AssignmentHelpPage;
