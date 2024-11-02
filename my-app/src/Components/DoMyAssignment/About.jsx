

import { IoLogoWhatsapp } from "react-icons/io";
import { TalkBtn } from "../TalkBtn";
import Image from "next/image";
import React, { forwardRef } from "react";

const WhatsAppButton = ({ promoText }) => (
  <a
    href={`https://wa.me/447397145697?text=${encodeURIComponent(promoText)}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="bg-green w-full md:w-[230px] h-10 flex gap-2 items-center justify-center rounded-md border ">
      <IoLogoWhatsapp className="text-2xl text-white" />
      <h1 className="text-white font-bold text-sm md:text-base uppercase">
        Whatsapp Now
      </h1>
    </div>
  </a>
);

const About = forwardRef((props, ref) => {
  return (
    <section
      className="md:w-[75%] w-full mx-auto mt-12 md:py-12 md:mb-10  px-4"
      ref={ref}
      id="about"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <article className="w-full md:w-[80%] ">
          <h1 className="text-xl md:text-2xl font-bold px-1 md:px-2 text-[#5A5A5A] md:leading-tight">
            Welcome to the most Reliable & Affordable Do My Assignment by Top
            Notch British PhD Assignment Experts
            {/* Expert <span className="">Assignment Assistance </span>Tailored Support for Your Academic Success */}
          </h1>
          <p className="py-4 px-2 font-medium text-sm ">
            “Can someone do my assignment” or “do my assignment for me”. Our
            assignment writer and assignment helper are there to relieve the
            pressure on students with accurate and high quality assignment
            assistance services. The Academians offers quality, professionalism
            and timely effective services across various subjects. Our
            assignment expert team works day in and day out to deliver desirable
            satisfaction of our clients (spanning over more than five
            continents). Our team of experts excel at different levels of
            qualifications including undergraduate, Masters as well as PhD
            level. Your required assignments are handled by experts depending on
            the level of education, instructions and guidelines you provide
          </p>

          <div className="flex flex-col md:flex-row gap-4 py-2 w-full md:w-auto">
            <TalkBtn />
            <WhatsAppButton promoText="Hello Team Academians, I want to avail my promo code TA-OFF50." />
          </div>
        </article>

        <div className="hidden md:block w-full">
          <Image
            src="/aboutPic.webp"
            alt="About Assistance"
            className="w-full h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
});

// Assign display name for debugging
About.displayName = "About";

export default About;
