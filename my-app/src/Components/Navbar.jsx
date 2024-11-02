



"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaRegClock, FaCommentDots } from 'react-icons/fa';
import { FaClockRotateLeft } from "react-icons/fa6";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/66339c801ec1082f04ea383e/1hsspmlq1";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };
    

  return (
   <div className={`w-full fixed  transition-colors duration-300 ${isScrolled ? 'bg-white shadow-md z-50' : 'bg-primary'}`}>
     <div className="w-[80%] mx-auto py-4 flex items-center justify-between px-8">
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <Image src="/logo.png" alt="rph Logo" width={100} height={100} />
    </div>

    {/* Contact Info */}
    <div className="flex items-center space-x-6">
      {/* 24/7 Available */}
      <div className="flex items-center space-x-2">
        <FaClockRotateLeft size={20} className="text-green" />
        <span className="text-secondary font-semibold">24/7 Available</span>
      </div>

      {/* Call Us */}
      <div className="flex items-center space-x-2">
        <FaClockRotateLeft size={20} className="text-green" />
        <div>
          <div className="text-secondary text-[12px]">Call us at</div>
          <div className="text-green text-sm font-semibold">
            <a href="tel:+442038852608" className="hover:text-secondary">+44 20 3885 2608</a>
          </div>
        </div>
      </div>

      {/* Start Live Chat */}
      <div className="flex items-center space-x-2">
        <FaCommentDots size={20} className="text-green" />
       
        <div>
          <div className="text-secondary text-[12px]">Click here to</div>
          <div className="text-green text-sm font-semibold">
            <button onClick={handleTalkToExpertClick} className="hover:text-secondary">Start Live Chat</button>
          </div>
        </div>
      </div>

      {/* Get A Quote Button */}
      <button className="bg-blue text-white font-semibold px-4 py-2 rounded-[25px] hover:bg-[#0f0d3d]">
        Get A Quote
      </button>
    </div>
  </div>
   </div>
  );
}

