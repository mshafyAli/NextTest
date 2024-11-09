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
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center">
        Our Distinguishing Features
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
              Submission Assistance
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              We offer comprehensive support from manuscript writing help to
              submission. A strong letter describing the significance along with
              a summary of the manuscript&apos;s key points is also presented.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FiPhoneCall size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              High-quality Visuals
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              Figures, tables, or charts! Every visual element of top quality is
              meaningfully added to the manuscript through our{" "}
              <a href="#" className="text-green">
                Research Publishing House consulting
              </a>{" "}
              assistance for a better impression.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FaSearchDollar size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Adherence To Journal Formatting
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              From structure to citation style to formatting; everything is done
              just according to the journal&apos;s guidelines through our
              manuscript writing help.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FaFileAlt size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Guaranteed Excellence
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Doubtful about the reliability of the platform? Get our manuscript
              preparation services without hesitation as you can ask for a
              complete refund if not satisfied with our services
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FaLock size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Extremely Affordable
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Staying fair and honest with our researchers! We have set
              extremely reasonable charges for our manuscript editing and
              writing services with clear price transparency.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              <FaChartLine size={25} className="text-blue " />
            </div>
            <h2 className="text-secondary font-semibold pt-2 text-center md:text-start">
              Strategic Publication
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              High impact factors, relevant literature citation, and respectful
              responses are provided to the given feedback through our custom
              manuscript writing solutions for improved publication chances.
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
