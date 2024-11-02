import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdStar } from "react-icons/io";
import SignUp from "../SignUp";
import { TalkBtn } from "../TalkBtn";
import { FaGift } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-cover bg-center bg-primary w-full h-auto">
      <div className="bg-banner-bg bg-cover bg-center h-auto w-full">
        <div className="md:w-[85%]  max-w-7xl mx-auto px-4 md:py-10 py-6 ">
          <div className="flex flex-col items-start md:flex-row gap-12 md:gap-20 lg:gap-20">
            {/* Left Container */}
            <div className="text-white  md:w-[65%]">
              <h1 className="text-white font-medium text-xl  uppercase">
              Quality Help at Low Cost
              </h1>
              <h1 className="text-white text-2xl md:text-4xl font-bold">
              Relax, We&apos;ll Take Care of Your Assignments



              </h1>
              {/* <Image src="/featureline.png"  alt="Feature Line" width={120} height={20} /> */}
              {/* <img src={featureline} alt="Feature line" className="mt-2" /> */}

              <p className="whitespace-pre-wrap py-4 text-sm  font-medium">
              Get expert help from qualified professionals in just 3 minutes! Join over 100,000 satisfied students who&apos;ve already found success with The Academians®.
              </p>

              <div className="flex flex-col md:flex-row gap-4 py-8 w-full md:w-auto md:hidden -mb-6 -mt-6">
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello The Academians, I want to avail my secure promo code TAC-OFF50"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-secondary w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
                    <FaGift className="text-2xl text-white" />
                    <h1 className="text-white font-bold text-sm md:text-base uppercase">
                      AVAIL PROMO CODE
                    </h1>
                  </div>
                </a>
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello The Academians, I want to inquire about your services please!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-green w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
                    <IoLogoWhatsapp className="text-2xl text-white" />
                    <h1 className="text-white font-bold text-sm md:text-base uppercase">
                      ORDER VIA WHATSAPP
                    </h1>
                  </div>
                </a>
              </div>

              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    Guaranteed Results
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    Native British Experts
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    Money Back Guarantee
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    Low Pricing
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    Top Quality Work
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <IoMdStar size={20} className="text-green" />
                  <h1 className="text-sm  font-medium">
                    On Time Delivery
                  </h1>
                </div>
              </div>

              <div className="md:flex flex-col md:flex-row gap-4 py-4 w-full md:w-auto hidden">
                <TalkBtn />
                <a
                  href={`https://wa.me/447397145697?text=${encodeURIComponent(
                    "Hello The Academians, I want to inquire about your services please!"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-green w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md">
                    <IoLogoWhatsapp className="text-2xl text-white" />
                    <h1 className="text-white font-bold text-sm md:text-base uppercase">
                    whatsApp now
                    </h1>
                  </div>
                </a>
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
