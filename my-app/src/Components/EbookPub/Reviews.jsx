import React from "react";
import { FaStar } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";

const Reviews = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="flex items-center gap-2">
        <div className="bg-white w-[420px] md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Samuel Gibbs</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            I never knew I could enhance my engineering manuscript to such a
            level of perfection but RPH made it possible. Their meticulous
            editing and proofreading transformed my draft into a polished and
            publication-ready article.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
        <div className="bg-white w-[420px] md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Samuel Gibbs</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            I never knew I could enhance my engineering manuscript to such a
            level of perfection but RPH made it possible. Their meticulous
            editing and proofreading transformed my draft into a polished and
            publication-ready article.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
        <div className="bg-white w-[420px] md:h-[230px] h-auto rounded-md shadow-md py-6 px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold">Samuel Gibbs</h1>
            <div className="flex">
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
              <FaStar color="#FECD35" />
            </div>
          </div>
          <p className="pt-6 text-sm">
            I never knew I could enhance my engineering manuscript to such a
            level of perfection but RPH made it possible. Their meticulous
            editing and proofreading transformed my draft into a polished and
            publication-ready article.
          </p>
          <div className="flex justify-between pt-6">
            <h1 className="text-sm">Reviewed On</h1>
            <div className="flex items-center">
              <SiTrustpilot className="text-[#00B67A]" size={20} />
              <h1>Trustpilot</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
