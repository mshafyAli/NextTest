'use client'

import { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { TiArrowSortedDown, TiThMenu, TiTimes } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";
import { FaBuildingColumns } from "react-icons/fa6";
import { BiMessageRoundedDots } from "react-icons/bi";
// import logo from "../../assets/ta-logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TalkBtn } from "./TalkBtn";

const Navbar = ({ onAboutClick, onContactClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const serviceRef = useRef(null);
  const router = useRouter();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
      <div className="flex items-center justify-evenly md:w-[90%] w-[95%] mx-2 md:mx-auto text-white">
        <Link href="/">
          <div className="text-2xl">
            loge here
          </div>
        </Link>

        <div className="hidden md:flex gap-4">
          <Link href="/">
            <h1 className="font-bold">Home</h1>
          </Link>

          

          <button onClick={onAboutClick} className="font-bold cursor-pointer">About</button>

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

          <button onClick={onContactClick} className="font-bold cursor-pointer">Contact Us</button>

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
</div>
</div>

)
}
export default Navbar;