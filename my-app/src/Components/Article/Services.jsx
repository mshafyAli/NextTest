import React from "react";
import {
  FaShieldAlt,
  FaPhone,
  FaSearchDollar,
  FaFileAlt,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";

import TwoButtons from "../TwoButtons";
import TwoBtn from "../TwoBtn";

const Services = () => {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center md:pb-6 pb-2">
        Our Shining Points
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row  items-center py-2">
        {/* 1st */}

        <div className="md:w-1/3 w-full  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FaShieldAlt size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Custom Writing
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              Our article writing service is kept original by customizing it
              according to your requirements and identifying the research gaps
              with a unique approach.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FaSearchDollar size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Expert Editing
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              Our team of professional editors works in collaboration with
              expert article writers to elevate the quality of the paper based
              on peer review feedback.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FiPhoneCall size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              PhD Consultation
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Besides the provision of the best article writing service, we also
              offer consultation help to researchers through which they can form
              their articles on their own but with the assistance of our PhD
              experts.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FaFileAlt size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Plagiarism-Free
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Whether you require paper writing service or editing help,
              complete removal of plagiarism from your content is guaranteed
              with the provision of an attached plagiarism-free report.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FaLock size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Manuscript Formation
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              The{" "}
              <a href="#" className="text-green">
                Research House Publication
              </a>{" "}
              manuscript writing services that we offer beautifully capture the
              essence of the whole research paper while being compliant with the
              best journal rules of writing.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FaChartLine size={25} className="text-blue " />
            </div>
            <h2 className="text-secondary font-semibold pt-2 text-center md:text-start">
              100% Secured
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Our high-end encryption, strict access control, and highly secured
              services ensure the complete protection of your research paper and
              data from any form of privacy breach.
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
