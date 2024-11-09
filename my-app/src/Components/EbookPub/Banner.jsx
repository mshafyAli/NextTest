import React from "react";
import { FaCheck } from "react-icons/fa";
import TwoBtn from "../TwoBtn";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {

    const images = [
        {src: "/nook.webp"},
        {src: "/scribd.webp"},
        {src: "/bookmate.webp"},
        {src: "/elogo4.webp"},
        {src: "/Barnes-noble.webp"},
        {src: "/elogo6.webp"},
        {src: "/elogo7.webp"},
        {src: "/elogo8.webp"},
        {src: "/elogo9.webp"},
        {src: "/elogo10.webp"},
        {src: "/elogo11.webp"},
    ]

    const settings = {
        infinite: true,
        speed: 300,
        swipe: true,
        swipeToSlide: true,
        draggable: true,
        autoplay: true,
        slidesToShow: 6, // Show 4 images on desktop
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        dots: false, // Show dots for navigation
        arrows: false,
        responsive: [
          {
            breakpoint: 1024, // For tablets and smaller devices
            settings: {
              slidesToShow: 4, // Show 3 images on tablets
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768, // For mobile devices
            settings: {
              slidesToShow: 2, // Show 2 images on small tablets
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // For mobile devices
            settings: {
              slidesToShow: 2, // Show 1 image on mobile
              slidesToScroll: 1,
            },
          },
        ],
      };



  return (
    <div className="bg-bgImage w-full bg-cover bg-center h-auto">
      <div className="w-[80%]  mx-auto py-20">
        <div className=" w-[80%] flex flex-col justify-center items-center mx-auto">
          <h1 className="md:text-4xl text-2xl text-white text-center  font-bold">
            Globally Recognized EBook Publishing Services
          </h1>
          <h4 className="bg-white w-[20rem] text-2xl md:text-4xl font-bold px-2 py-4 mt-2 rounded-md text-green">
            At Your Expense
          </h4>
          <p className="text-2xl font-bold text-white mt-4">
            Get your ebooks published by us and get global recognition!
          </p>
          <p className="text-2xl font-bold text-white text-center ">
            Your dreams of becoming a published author are now in your grasp.
          </p>
        </div>
        <div className="flex justify-center gap-6 items-center  px-4 pt-6">
          <div className="">
            <div className="flex gap-2 py-1 items-center">
              <FaCheck className="text-green" size={20} />
              <h4 className="text-white text-base font-semibold">
                Trusted By 400+ Authors Globally
              </h4>
            </div>
            <div className="flex gap-2 py-1 items-center">
              <FaCheck className="text-green" size={20} />
              <h4 className="text-white text-base font-semibold">
                86% of Customers Rehire
              </h4>
            </div>
          </div>
          <div>
            <div className="flex gap-2 py-1 items-center">
              <FaCheck className="text-green" size={20} />
              <h4 className="text-white text-base font-semibold">
                2.5k+ Writers And Editors
              </h4>
            </div>
            <div className="flex gap-2 py-1 items-center">
              <FaCheck className="text-green" size={20} />
              <h4 className="text-white text-base font-semibold">
                100% Satisfaction Guaranteed
              </h4>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 md:hidden">
          <div className="flex gap-2 items-center">
            <FaCheck className="text-green" size={20} />
            <h4 className="text-white text-base font-semibold">
              Trusted By 400+ Authors Globally
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaCheck className="text-green" size={20} />
            <h4 className="text-white text-base font-semibold">
              86% of Customers Rehire
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaCheck className="text-green" size={20} />
            <h4 className="text-white text-base font-semibold">
              2.5k+ Writers And Editors
            </h4>
          </div>
          <div className="flex gap-2 items-center">
            <FaCheck className="text-green" size={20} />
            <h4 className="text-white text-base font-semibold">
              100% Satisfaction Guaranteed
            </h4>
          </div>
        </div>

        <div className="flex justify-center py-4">
          <TwoBtn whatsappBorderColor="white" whatsappTextColor="text-white" />
        </div>

        <div className="w-[90%] mx-auto mt-4">
          <div className="bg-white rounded-md ">
           <Slider {...settings}>
           {
                images.map((item, index)=>(
                    <div key={index} className="px-4 pt-10 pb-2">
                        <Image src={item.src} alt="eboobk-logo" width={120} height={100} />
                    </div>
                ))
            }
           </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
