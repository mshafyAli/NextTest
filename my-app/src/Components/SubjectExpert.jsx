import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-4 transform -translate-y-1/2 text-2xl text-secondary z-10"
    >
      <MdArrowBackIos size={30} />
    </button>
  );
};


const cardData = [
  { title: 'Law', subjects: '250+ Subjects', experts: '400+ experts', papers: '40,000+ papers', imgSrc: '/sub1.webp', bgColor: '#53338C' },
  { title: 'Business', subjects: '250+ Subjects', experts: '400+ experts', papers: '35,000+ papers', imgSrc: '/sub2.webp', bgColor: '#66C5AF' },
  { title: 'Education', subjects: '200+ Subjects', experts: '400+ experts', papers: '35,000+ papers', imgSrc: '/sub3.webp', bgColor: '#CFA539' },
  { title: 'Political Sciences', subjects: '150+ Subjects', experts: '350+ experts', papers: '25,000+ papers', imgSrc: '/sub4.webp', bgColor: '#5BA8AE' },
  { title: 'Computer Sciences', subjects: '250+ Subjects', experts: '400+ experts', papers: '35,000+ papers', imgSrc: '/sub5.webp', bgColor: '#AC736C' },
  { title: 'Social Sciences', subjects: '400+ Subjects', experts: '750+ experts', papers: '30,000+ papers', imgSrc: '/sub5.webp', bgColor: '#AC736C' },
  { title: 'Engineering and Technology', subjects: '450+ Subjects', experts: '750+ experts', papers: '50,000+ papers', imgSrc: '/sub2.webp', bgColor: '#5BC1AA' },
  { title: 'Medical Sciences', subjects: '250+ Subjects', experts: '750+ experts', papers: '45,000+ papers', imgSrc: '/sub3.webp', bgColor: '#5BC1AA' },
  { title: 'Economics', subjects: '250+ Subjects', experts: '450+ experts', papers: '35,000+ papers', imgSrc: '/sub5.webp', bgColor: '#5BC1AA' },
  { title: 'Physical Sciences', subjects: '300+ Subjects', experts: '750+ experts', papers: '38,000+ papers', imgSrc: '/sub5.webp', bgColor: '#5BC1AA' },
];

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-2xl text-secondary z-10"
    >
      <MdArrowForwardIos size={30} />
    </button>
  );
};

const SubjectExpert = () => {
  const settings = {
    infinite: true,
    speed: 400,
    swipe: true,
    swipeToSlide: true,
    draggable: true,
    autoplay: true,
    slidesToShow: 4, // Show 4 images on desktop
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
    // <div className="w-[80%] mx-auto my-12">
    //   <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
    //     Subject-specific Expertise
    //   </h1>

    //   <div className="mt-6">
    //     <Slider {...settings}>
    //       {/* 1st card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Law</h3>
    //           <p className="text-sm">250+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub1.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#53338C] font-bold justify-center relative -top-20">
    //           400+ experts <br />
    //           40,000+ papers
    //         </p>
    //       </div>

    //       {/* 2nd card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Business</h3>
    //           <p className="text-sm">250+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub2.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#66C5AF] font-bold justify-center relative -top-20">
    //           400+ experts <br />
    //           35,000+ papers
    //         </p>
    //       </div>

    //       {/* 3rd card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Education</h3>
    //           <p className="text-sm">200+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub3.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#CFA539] font-bold justify-center relative -top-20">
    //           400+ experts <br />
    //           35,000+ papers
    //         </p>
    //       </div>

    //       {/* 4th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Political Sciences</h3>
    //           <p className="text-sm">150+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub4.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#5BA8AE] font-bold justify-center relative -top-20">
    //           350+ experts <br />
    //           25,000+ papers
    //         </p>
    //       </div>

    //       {/* 5th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Computer Sciences</h3>
    //           <p className="text-sm">250+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub5.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#AC736C] font-bold justify-center relative -top-20">
    //           400+ experts <br />
    //           35,000+ papers
    //         </p>
    //       </div>

    //       {/* 6th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Social Sciences</h3>
    //           <p className="text-sm">400+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub5.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#AC736C] font-bold justify-center relative -top-20">
    //           750+ experts <br />
    //           30,000+ papers
    //         </p>
    //       </div>

    //       {/* 7th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Engineering and Technology</h3>
    //           <p className="text-sm">450+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub2.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#5BC1AA] font-bold justify-center relative -top-20">
    //           750+ experts <br />
    //           50,000+ papers
    //         </p>
    //       </div>

    //       {/* 8th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Medical Sciences</h3>
    //           <p className="text-sm">250+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub3.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#5BC1AA] font-bold justify-center relative -top-20">
    //           750+ experts <br />
    //           45,000+ papers
    //         </p>
    //       </div>

    //       {/* 9th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Economics</h3>
    //           <p className="text-sm">250+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub5.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#5BC1AA] font-bold justify-center relative -top-20">
    //           450+ experts <br />
    //           35,000+ papers
    //         </p>
    //       </div>

    //       {/* 10th card */}
    //       <div className="w-[250px] h-[300px] bg-white shadow-xl relative ">
    //         <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center ">
    //           <h3 className="font-bold">Physical Sciences</h3>
    //           <p className="text-sm">300+ Subjects</p>
    //         </div>

    //         <Image
    //           src="/sub-bg.webp"
    //           alt="high Logo"
    //           width={224}
    //           height={150}
    //           className="relative -top-[2%] -right-6"
    //         />

    //         <Image
    //           src="/sub5.webp"
    //           alt="high Logo"
    //           width={100}
    //           height={80}
    //           className="absolute top-[30%] left-[30%] "
    //         />

    //         <p className="flex text-sm text-[#5BC1AA] font-bold justify-center relative -top-20">
    //           750+ experts <br />
    //           38,000+ papers
    //         </p>
    //       </div>
    //     </Slider>
    //   </div>
    // </div>

    <div className="w-[80%] mx-auto my-12">
    <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
      Subject-specific Expertise
    </h1>

    <div className="mt-6">
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index} className="w-[250px] h-[300px] bg-white shadow-xl relative">
            <div className="bg-secondary absolute z-10 h-16 w-full text-white flex flex-col items-center justify-center" >
              
              <h3 className="font-bold">{card.title}</h3>
              <p className="text-sm">{card.subjects}</p>
            </div>

            <Image
              src="/sub-bg.webp"
              alt={`${card.title} background`}
              width={224}
              height={150}
              className="relative -top-[2%] -right-12"
            />

            <Image
              src={card.imgSrc}
              alt={`${card.title} logo`}
              width={100}
              height={80}
              className="absolute top-[30%] left-[30%]"
            />

            <p className="flex text-sm font-bold justify-center relative -top-20" style={{ color: card.bgColor }}>
              {card.experts} <br />
              {card.papers}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default SubjectExpert;
