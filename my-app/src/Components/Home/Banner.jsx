// import React from "react";
// import TwoButtons from "./TwoButtons";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// // Custom Arrow Components
// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute hidden md:block top-1/2 -left-4 transform -translate-y-1/2 text-2xl text-white z-10"
//     >
//       <MdArrowBackIos size={30} />
//     </button>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute hidden md:block top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-white z-10"
//     >
//       <MdArrowForwardIos size={30} />
//     </button>
//   );
// };

// const Banner = () => {
//   const settings = {
//     infinite: true,
//     speed: 400,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     dots: false,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     adaptiveHeight: true, // Helps with flex layout consistency
//   };

//   const items = [
//     {
//       title: "Maximize Your Research Impact With Our Research House Publication Services",
//       subTitle: "Let the world know about your research! Our Research House Publication services ensure your groundbreaking research gets the global spotlight it deserves.",
//       src: "/slide1.webp",
//     },
//     {
//       title: "Our Spot-on Publication Strategies Hit The Mark Every Time",
//       subTitle: "Bulls-eye! This is what our Research House Publication experts aim at with their adept publication strategies by aligning it with the required submission process.",
//       src: "/slide2.webp",
//     },
//     {
//       title: "Our Research House Publication Experts Deliver Accurate Format, Length, And Style!",
//       subTitle: "We carefully adhere to journal publication in Scopus standards, ensuring your manuscript shines with outstanding formatting and clear writing.",
//       src: "/slide3.webp",
//     },
//   ];

//   return (
//     <div className="bg-secondary w-full py-16">
//       <div className="w-full md:w-[70%] mx-auto">
//         <Slider {...settings}>
//           {items.map((item, index) => (
//             <div key={index} className="w-full px-4">
//               <div className="flex flex-col md:flex-row items-center gap-12 w-full">
//                 {/* Left side for text */}
//                 <div className="md:w-[45%] w-full flex flex-col space-y-4">
//                   <h1 className="text-2xl md:text-3xl text-white font-medium">
//                     {item.title}
//                   </h1>
//                   <p className="text-white text-sm md:text-base">
//                     {item.subTitle}
//                   </p>
//                   <TwoButtons />
//                 </div>
//                 {/* Right side for image */}
//                 <div className="">
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     width={400}
//                     height={300}
//                     className="object-cover  w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// with Popup

// import React, { useState } from "react";
// import TwoButtons from "./TwoButtons";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import { IoLogoWhatsapp } from "react-icons/io5";

// // Custom Arrow Components
// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute hidden md:block top-1/2 -left-4 transform -translate-y-1/2 text-2xl text-white z-10"
//     >
//       <MdArrowBackIos size={30} />
//     </button>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute hidden md:block top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-white z-10"
//     >
//       <MdArrowForwardIos size={30} />
//     </button>
//   );
// };

// // Popup Component
// const Popup = ({ onClose }) => (
//   <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
//     <div className="bg-white p-8 rounded-lg max-w-md w-full">
//       <h2 className="text-xl font-semibold mb-4">Inquiry Submitted!</h2>
//       <p>Your inquiry has been successfully submitted.</p>
//       <button
//         onClick={onClose}
//         className="mt-4 px-4 py-2 bg-blue-500 text-black rounded-md"
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// const Banner = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleInquirySubmit = () => {
//     setIsPopupOpen(true);
//   };

//   const settings = {
//     infinite: true,
//     speed: 400,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplaySpeed: 3000,
//     dots: false,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//     adaptiveHeight: true,
//   };

//   const items = [
//     {
//       title:
//         "Maximize Your Research Impact With Our Research House Publication Services",
//       subTitle:
//         "Let the world know about your research! Our Research House Publication services ensure your groundbreaking research gets the global spotlight it deserves.",
//       src: "/slide1.webp",
//     },
//     {
//       title: "Our Spot-on Publication Strategies Hit The Mark Every Time",
//       subTitle:
//         "Bulls-eye! This is what our Research House Publication experts aim at with their adept publication strategies by aligning it with the required submission process.",
//       src: "/slide2.webp",
//     },
//     {
//       title:
//         "Our Research House Publication Experts Deliver Accurate Format, Length, And Style!",
//       subTitle:
//         "We carefully adhere to journal publication in Scopus standards, ensuring your manuscript shines with outstanding formatting and clear writing.",
//       src: "/slide3.webp",
//     },
//   ];

//   return (
//     <div className="bg-secondary w-full py-16">
//       <div className="w-full md:w-[70%] mx-auto">
//         <Slider {...settings}>
//           {items.map((item, index) => (
//             <div key={index} className="w-full px-4">
//               <div className="flex flex-col md:flex-row items-center gap-8 w-full">
//                 {/* Left side for text */}
//                 <div className="md:w-[45%] w-full flex flex-col space-y-4">
//                   <h1 className="text-2xl md:text-3xl text-white font-medium">
//                     {item.title}
//                   </h1>
//                   <p className="text-white text-sm md:text-base">
//                     {item.subTitle}
//                   </p>
//                   {/* <TwoButtons onClick={handleInquirySubmit} /> */}
//                   <div className="flex flex-col md:flex-row gap-2 py-4 w-full md:w-auto">
//                     {/* Order Button */}
//                     <button
                     
//                       className="bg-white w-full md:w-[160px] h-10 flex items-center justify-center rounded-[25px]  text-blue text-sm uppercase transition duration-300 ease-in-out" onClick={handleInquirySubmit}
//                     >
//                       Submit Inquiry
//                     </button>

//                     {/* WhatsApp Button */}
//                     <a
//                       href={`https://wa.me/447456428217?text=${encodeURIComponent(
//                         "I want to inquire about your services please."
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <div className="group  w-full md:w-[160px] h-10 flex gap-1 items-center justify-center rounded-[25px] bg-blue transition duration-300 ease-in-out">
//                         <IoLogoWhatsapp className="text-xl text-white transition duration-300 ease-in-out" />
//                         <h1 className="text-white text-sm uppercase  transition duration-300 ease-in-out">
//                         WhatsApp Now
//                         </h1>
//                       </div>
//                     </a>
//                   </div>
//                   {/* <button className="bg-white rounded-md" onClick={handleInquirySubmit}>Submit Inquiry</button> */}
//                 </div>
//                 {/* Right side for image */}
//                 <div className="">
//                   <Image
//                     src={item.src}
//                     alt={item.title}
//                     width={400}
//                     height={300}
//                     className="object-cover  w-full"
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>

//         {/* Popup */}
//         {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React, { useState } from "react";
// import TwoButtons from "./TwoButtons";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io5";
import DiscountModal from "../DiscountModel"; // Import the DiscountModal component

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
        "Maximize Your Research Impact With Our Research House Publication Services",
      subTitle:
        "Let the world know about your research! Our Research House Publication services ensure your groundbreaking research gets the global spotlight it deserves.",
      src: "/slide1.webp",
    },
    {
      title: "Our Spot-on Publication Strategies Hit The Mark Every Time",
      subTitle:
        "Bulls-eye! This is what our Research House Publication experts aim at with their adept publication strategies by aligning it with the required submission process.",
      src: "/slide2.webp",
    },
    {
      title:
        "Our Research House Publication Experts Deliver Accurate Format, Length, And Style!",
      subTitle:
        "We carefully adhere to journal publication in Scopus standards, ensuring your manuscript shines with outstanding formatting and clear writing.",
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
