'use client';

import About from '@/Components/About';
import Banner from '@/Components/Banner';
import EasyToStart from '@/Components/EasyToStart';
import Services from '@/Components/Services';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/Components/Navbar';
import Expert from '@/Components/Expert';
import Support from '@/Components/Support';
import Gurantees from '@/Components/Gurantees';
import ContactUs from '@/Components/ContactUs';
import FooterBanner from '@/Components/FooterBanner';
import Footer from '@/Components/Footer';
import SubjectsCard from '@/Components/SubjectsCard';

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollToAbout = () => {
    if (aboutRef.current) {
      // Update URL with hash but don't navigate to a new page
      router.replace('#about');

      // Scroll to the "About" section smoothly
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    if (contactRef.current) {
      // Update URL with hash but don't navigate to a new page
      router.replace('#contact-us');

      // Scroll to the "Contact Us" section smoothly
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  // const handleScrollToAbout = () => {
  //   if (aboutRef.current) {
  //     router.push('/#about');
  //   }
  // };

  // const handleScrollToContact = () => {
  //   if (contactRef.current) {
  //     router.push('/#contact-us');
  //   }
  // };

  useEffect(() => {
    // Scroll to "About" or "Contact Us" if hash is present
    if (window.location.hash === "#about" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (window.location.hash === "#contact-us" && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.pathname]);

  return (
    <div>
      <Navbar onAboutClick={handleScrollToAbout} onContactClick={handleScrollToContact} />
      <Banner />
      <About aboutRef={aboutRef} />
      <Services />
      <EasyToStart />
      <SubjectsCard/>
      <Expert />
      <Gurantees />
      <Support />
      <ContactUs contactRef={contactRef} />
      <Footer />
      <FooterBanner />
    </div>
  );
};

export default Home;
