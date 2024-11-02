import { IoLogoWhatsapp } from "react-icons/io";
import { IoStarSharp, IoStarHalfOutline } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";

// import featureline from "../assets/featureline.png";
import SignUp from "../SignUp";
import { TalkBtn } from "../TalkBtn";
import { SiTrustpilot } from "react-icons/si";
import Image from "next/image";

const Banner = () => {


  return (
    <div className="bg-cover bg-center bg-primary w-full h-auto" style={{backgroundImage:'url(/bgbanner.png)'}}>
      <div className="bg-banner-bg bg-cover bg-center h-auto w-full">
        <div className="md:w-[80%]  max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-20">
            {/* Left Container */}
            <div className="text-white  md:w-[65%]">
              <h1 className="font-semibold text-xl md:text-2xl uppercase">
              Get A+ with Our Help 
              </h1>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
              STUCK WITH YOUR ASSIGNMENTS DEADLINE?
              </h1>
                {/* <Image src="/featureline.png"  alt="Feature Line" width={120} height={20} /> */}
              {/* <img src={featureline} alt="Feature line" className="mt-2" /> */}


              <p className="whitespace-pre-wrap py-4 text-sm md:text-base lg:text-lg font-semibold">
              Struggling with your assignments? Get assignment help from highly qualified and expert professionals
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto md:hidden -mb-6 -mt-6">
              <TalkBtn />
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello The Academians,I want to avail my secure promo code TAC-OFF50"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-green w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
                    <IoLogoWhatsapp className="text-2xl text-white" />
                    <h1 className="text-white font-bold text-sm md:text-base uppercase">
                      Whatsapp Now
                    </h1>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    24/7 Free Support
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    Best Price
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    100% Money Back Guarantee
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    Top Quality Work
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    Plagiarism Free
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm md:text-base lg:text-lg font-semibold">
                    On time Deliver
                  </h1>
                </div>
              </div>

              <div className="md:flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto hidden">
              <TalkBtn/>
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello The Academians,I want to avail my secure promo code TAC-OFF50"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-green w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
                    <IoLogoWhatsapp className="text-2xl text-white" />
                    <h1 className="text-white font-bold text-sm md:text-base uppercase">
                      Whatsapp Now
                    </h1>
                  </div>
                </a>
              </div>

              <div className="flex justify-center md:justify-start gap-4 py-2">
                <div className="bg-[#00000080] md:w-[8rem] h-14 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                        <Image src='/ukwriters.png' className="w-7 h-7 md:w-7 md:h-7" alt="UK Writers" width={20}
              height={20} />
                      
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold">4.9</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarHalfOutline color="#E85F2A" size={10} />
                        </div>
                      </div>
                      <h1 className="text-[11px]">UK Top Writers</h1>
                    </div>
                  </div>
                </div>

                <div className="bg-[#00000080]  md:w-[8rem] h-14 p-2 rounded-md border border-white">
                  <div className="flex items-center justify-between h-full">
                    <div>
                        <SiTrustpilot  className="w-7 h-7 md:w-7 md:h-7 text-green"/>
                      
                    </div>
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-1">
                        <h1 className="text-sm font-bold">4.8</h1>
                        <div className="flex">
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A" size={10} />
                          <IoStarSharp color="#E85F2A"  size={10}/>
                          <IoStarHalfOutline color="#E85F2A" size={10} />
                        </div>
                      </div>
                      <h1 className="text-[11px]">TrustPilot</h1>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="bg-[#00000080]  md:w-[8rem] h-14 p-2 rounded-md border border-white">
                    <div className="flex items-center justify-between h-full">
                      <div>
                      <Image src='/sitejabber.png' className="w-7 h-7 md:w-7 md:h-7" alt="sitejabber" width={20}
              height={20} />
                       
                      </div>
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-1">
                          <h1 className="text-sm font-bold">4.8</h1>
                          <div className="flex">
                            <IoStarSharp color="#E85F2A" size={10} />
                            <IoStarSharp color="#E85F2A" size={10} />
                            <IoStarSharp color="#E85F2A" size={10} />
                            <IoStarSharp color="#E85F2A" size={10} />
                            <IoStarHalfOutline color="#E85F2A" size={10} />
                          </div>
                        </div>
                        <h1 className="text-[11px] mr-4">SiteJabber</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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