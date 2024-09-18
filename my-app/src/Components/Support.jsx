

import { FaCheck } from "react-icons/fa";
import pic1 from "../../public/1.png";
import pic2 from "../../public/2.png";
import pic3 from "../../public/3.png";
import pic4 from "../../public/4.png";
import pic5 from "../../public/5.png";
import pic6 from "../../public/6.png";
import pic7 from "../../public/7.png";
import pic8 from "../../public/8.png";
import support from "../../public/support.png"
import stars from "../../public/stars.png"
import { TalkBtn } from "./TalkBtn";
import Image from "next/image";
import Slider from "react-slick/lib/slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Support = () => {




  const teamMembers = [
    {
      name: "SHAWN ELLIOT",
      experience: "4-year",
      role: "experience in support",
      image: pic1, // replace with your image path
    },
    {
      name: "ISABELLA GRACE",
      experience: "4-year",
      role: "experience in support",
      image: pic2, // replace with your image path
    },
    {
      name: "RALPH STANLEY",
      experience: "6-year",
      role: "experience in support",
      image: pic3, // replace with your image path
    },
    {
      name: "JOSHUA ARTHUR",
      experience: "5-year",
      role: "experience in support",
      image: pic4, // replace with your image path
    },
    {
      name: "FREYA LANEY",
      experience: "5-year",
      role: "experience in support",
      image: pic5, // replace with your image path
    },
    {
      name: "DANIEL BARNES",
      experience: "6-year",
      role: "experience in support",
      image: pic6, // replace with your image path
    },

    {
      name: "MICHEAL CRUZ",
      experience: "3-year",
      role: "experience in support",
      image: pic7, // replace with your image path
    },

    {
      name: "DYLAN BAILEY",
      experience: "5-year",
      role: "experience in support",
      image: pic8, // replace with your image path
    },
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="bg-primary w-full h-auto relative mt-12">
      <Image
        src={support}
        className="absolute right-4 top-0 w-[80px] sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[250px]"
        alt="support"
        width={100}
        height={100}
      />
      <Image
        src={stars}
        className="absolute left-10 top-10 w-[50px] sm:w-[70px] md:w-[100px] lg:w-[150px] xl:w-[200px]"
        alt="stars"
        width={30}
        height={30}
      />

      <div className="w-full md:w-[85%]  mx-auto px-4">
        <div className="relative flex flex-col items-center justify-center md:py-20 py-10">
          <div className="absolute text-center bottom-32 font-extrabold text-white opacity-10 text-5xl sm:text-6xl md:text-8xl uppercase hidden md:flex ">
            Support team
          </div>

          {/* Content for larger screens */}
          <div className="hidden md:block ">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase text-center">
            HERE'S WHO WILL BE PROCESSING
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white uppercase text-center">
            YOUR 'ACADEMIC HELP' REQUESTS
            </h2>
           
          </div>

          {/* Content for smaller screens */}
          <div className="block md:hidden mt-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white uppercase text-center">
            HERE'S WHO WILL BE PROCESSING YOUR 'ACADEMIC HELP' REQUESTS
            </h1>
          </div>
        </div>

        <p className="text-center text-white   w-[95%] md:w-[75%] lg:w-[60%] xl:w-[53%] mx-auto opacity-70 -mt-10">
        These are real people from the UK who know their job inside out. You don't see them, but you can't help but notice their quick answers on Chat.
        </p>
        
        <h1 className="text-center mt-8 md:mt-10 uppercase text-white font-semibold text-lg md:text-xl">
        HOW THEY CAN HELP YOU
        </h1>

        {/* container */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-evenly">
         


           {/* Left side */}
      <div className="md:w-[37%] w-full">
        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            Get your assignment done in just 3 hours
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>

        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            We are providing one-stop-shop solutions
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>

        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            Get unmatched assignment writing services
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>
      </div>

      {/* Right side */}
      <div className="md:w-[37%] w-full">
        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            100% money-back guarantee and support
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>

        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            Covering all disciplines, technical or complex
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>

        <div className="flex items-center md:gap-3 gap-2 py-3">
          <div className="bg-tertiary md:w-6 md:h-6 w-7 h-6 rounded-full flex items-center justify-center">
            <FaCheck color="white" className="md:text-base text-[13px]" />
          </div>
          <h1 className="text-base font-semibold text-white">
            Meeting all the requirements as per guidelines
          </h1>
        </div>
        <div className="border-t-2 border-dashed border-white opacity-20"></div>
      </div>
        </div>

        {/* cards Section */}

        <div className="relative flex items-center justify-center mt-8">
          {/* <button onClick={handlePrev}>
            <FaArrowLeft
              className="absolute md:left-4 -left-2"
              color="#879BB7"
              size={20}
            />
          </button> */}

          <div className="w-full">
         
         <Slider {...settings}>
         {teamMembers.map((team, index) => (
                <div
                  key={index}
                  className="bg-[#131831] shadow-md w-full md:w-[400px] h-auto py-5 px-2 "
                >
                  <div className="flex  justify-center gap-2">
                    <Image src={team.image} alt="pic" className="w-16 h-16" width={50} height={50} />

                    <div className="flex flex-col gap-2">
                      <h1 className="text-white font-bold">{team.name}</h1>
                      <h1 className="text-white">
                        <span className="text-tertiary font-bold">
                          {team.experience}{" "}
                        </span>
                        {team.role}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
         </Slider>
           
             
          </div>

          {/* <button onClick={handleNext}>
            <FaArrowRight
              className="absolute md:right-4 -right-2"
              color="#879BB7"
              size={20}
            />
          </button> */}
        </div>
    

   
        <p className="text-center font-bold text-white mt-16 text-xl">
          NEED ASSISTANCE? WE'RE HERE FOR YOU 24/7!
        </p>

        <div className="md:flex items-center justify-center pt-8 w-full pb-8">
       <TalkBtn/>
        </div>
      </div>
    </div>
  );
};

export default Support;





