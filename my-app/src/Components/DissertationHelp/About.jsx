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
            Welcome To The Most Reliable & Affordable Dissertation Help By Top
            Notch Dissertation Writer from The Academians
            {/* Expert <span className="">Assignment Assistance </span>Tailored Support for Your Academic Success */}
          </h1>
          <p className="py-4 px-2 font-medium text-sm ">
            The Academians is passionate about providing online Dissertation
            writing services at affordable pricing to students in UK. In
            collaboration with our outstanding academic expert in United
            Kingdom, we have so far supported several college students in
            achieving high marks in courses that they find challenging to
            comprehend. Putting all of one’s energy, time, and resources into
            something is extremely tough. We have helped a number of college
            students so far, using our top-notch academic specialists in UK, to
            achieve good results in courses that they have found tough to
            comprehend.
          </p>

          <div className="flex flex-col md:flex-row gap-4 py-2 w-full md:w-auto">
            <TalkBtn />
            <WhatsAppButton promoText="Hello The Academians, I want to inquire about your services please!" />
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
