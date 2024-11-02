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
        whatsApp now
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
            Expert Assignment Assistance Tailored Support for Your Academic
            Success
            {/* Expert <span className="">Assignment Assistance </span>Tailored Support for Your Academic Success */}
          </h1>
          <p className="py-4 px-2 font-medium text-sm ">
            Do you face difficulties with your assignment or dissertation and
            you require professional help? This is your academic guide; our
            professional team is ready to assist you in achieving your goals.
            Each client is provided with customized services, and that is why we
            offer you original content that complies with the academic level you
            specify. Regardless of the type of issues that you have – with
            research, with writing, or with editing – we are happy to help and
            support you. Chat now to know more on What Our Experts Can Do
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
