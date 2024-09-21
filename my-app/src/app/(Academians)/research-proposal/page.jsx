"use client";
import dynamic from "next/dynamic";
import Navbar from "@/Components/Navbar";
import Banner from "@/Components/ResearchPropsalHelp/Banner";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Top from "@/Components/Top";

// Dynamically importing non-essential components
const About = dynamic(() => import("@/Components/About"));
const Services = dynamic(() => import("@/Components/Services"));
const EasyToStart = dynamic(() => import("@/Components/EasyToStart"));
const SubjectsCard = dynamic(() => import("@/Components/SubjectsCard"));
const Expert = dynamic(() => import("@/Components/Expert"));
const Gurantees = dynamic(() => import("@/Components/Gurantees"));
const Support = dynamic(() => import("@/Components/Support"));
const ContactUs = dynamic(() => import("@/Components/ContactUs"));
const Footer = dynamic(() => import("@/Components/Footer"));
const FooterBanner = dynamic(() => import("@/Components/FooterBanner"));

const ResearchProposalPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.title = "Research Help - Academians UK";
  }, []);

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the about section
  };

  const handleContactClick = () => {
    router.push("/#contact-us"); // Navigate to the contact-us section
  };

  return (
    <div>
      <Head>
        <title>Research Help - Academians UK</title>
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

export default ResearchProposalPage;
