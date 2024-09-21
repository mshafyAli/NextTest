"use client";
import dynamic from "next/dynamic";
import Navbar from "@/Components/Navbar";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Banner from "@/Components/ExamHelp/Banner"; 

// Dynamic imports for non-essential components
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
const Top = dynamic(() => import("@/Components/Top"));

const ExamHelpPage = () => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    document.title = "Exam Help - Academians UK";
  }, []);

  const handleAboutClick = () => {
    router.push("/#about"); // Navigate to the about section
  };

  const handleContactClick = () => {
    router.push("/#contact-us"); // Navigate to the contact section
  };

  return (
    <div>
      <Head>
        <title>Exam Help - Academians UK</title>
      </Head>
      <Top />
      <Navbar
        handleAboutClick={handleAboutClick}
        handleContactClick={handleContactClick}
      />
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

export default ExamHelpPage;
