import React, { useState } from "react";
import { FaWhatsapp, FaGlobe } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { RiWhatsappFill } from "react-icons/ri";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="w-[80%] mx-auto bg-white">
      <nav className="flex items-center justify-evenly p-4 border border-black ">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <Image src="/logo.png" alt="rph Logo" width={100} height={100} />
          </Link>
        </div>

        {/* Navigation Links */}
        {/* <div className="flex items-center space-x-8">
          <div className="relative group">
            <button className="text-gray-800 font-medium hover:text-blue">
              Publication Services
            </button>
          
            <div className="absolute left-0 hidden w-[10rem] group-hover:block bg-white shadow-lg border mt-1 py-2">
              <a
                href="#service1"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Service 1
              </a>
              <a
                href="#service2"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Service 2
              </a>
            </div>
          </div>
          <a
            href="#pr-services"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            PR Services
          </a>
          <a
            href="#support-center"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            Scopus Support Center
          </a>
          <a
            href="#reviews"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            Reviews
          </a>

          
        </div> */}
        {/* <div className="flex items-center space-x-8">
  <div className="relative group">
    <button className="text-gray-800 font-medium hover:text-blue relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 group-hover:after:w-full">
      Publication Services
    </button>
    
    
    <div className="absolute left-0 hidden w-[20rem] group-hover:block bg-white shadow-lg border mt-1 py-2 transition-opacity duration-200 opacity-0 group-hover:opacity-100">
      <a
        href="#service1"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Service 1
      </a>
      <a
        href="#service2"
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      >
        Service 2
      </a>
    </div>
  </div>
  
  <a href="#pr-services" className="text-gray-800 font-medium hover:text-blue-700">
    PR Services
  </a>
  <a href="#support-center" className="text-gray-800 font-medium hover:text-blue-700">
    Scopus Support Center
  </a>
  <a href="#reviews" className="text-gray-800 font-medium hover:text-blue-700">
    Reviews
  </a>
</div> */}

        {/* <div className="flex items-center space-x-4 text-sm">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-gray-800 font-medium hover:text-blue relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
                isDropdownOpen ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Publication Services
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 w-[30rem] bg-white shadow-lg border mt-1 py-2 transition-opacity duration-200 opacity-100">
                <div>
                  <div className="px-4 flex flex-col">
                    <div>
                      <a
                        href="#service1"
                        className=" pt-2 text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        EBook Publishing Service
                      </a>
                    </div>
                    <div>
                      <a
                        href="#service2"
                        className="pt-2 text-sm text-secondary hover:border-b border-blue"
                      >
                        Publication Assistance
                      </a>
                    </div>
                    <a
                      href="#service2"
                      className="pt-2 text-sm text-secondary"
                    >
                      Publication Assistance
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#pr-services"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            PR Services
          </a>
          <a
            href="#support-center"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            RPH Support Center
          </a>
          <a
            href="#reviews"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            Reviews
          </a>
        </div> */}

        <div className="flex items-center space-x-4 text-sm">
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`text-gray-800 font-medium hover:text-blue relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-secondary after:transition-all after:duration-300 ${
                isDropdownOpen ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Publication Services
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute left-0 z-10 w-[30rem] bg-white shadow-lg border mt-1 py-2 transition-opacity duration-200 opacity-100">
                <div className="flex justify-around">
                  <div className="px-2  flex flex-col">
                    <div className="pt-6">
                      <Link
                        href="/ebook-publishing-service"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        EBook Publishing Service
                      </Link>
                    </div>
                    <div className="pt-1">
                      <Link
                        href="/journal-publication-assistance"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Publication Assistance
                      </Link>
                    </div>

                    <div className="pt-1">
                      <a
                        href="#service3"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Publication Consulting
                      </a>
                    </div>
                    <div className="pt-1">
                      <Link
                        href="/article-writing-services"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Article Writing
                      </Link>
                    </div>
                    <div className="pt-1">
                      <a
                        href="/manuscript-writing-services"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Manuscript Writing
                      </a>
                    </div>

                    <div className="pt-1">
                      <a
                        href="#service3"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Thesis Writing
                      </a>
                    </div>
                  </div>
                  <div className="px-2 flex  flex-col">

                    <div>
                      <h1 className="font-bold">Editing Services</h1>
                    </div>
                  <div className="pt-1">
                      <a
                        href="#service1"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Journal Editing
                      </a>
                    </div>
                  </div>
                  <div className="px-2 flex flex-col">

                    <div>
                      <h1 className="font-bold">Editing Services</h1>
                    </div>
                  <div className="pt-1">
                      <a
                        href="#service1"
                        className=" text-sm text-secondary hover:border-b-2 border-blue"
                      >
                        Journal Editing
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#pr-services"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            PR Services
          </a>
          <a
            href="#support-center"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            RPH Support Center
          </a>
          <a
            href="#reviews"
            className="text-gray-800 font-medium hover:text-blue-700"
          >
            Reviews
          </a>
        </div>

        <div className="flex items-center space-x-4">
          {/* <button className="text-gray-800">
            <FaGlobe className="text-lg" />
          </button> */}
          <div className="">
            <Image
              src="/United-Kingdom.webp"
              alt="rph Logo"
              className="w-8 h-8 rounded-full"
              width={40}
              height={40}
            />
          </div>

          <a
            href={`https://wa.me/447456428217?text=${encodeURIComponent(
              "I want to inquire about your services please!"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-blue text-white text-sm  py-2 px-4  hover:bg-secondary rounded-full"
          >
            Talk to Dr. Fiona on WhatsApp
            <RiWhatsappFill className="ml-2 text-xl text-[#45C358]" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
