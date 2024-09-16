'use client'

import About from '@/Components/About'
import Banner from '@/Components/Banner'
import EasyToStart from '@/Components/EasyToStart'
import Services from '@/Components/Services'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/Components/Navbar'
import Expert from '@/Components/Expert'

const Home = () => {
  const router = useRouter();
  const aboutRef = useRef(null);
  
  useEffect(() => {
    // Handle scrolling based on route change
    if (router.pathname === "/about-us" && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.pathname]);
  return (
    <div>
       <Navbar aboutRef={aboutRef}/>
      <Banner/>
      <About aboutRef={aboutRef}/>
      <Services/>
      <EasyToStart/>
      <Expert/>

      
    </div>
  )
}

export default Home