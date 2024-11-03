import React from "react";
import {
  FaShieldAlt,
  FaPhone,
  FaSearchDollar,
  FaFileAlt,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import TwoButtons from "./TwoButtons";
import TwoBtn from "./TwoBtn";

const Services = () => {
  return (
    <div className="md:w-[70%] w-[90%] mx-auto my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center">
        What Sets Us Apart?
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row  items-center py-2">
        {/* 1st */}

        <div className="md:w-1/3 w-full  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center"><FaShieldAlt size={25} className="text-blue" /></div>
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
            <div className="flex md:justify-start justify-center"><FaPhone size={25} className="text-blue" /></div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Manuscript Preparation
            </h2>
            <p className="text-sm text-center md:text-start pt-2">
              Engaging introduction, detailed methodology, and balanced
              discussions! Our assistance is not confined to the guidance rather
              we also help with the preparation of the manuscripts.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center"><FaSearchDollar size={25} className="text-blue" /></div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Assistance Till Publication
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              We offer the best Scopus publication assistance because we not
              only help with the preparation and submission of the research work
              but also stay with you till its publication.
            </p>
          </div>
          <div className="pt-8">
            
            <div className="flex md:justify-start justify-center"><FaFileAlt size={25} className="text-blue" /></div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Highly Secured
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Your research works and details are in safe hands with us as we
              adopt advanced data encryption techniques, anti-malware
              protection, and secure submission systems.
            </p>
          </div>
        </div>

        <div className="md:w-1/3 w-full pt-8 md:pt-0  md:px-6 md:py-6">
          <div>
            <div className="flex md:justify-start justify-center">
              <FaLock size={25} className="text-blue" />
            </div>
            <h2 className="text-secondary text-center md:text-start font-semibold pt-2">
              Expert Consultation
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Proofreading, statistical analysis support, copyright advice, and
              much more. Our{" "}
              <a href="#" className="text-green">
                Research Publishing House consulting
              </a>{" "}
              services provide comprehensive support.
            </p>
          </div>
          <div className="pt-8">
            <div className="flex md:justify-start justify-center">
              {" "}
              <FaChartLine size={25} className="text-blue " />
            </div>
            <h2 className="text-secondary font-semibold pt-2 text-center md:text-start">
              Well-Optimized Publication Approach
            </h2>
            <p className="text-sm pt-2 text-center md:text-start">
              Our experts choose the right submission model and promote
              researchers work even post-publication while analyzing its impact
              all along.
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
