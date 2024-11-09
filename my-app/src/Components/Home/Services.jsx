import React from "react";
import {  FaLock, FaChartLine } from "react-icons/fa";
import { IoDocuments } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { GoShieldCheck } from "react-icons/go";
import { GiBeveledStar } from "react-icons/gi";
import { LuBadgeDollarSign } from "react-icons/lu";


import TwoBtn from "../TwoBtn";

const Services = () => {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center">
        Why We Are The Best!
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row  items-center py-4">
        {/* 1st */}

        <div className="md:w-1/3 w-full  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <GiBeveledStar size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Expert Submission Support
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              We offer affordable Research publication assistance because all
              students deserve an equal chance to get their research work
              published, irrespective of financial differences.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <GoShieldCheck size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Guaranteed Excellence
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              We hold a high satisfaction rate, but; if you are not satisfied
              with our services in any manner then you can ask for a refund.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FiPhoneCall size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Readily Available
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              What makes the provision of the best Research Publishing House
              services possible is our experts 24/7 support. Get in touch with
              us whenever you need.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <IoDocuments size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Complete Plagiarism Removal
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              We make your research papers Research Publishing House article
              publication ready by removing even the slightest signs of
              plagiarism through our premium quality plagiarism-detection tools.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <LuBadgeDollarSign size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Excellent Consultation
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Our{" "}
              <a href="#" className="text-green">
                Research Publishing House consulting
              </a>{" "}
               services help students refine their journals and
              manuscripts to the level of perfection; all set for publication.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              {" "}
              <FaChartLine size={25} className="text-blue " />
            </div>
            <h2 className="text-secondary font-semibold pt-2 text-center md:text-start">
            Low Rates
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
            Making it easier than ever for students to acquire our Research Publishing House submission services by setting our charges extremely affordable.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <TwoBtn />
      </div>
    </div>
  );
};

export default Services;

function Divider() {
  return (
    <div className="hidden md:block h-24 border-r border-secondary mx-4" />
  );
}
