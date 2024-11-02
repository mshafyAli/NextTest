import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";
import SignUp from "./SignUp";
import { TalkBtn } from "./TalkBtn";
import { SiTrustpilot } from "react-icons/si";
import { FaCheckCircle } from "react-icons/fa";



import Image from "next/image";
import Bullets from "./Bullets";
import TwoButtons from "./TwoButtons";

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-primary w-full h-auto pt-20">
      <div className="bg-banner-bg bg-cover bg-center h-auto w-full">
        <div className="md:w-[80%]  max-w-7xl mx-auto px-4 md:py-10 py-6 ">
          <div className="flex flex-col items-start md:flex-row gap-12 md:gap-20 lg:gap-20">
            {/* Left Container */}
            <div className="md:w-[50%]">
              <div className="bg-white w-[120px] py-2 px-2 rounded-md  border-2 border-green font-medium text-xl  uppercase ">
              <Image src="google-reviews.webp" alt="rph Logo" width={100} height={100} />
              </div>
              <h1 className="text-2xl md:text-4xl text-secondary font-bold mt-2">
              We Publish Your Paper in Top Journals
              </h1>
             

             

              <p className="whitespace-pre-wrap text-black pt-4 text-sm  font-medium">Are you planning to publish your articles or research papers?</p>
              <p className="whitespace-pre-wrap text-black text-sm  font-medium">Stop struggling now and let us publish your paper in premium Journals.</p>

              
              
              
              <Bullets/>
              
              

             

              <div className="flex justify-center md:justify-start gap-4 py-2">
                

                <div className="bg-secondary  md:w-[11rem] h-14 p-2 rounded-md ">
                  <div className="flex items-center justify-start gap-1 h-full">
                    <div>
                      <SiTrustpilot className="w-7 h-7 md:w-8 md:h-8 text-[#00B67A]" />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1 text-white">
                        <h1 className="text-base font-bold">4.7</h1>
                        <div className="flex">
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          
                        </div>
                      </div>
                      <h1 className="text-sm text-white">TrustPilot</h1>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary  md:w-[13rem] h-14 p-2 rounded-md ">
                  <div className="flex items-center justify-start gap-1 h-full">
                    <div>
                    <Image src="/logo.png" alt="rph Logo" width={50} height={50} />
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1 text-white">
                        <h1 className="text-base font-bold">4.9</h1>
                        <div className="flex">
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          <IoStarSharp className="text-[#90C120]" size={15} />
                          
                        </div>
                      </div>
                      <h1 className="text-[12px] text-white">researchpublicationhouse</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center pt-4">
              <FaCheckCircle className="text-secondary" size={20} />
              <h1 className="text-secondary">We are Trusted By 40K+ Clients Worldwide & <span className="font-bold">Rated 4.9/5</span></h1>
              </div>

              <div className="bg-secondary w-[30rem] py-2 px-4 rounded-md my-3">
              <Image src="/section-rating-1.png"alt="rph Logo" width={420} height={200} />
              </div>
             
                <TwoButtons/>
            </div>

            {/* Right Container */}
            <div className="md:w-[35%] w-full  mx-auto">
              <SignUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
