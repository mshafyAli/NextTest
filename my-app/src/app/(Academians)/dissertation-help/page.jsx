"use client"
import About from '@/Components/About'
import Banner from '@/Components/DissertationHelp/Banner'
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
import { useRef } from 'react'

const DissertationHelpPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div>
        <Navbar/>
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

export default DissertationHelpPage