"use client"; 

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Top from '@/Components/Home/Top';
import Navbar from '@/Components/Home/Navbar';
import Banner from '@/Components/EbookPub/Banner';



const Footer = dynamic(() => import('@/Components/Footer'));
const StickyBtn = dynamic(()=> import('@/Components/StickyBtn'));
const SingleButton = dynamic(()=> import('@/Components/SingleButton'));
const SubBanner = dynamic(()=> import('@/Components/Home/SubBanner'));
const Faq = dynamic(()=> import('@/Components/Article/Faq'));
const  About = dynamic(()=> import('@/Components/EbookPub/About'));
const  SelfPublishing = dynamic(()=> import('@/Components/EbookPub/SelfPublishing'));
const  Logos = dynamic(()=> import('@/Components/EbookPub/Logos'));
const  Package = dynamic(()=> import('@/Components/EbookPub/Package'));
const  Cards = dynamic(()=> import('@/Components/EbookPub/Cards'));
const  Books = dynamic(()=> import('@/Components/EbookPub/Books'));
const  OurRecognition = dynamic(()=> import('@/Components/EbookPub/OurRecognition'));
const  Reviews = dynamic(()=> import('@/Components/EbookPub/Reviews'));







const ArticleServicesPage = () => {
  
  
  useEffect(() => {
    document.title = 'Affordable Ebook Publishing Services for Authors';
  }, []); 

  

  return (
    <div>
      <Head>
        <title>Affordable Ebook Publishing Services for Authors</title>
      </Head>
      <Top/>
      <Navbar  />
      <Banner/>
      <SubBanner />
      <About/>
      <SelfPublishing/>
      <Logos/>
      <OurRecognition/>
      <Package/>
      <Cards/>
      <Books/>
      
      <Reviews/>
     
      <Faq/>
      <SingleButton/>
      <Footer />
      
  
      <StickyBtn/>
    </div>
  );
};

export default ArticleServicesPage;