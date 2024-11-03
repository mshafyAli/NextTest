// import React from "react";
// import { FaStar } from "react-icons/fa6";
// import { SiTrustpilot } from "react-icons/si";
// import Image from "next/image";

// const Clients = () => {
//   return (
//     <div className="w-[90%] mx-auto my-10">
//       <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold pb-4">
//         We&apos;ve Got Satisfied Clients!
//       </h1>

//       <div className="flex gap-4 justify-center">
//         <div className="bg-white w-[420px] h-[260px] rounded-md shadow-md py-6 px-4">
//           <div className="flex justify-between items-center">
//             <h1 className="font-bold">Samuel Gibbs</h1>
//             <div className="flex">
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//             </div>
//           </div>

//           <p className="pt-6 text-sm">
//             I never knew I could enhance my engineering manuscript to such a
//             level of perfection but RPH made it possible. Their meticulous
//             editing and proofreading transformed my draft into a polished and
//             publication-ready article.
//           </p>

//           <div className="flex justify-between pt-6">
//             <h1 className="text-sm">Reviewed On</h1>
//             <div className="flex items-center">
//               <SiTrustpilot className="text-[#00B67A]" size={20} />
//               <h1>Trustpilot</h1>
//             </div>
//           </div>
//         </div>
//         <Image
//           src="/client5.webp"
//           alt="client"
//           className="rounded-md shadow-md w-[420px] h-[260px]"
//           width={320}
//           height={50}
//         />
//         <div className="bg-white w-[420px] h-[260px] rounded-md shadow-md py-6 px-4">
//           <div className="flex justify-between items-center">
//             <h1 className="font-bold">Lucas Williams</h1>
//             <div className="flex">
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//               <FaStar color="#FECD35" />
//             </div>
//           </div>

//           <p className="pt-6 text-sm">
//             Received incredible support from RPH with the formatting and
//             submission of my business management case study. I never knew that
//             such an overwhelming process could be made so smooth and easy.
//           </p>

//           <div className="flex justify-between pt-6">
//             <h1 className="text-sm">Reviewed On</h1>
//             <div className="flex items-center">
//               <SiTrustpilot className="text-[#00B67A]" size={20} />
//               <h1>Trustpilot</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Clients;

// import React from "react";
// import Slider from "react-slick";
// import { FaStar } from "react-icons/fa6";
// import { SiTrustpilot } from "react-icons/si";
// import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import Image from "next/image";

// const CustomPrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 left-0 transform -translate-y-1/2 text-2xl text-secondary z-10"
//     >
//       <MdArrowBackIos />
//     </button>
//   );
// };

// const CustomNextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 text-2xl text-secondary z-10"
//     >
//       <MdArrowForwardIos />
//     </button>
//   );
// };

// const Clients = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     prevArrow: <CustomPrevArrow />,
//     nextArrow: <CustomNextArrow />,
//   };

//   return (
//     <div className="w-[90%] mx-auto my-10">
//       <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold pb-4">
//         We&apos;ve Got Satisfied Clients!
//       </h1>

//       <Slider {...settings}>
//         <div className="">
//           <div className="bg-white w-full h-[260px] rounded-md shadow-md py-6 px-4">
//             <div className="flex justify-between items-center">
//               <h1 className="font-bold">Samuel Gibbs</h1>
//               <div className="flex">
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//               </div>
//             </div>

//             <p className="pt-6 text-sm">
//               I never knew I could enhance my engineering manuscript to such a
//               level of perfection but RPH made it possible. Their meticulous
//               editing and proofreading transformed my draft into a polished and
//               publication-ready article.
//             </p>

//             <div className="flex justify-between pt-6">
//               <h1 className="text-sm">Reviewed On</h1>
//               <div className="flex items-center">
//                 <SiTrustpilot className="text-[#00B67A]" size={20} />
//                 <h1>Trustpilot</h1>
//               </div>
//             </div>
//           </div>
//           <Image
//             src="/client5.webp"
//             alt="client"
//             className="rounded-md shadow-md w-full h-[260px]"
//             width={320}
//             height={50}
//           />
//           <div className="bg-white w-full h-[260px] rounded-md shadow-md py-6 px-4">
//             <div className="flex justify-between items-center">
//               <h1 className="font-bold">Lucas Williams</h1>
//               <div className="flex">
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//                 <FaStar color="#FECD35" />
//               </div>
//             </div>

//             <p className="pt-6 text-sm">
//               Received incredible support from RPH with the formatting and
//               submission of my business management case study. I never knew that
//               such an overwhelming process could be made so smooth and easy.
//             </p>

//             <div className="flex justify-between pt-6">
//               <h1 className="text-sm">Reviewed On</h1>
//               <div className="flex items-center">
//                 <SiTrustpilot className="text-[#00B67A]" size={20} />
//                 <h1>Trustpilot</h1>
//               </div>
//             </div>
//           </div>
//         </div>

//       </Slider>
//     </div>
//   );
// };

// export default Clients;

import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import { SiTrustpilot } from "react-icons/si";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute hidden md:block top-1/2 -left-4 transform -translate-y-1/2 text-2xl text-secondary z-10"
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
      className="absolute hidden md:block top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-secondary z-10"
    >
      <MdArrowForwardIos size={30} />
    </button>
  );
};

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 400,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    slidesToShow: 3, // Show 4 images on desktop
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots: false, // Show dots for navigation
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller devices
        settings: {
          slidesToShow: 3, // Show 3 images on tablets
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
          slidesToShow: 1, // Show 1 image on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[90%] mx-auto my-10">
      <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold pb-4">
        We&apos;ve Got Satisfied Clients!
      </h1>

      <Slider {...settings}>
        {/* Individual slide items */}
        <div className="bg-white w-[420px] md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Samuel Gibbs</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            I never knew I could enhance my engineering manuscript to such a
            level of perfection but RPH made it possible. Their meticulous
            editing and proofreading transformed my draft into a polished and
            publication-ready article.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/client5.webp"
            alt="client"
            className="rounded-md shadow-md w-[420px]   md:h-[230px] h-auto"
            width={320}
            height={50}
          />
        </div>

        <div className="bg-white  md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Lucas Williams</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            Received incredible support from RPH with the formatting and
            submission of my business management case study. I never knew that
            such an overwhelming process could be made so smooth and easy.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/client6.webp"
            alt="client"
            className="rounded-md shadow-md  md:h-[230px] h-auto"
            width={320}
            height={50}
          />
        </div>

        <div className="bg-white w-[420px]  md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Fiona Smith</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            I was concerned that there might be accidental plagiarism in my
            thesis related to life sciences. However, the keen checks and
            complete removal of plagiarism by RPH ensured the uniqueness of my
            work to Scopus standards.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
        <Image
          src="/client1.webp"
          alt="client"
          className="rounded-md shadow-md  md:h-[230px] h-auto"
          width={320}
          height={50}
        />
        <div className="bg-white w-[420px] h-[230px] rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Olivia Gabriel</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            My analytical paper in political science was devoid of something
            that I couldn&apos;t pinpoint. This is where RPH helped me greatly by
            tailoring the language of the paper for better clarity and impact
            which were the main requirements needed for Scopus.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Clients;
