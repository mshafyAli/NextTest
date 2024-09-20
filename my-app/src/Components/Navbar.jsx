'use client'

import { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp, IoMdCall } from "react-icons/io";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";
// import logo from "../../assets/ta-logo.png";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { TalkBtn } from "./TalkBtn";
import Image from "next/image";

const Navbar = ({handleAboutClick, handleContactClick}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);


  };





  // const handleScrollToSection = (ref) => {
  //   if (ref && ref.current) {
  //     ref.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const handleAboutClick = () => {
  //   if (pathname === '/') {
  //     // If already on the Home page, scroll to the About section
  //     handleScrollToSection(aboutRef);
  //   } else {
  //     // Navigate to the Home page with query param for 'about' section
  //     router.push('/?scrollTo=about');
  //   }
  // };

  // const handleContactClick = () => {
  //   if (pathname === '/') {
  //     // If already on the Home page, scroll to the Contact section
  //     handleScrollToSection(contactRef);
  //   } else {
  //     // Navigate to the Home page with query param for 'contact' section
  //     router.push('/?scrollTo=contact');
  //   }
  // };

   // Navigate to home with hash for scrolling
  //  const handleScrollToAbout = () => {
  //   router.push('/#about');
  // };

  // const handleScrollToContact = () => {
  //   router.push('/#contact-us');
  // };


  // const handleAboutClick = () => {
  //   // Navigate to home page with query param for 'about' section
  //   router.push('/?scrollTo=about');
  // };

  // const handleContactClick = () => {
  //   // Navigate to home page with query param for 'contact' section
  //   router.push('/?scrollTo=contact');
  // };

  // Close dropdown if click outside of dropdown or service
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !serviceRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
    }
  };

 

 
 

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#010621] h-auto w-full lg:py-8 md:py-8 pt-8 md:pt-0 pb-4 md:pb-8  md:mt-8">
      <div className="flex items-center justify-evenly md:w-[95%] w-[95%] ml-4 md:mx-auto text-white">
        <Link href="/">
          <div className="text-2xl">
            <Image src="/ta-logo.png" alt="Logo" width="300" height="300" className="w-[300px] h-auto md:ml-0  -mr-12"/>
          </div>
        </Link>

        <div className="hidden md:flex gap-4">
          <Link href="/">
            <h1 className="font-bold">Home</h1>
          </Link>

          

          <button onClick={handleAboutClick} className="font-bold cursor-pointer">About</button>

          <div
            className="relative flex items-center gap-1"
            onClick={toggleDropdown}
            ref={serviceRef}
          >
            <h1
              className={`cursor-pointer font-bold ${
                isDropdownOpen ? "text-white" : ""
              }`}
            >
              Services
            </h1>
            <TiArrowSortedDown size={15} />
            {isDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-2 bg-[#010621] border border-[#ffffff7a] w-[220px] text-white rounded-lg shadow-lg z-20"
                ref={dropdownRef}
              >
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/assignment-help">
                      Assignment Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/essay-help">
                      Essay Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/coursework-help">
                      Coursework Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/exam-help">
                      Online Exam Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/dissertation-help">
                      Dissertation Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/research-proposal">
                      Research Proposal Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/coding-help">
                      Coding Help
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button onClick={handleContactClick} className="font-bold cursor-pointer">Contact Us</button>

          <Link href="/review">
            <h1 className="font-bold">Our Reviews</h1>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href={`https://wa.me/447397145697?text=${encodeURIComponent(
              "Hello Team Academians, I want to avail my promo code TA-OFF50."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#15803D] w-[220px] h-10 flex px-2 rounded-md">
              <div className="flex items-center gap-1">
                <IoLogoWhatsapp className="text-3xl" />
                <h1 className="text-white uppercase font-bold">
                  get 50% discount
                </h1>
              </div>
            </div>
          </a>
         <TalkBtn/>
        </div>
        <div className="md:hidden flex items-center mx-auto">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <TiTimes size={30} className="text-white" />
            ) : (
              <TiThMenu size={30} className="text-white" />
            )}
          </button>
        </div>
</div>

{/* Mobile Menu */}
{isMenuOpen && (
        <div className="md:hidden bg-primary w-full text-white px-4 py-8">
          <Link href="/">
            <div className="flex gap-2 items-center">
              <IoHome size={25} />
              <h1>Home</h1>
            </div>
          </Link>
          <div className="flex gap-2 items-center py-4">
            <IoBagCheck size={25} />
            <h1 onClick={handleAboutClick} className="cursor-pointer">
              About
            </h1>
          </div>

          <div>
            <div className="flex gap-2">
              <FaBuildingColumns size={25} />
              <div
                className="relative mt-1 flex items-center gap-1 pb-4"
                onClick={toggleDropdown}
                ref={serviceRef}
              >
                <h1
                  className={`cursor-pointer ${
                    isDropdownOpen ? "text-white" : ""
                  }`}
                >
                  Services
                </h1>
                <TiArrowSortedDown size={15} />
              </div>
            </div>
            {isDropdownOpen && (
              <div
                className="bg-[#007285] border border-[#ffffff7a] w-[220px] text-white rounded-md shadow-lg mt-2 mb-4"
                ref={dropdownRef}
              >
                <ul>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                  <Link href="/assignment-help">
                      Assignment Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
          
                    <Link href="/essay-help">
                    Essay Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    
                    <Link href="/coursework-help">
                    Coursework Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    <Link href="/exam-help">
                    Online Exam Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                    
                    <Link href="/dissertation-help">
                    Dissertation Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                  <Link href="/research-proposal">
                      Research Proposal Help
                    </Link>
                  </li>
                  <li className="p-2 hover:bg-gray-100 hover:rounded-md hover:text-blue-300 hover:font-bold cursor-pointer">
                   
                    <Link href="/coding-help">
                    Coding Help
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/review">
            <div className="flex items-center gap-2">
              <BiMessageRoundedDots size={25} />
              <h1 className="">Reviews</h1>
            </div>
          </Link>
          <div className="flex items-center gap-2 py-4">
            <IoMdCall size={25} />
            <h1 onClick={handleContactClick} className="cursor-pointer">
              Contact Us
            </h1>
          </div>

          <a
            href={`https://wa.me/447397145697?text=${encodeURIComponent(
              "Hello Team Academians, I want to avail my promo code TA-OFF50."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            <div className="bg-[#408955] w-[60%] px-2 py-2 flex justify-center rounded-md">
              <div className="flex items-center gap-2">
                <IoLogoWhatsapp className="text-3xl" />
                <h1 className="text-white uppercase font-bold">50% discount</h1>
              </div>
            </div>
          </a>
        </div>
      )}
</div>

)
}
export default Navbar;