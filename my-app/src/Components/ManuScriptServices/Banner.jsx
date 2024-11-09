



import React, { useState } from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import DiscountModal from "../DiscountModel"; 

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute hidden md:block top-1/2 -left-4 transform -translate-y-1/2 text-2xl text-white z-10"
    >
      <MdArrowBackIos size={30} />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute hidden md:block top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-white z-10"
    >
      <MdArrowForwardIos size={30} />
    </button>
  );
};

const Banner = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInquirySubmit = () => {
    setIsPopupOpen(true);
  };

  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    adaptiveHeight: true,
  };

  const items = [
    {
      title:
        "Optimized Manuscript Writing Services For Enhanced Visibility",
      subTitle:
        "Increasing the visibility and credibility of your manuscripts at the same time! Get our manuscript writing services with optimized keywords and rigorous research methods.",
      src: "/slide1.webp",
    },
    {
      title: "Targeting The Right Audience With Our Manuscript Preparation Services",
      subTitle:
        "Our manuscript writers align your manuscript with the target audience and scope to make sure that your work is categorized under its specific type.",
      src: "/slide2.webp",
    },
    {
      title:
        "Manuscript Writers Coming With 10+ Years Of Experience",
      subTitle:
        "Extensive Knowledge! Writing Expertise! Continuously Informed! Our manuscript writing experts are like an encyclopedia personified.",
      src: "/slide3.webp",
    },
  ];

  return (
    <div className="bg-secondary w-full py-16">
      <div className="w-full md:w-[70%] mx-auto">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="w-full px-4">
              <div className="flex flex-col md:flex-row items-center gap-8 w-full">
                {/* Left side for text */}
                <div className="md:w-[45%] w-full flex flex-col space-y-4">
                  <h1 className="text-2xl md:text-3xl text-white font-medium">
                    {item.title}
                  </h1>
                  <p className="text-white text-sm md:text-base">
                    {item.subTitle}
                  </p>
                  <div className="flex flex-col md:flex-row gap-2 py-4 w-full md:w-auto">
                    {/* Order Button */}
                    <button
                      className="bg-white w-full md:w-[160px] h-10 flex items-center justify-center rounded-[25px] text-blue text-sm uppercase transition duration-300 ease-in-out"
                      onClick={handleInquirySubmit}
                    >
                      Submit Inquiry
                    </button>

                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/447456428217?text=${encodeURIComponent(
                        "I want to inquire about your services please."
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group w-full md:w-[160px] h-10 flex gap-1 items-center justify-center rounded-[25px] bg-blue transition duration-300 ease-in-out">
                        <IoLogoWhatsapp className="text-xl text-white transition duration-300 ease-in-out" />
                        <h1 className="text-white text-sm uppercase transition duration-300 ease-in-out">
                          WhatsApp Now
                        </h1>
                      </div>
                    </a>
                  </div>
                </div>
                {/* Right side for image */}
                <div className="">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Popup */}
        {isPopupOpen && (
          <DiscountModal
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Banner;
