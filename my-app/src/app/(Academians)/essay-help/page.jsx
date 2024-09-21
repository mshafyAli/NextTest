"use client"
import About from '@/Components/About'
import Banner from '@/Components/EssayHelp/Banner'
import ContactUs from '@/Components/ContactUs'
import EasyToStart from '@/Components/EasyToStart'
import Expert from '@/Components/Expert'
import Footer from '@/Components/Footer'
import FooterBanner from '@/Components/FooterBanner'
import Gurantees from '@/Components/Gurantees'
import Navbar from '@/Components/Navbar'
import Services from '@/Components/Services'
import SubjectsCard from '@/Components/SubjectsCard'
import Support from '@/Components/Support'
import React from 'react'
import { useRef ,useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/navigation'

const EssayHelpPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();
  useEffect(()=>{
    document.title = 'Essay Help - Academians UK';
  })

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
        <Navbar handleAboutClick={handleAboutClick} handleContactClick={handleContactClick}/>
        <Banner/>
        <About aboutRef={aboutRef} />
        <Services/>
        <EasyToStart/>
        <SubjectsCard/>
        <Expert/>
        <Gurantees/>
        <Support/>
        <ContactUs contactRef={contactRef} />
        <Footer/>
        <FooterBanner/>
        
    </div>
  )
}

export default EssayHelpPage