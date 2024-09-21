// 'use client';

// import About from '@/Components/About';
// import Banner from '@/Components/Banner';
// import EasyToStart from '@/Components/EasyToStart';
// import Services from '@/Components/Services';
// import React, { useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/Components/Navbar';
// import Expert from '@/Components/Expert';
// import Support from '@/Components/Support';
// import Gurantees from '@/Components/Gurantees';
// import ContactUs from '@/Components/ContactUs';
// import FooterBanner from '@/Components/FooterBanner';
// import Footer from '@/Components/Footer';
// import SubjectsCard from '@/Components/SubjectsCard';

// const Home = () => {
//   const router = useRouter();
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   const handleScrollToAbout = () => {
//     if (aboutRef.current) {
//       // Update URL with hash but don't navigate to a new page
//       router.replace('#about');

//       // Scroll to the "About" section smoothly
//       aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   const handleScrollToContact = () => {
//     if (contactRef.current) {
//       // Update URL with hash but don't navigate to a new page
//       router.replace('#contact-us');

//       // Scroll to the "Contact Us" section smoothly
//       contactRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   };


//   // const handleScrollToAbout = () => {
//   //   if (aboutRef.current) {
//   //     router.push('/#about');
//   //   }
//   // };

//   // const handleScrollToContact = () => {
//   //   if (contactRef.current) {
//   //     router.push('/#contact-us');
//   //   }
//   // };

//   useEffect(() => {
//     // Scroll to "About" or "Contact Us" if hash is present
//     if (window.location.hash === "#about" && aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: "smooth" });
//     } else if (window.location.hash === "#contact-us" && contactRef.current) {
//       contactRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [router.pathname]);

//   return (
//     <div>
//       <Navbar onAboutClick={handleScrollToAbout} onContactClick={handleScrollToContact} />
//       <Banner />
//       <About aboutRef={aboutRef} />
//       <Services />
//       <EasyToStart />
//       <SubjectsCard/>
//       <Expert />
//       <Gurantees />
//       <Support />
//       <ContactUs contactRef={contactRef} />
//       <Footer />
//       <FooterBanner />
//     </div>
//   );
// };

// export default Home;



// 'use client';

// import About from '@/Components/About';
// import Banner from '@/Components/Banner';
// import EasyToStart from '@/Components/EasyToStart';
// import Services from '@/Components/Services';
// import React, { useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/Components/Navbar';
// import Expert from '@/Components/Expert';
// import Support from '@/Components/Support';
// import Gurantees from '@/Components/Gurantees';
// import ContactUs from '@/Components/ContactUs';
// import FooterBanner from '@/Components/FooterBanner';
// import Footer from '@/Components/Footer';
// import SubjectsCard from '@/Components/SubjectsCard';

// const Home = () => {
//   const router = useRouter();
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   // Scroll to the section based on the query parameter
//   useEffect(() => {
//     const { searchParams } = new URL(window.location.href);
//     const section = searchParams.get('scrollTo');

//     if (section === 'about' && aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else if (section === 'contact' && contactRef.current) {
//       contactRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Banner />
//       <About aboutRef={aboutRef} />
//       <Services />
//       <EasyToStart />
//       <SubjectsCard />
//       <Expert />
//       <Gurantees />
//       <Support />
//       <ContactUs contactRef={contactRef} />
//       <Footer />
//       <FooterBanner />
//     </div>
//   );
// };

// export default Home;

// 'use client';

// import About from '@/Components/About';
// import Banner from '@/Components/Banner';
// import EasyToStart from '@/Components/EasyToStart';
// import Services from '@/Components/Services';
// import React, { useRef, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Navbar from '@/Components/Navbar';
// import Expert from '@/Components/Expert';
// import Support from '@/Components/Support';
// import Gurantees from '@/Components/Gurantees';
// import ContactUs from '@/Components/ContactUs';
// import FooterBanner from '@/Components/FooterBanner';
// import Footer from '@/Components/Footer';
// import SubjectsCard from '@/Components/SubjectsCard';

// const Home = () => {
//   const router = useRouter();
//   const aboutRef = useRef(null);
//   const contactRef = useRef(null);

//   // Scroll to the section based on the query parameter when navigating from other pages
//   useEffect(() => {
//     const { searchParams } = new URL(window.location.href);
//     const section = searchParams.get('scrollTo');

//     if (section === 'about' && aboutRef.current) {
//       aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//     } else if (section === 'contact' && contactRef.current) {
//       contactRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar aboutRef={aboutRef} contactRef={contactRef} />
//       <Banner />
//       <About aboutRef={aboutRef} />
//       <Services />
//       <EasyToStart />
//       <SubjectsCard />
//       <Expert />
//       <Gurantees />
//       <Support />
//       <ContactUs contactRef={contactRef} />
//       <Footer />
//       <FooterBanner />
//     </div>
//   );
// };

// export default Home;


'use client';

import dynamic from 'next/dynamic';
import React, { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';


// Dynamically import the components
const Top = dynamic(() => import('@/Components/Top')); 
const Navbar = dynamic(() => import('@/Components/Navbar'));
const Banner = dynamic(() => import('@/Components/Banner'));
const About = dynamic(() => import('@/Components/About'));
const Services = dynamic(() => import('@/Components/Services'));
const EasyToStart = dynamic(() => import('@/Components/EasyToStart'));
const Expert = dynamic(() => import('@/Components/Expert'));
const Support = dynamic(() => import('@/Components/Support'));
const Gurantees = dynamic(() => import('@/Components/Gurantees'));
const ContactUs = dynamic(() => import('@/Components/ContactUs'));
const FooterBanner = dynamic(() => import('@/Components/FooterBanner'));
const Footer = dynamic(() => import('@/Components/Footer'));
const SubjectsCard = dynamic(() => import('@/Components/SubjectsCard'));

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Helper function to scroll and update the URL
  const handleScrollToSection = (ref, section) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      // Update URL with hash
      window.history.pushState(null, '', `#${section}`);
    }
  };

  // Scroll to the section based on URL hash when loading the page
  useEffect(() => {
    const section = window.location.hash.replace('#', '');
    if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'contact-us' && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div>
      <Top/>
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




