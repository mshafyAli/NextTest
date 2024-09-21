"use client";
import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

// Dynamically import components
const About = dynamic(() => import('@/Components/About'));
const Banner = dynamic(() => import('@/Components/EssayHelp/Banner'));
const ContactUs = dynamic(() => import('@/Components/ContactUs'));
const EasyToStart = dynamic(() => import('@/Components/EasyToStart'));
const Expert = dynamic(() => import('@/Components/Expert'));
const Footer = dynamic(() => import('@/Components/Footer'));
const FooterBanner = dynamic(() => import('@/Components/FooterBanner'));
const Gurantees = dynamic(() => import('@/Components/Gurantees'));
const Navbar = dynamic(() => import('@/Components/Navbar'));
const Services = dynamic(() => import('@/Components/Services'));
const SubjectsCard = dynamic(() => import('@/Components/SubjectsCard'));
const Support = dynamic(() => import('@/Components/Support'));
const Top = dynamic(() => import('@/Components/Top'));

const EssayHelpPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.title = 'Essay Help - Academians UK';
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
        <title>Essay Help - Academians UK</title>
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

export default EssayHelpPage;
