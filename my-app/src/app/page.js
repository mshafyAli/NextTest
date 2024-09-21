


'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Head from 'next/head';
import Top from '@/Components/Top'; 
import Navbar from '@/Components/Navbar';
import About from '@/Components/About';
import ContactUs from '@/Components/ContactUs';
import Banner from '@/Components/Banner';
 

// Dynamically import non-critical components
const Services = dynamic(() => import('@/Components/Services'));
const EasyToStart = dynamic(() => import('@/Components/EasyToStart'));
const SubjectsCard = dynamic(() => import('@/Components/SubjectsCard'));
const Expert = dynamic(() => import('@/Components/Expert'));
const Gurantees = dynamic(() => import('@/Components/Gurantees'));
const Support = dynamic(() => import('@/Components/Support'));
const Footer = dynamic(() => import('@/Components/Footer'));
const FooterBanner = dynamic(() => import('@/Components/FooterBanner'));

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Helper function to scroll and update the URL
  const handleScrollToSection = (ref, section) => {
    console.log(`Scrolling to ${section}`);
    console.log('Ref current:', ref.current);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      // Update URL with hash without reloading the page
      window.history.pushState(null, '', `#${section}`);
    }
  };

  // Scroll to the section based on URL hash when loading the page
  useEffect(() => {
    const section = window.location.hash.replace('#', '');
    console.log('Initial load section:', section);
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact-us' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Home - Academians UK</title>
        <meta name="description" content="Home page description here" />
        {/* Add smooth scrolling behavior via CSS */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </Head>
      <Top />
      <Navbar 
        handleAboutClick={() => handleScrollToSection(aboutRef, 'about')} 
        handleContactClick={() => handleScrollToSection(contactRef, 'contact-us')} 
      />
      <Banner />
      <About ref={aboutRef} />
      <Services />
      <EasyToStart />
      <SubjectsCard />
      <Expert />
      <Gurantees />
      <Support />
      <ContactUs ref={contactRef} />
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default Home;
