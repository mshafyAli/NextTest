import React from "react";
import Image from "next/image";

const Package = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-10">
      <div>
        <h1 className="md:text-4xl text-center text-2xl md:px-10 px-0  text-secondary font-bold mt-2">
          Get Research Publishing House Indexed Journals Submission Help For
          Expertise In Each Step
        </h1>
        <p className="text-center py-2">
          From providing Scopus publication process guidance to actually helping
          in each step; we offer expert assistance in every manner.
        </p>

        {/* container */}
        <div>
          {/* 1st */}
          <div className="flex items-center flex-col md:flex-row justify-center md:gap-10 gap-4 mt-6">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-7 uppercase">
                Assessment, Allocation & Achievement
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">01</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Understanding The Status
                  </h1>
                  <p className="">
                    We grasp the status of the paper and divide it
                    strategically. Our team of experts works on the sections of
                    their expertise to bring your project to life.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image src="/one.webp" alt="package" width={500} height={100} />
            </div>
          </div>

          {/* 2nd */}
          <div className="md:flex hidden flex-col md:flex-row items-center justify-center gap-20">
            <div>
              <Image src="/two.webp" alt="package" width={300} height={100} />
            </div>
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Pre-submission Review
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Reviewing The Paper
                  </h1>
                  <p>
                    Our professionals review the whole journal and modify it
                    ensuring that it meets the standard guidelines to get
                    published in RPH.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col md:flex-row items-center justify-center md:gap-20 gap-4">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Pre-submission Review
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Reviewing The Paper
                  </h1>
                  <p>
                    Our professionals review the whole journal and modify it
                    ensuring that it meets the standard guidelines to get
                    published in RPH.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image src="/two.webp" alt="package" width={300} height={100} />
            </div>
          </div>

          {/* 3rd */}
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-4 mt-10">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                From Submission To Publication
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">03</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Confirming Its Publication
                  </h1>
                  <p>
                    When you get our <a href="#" className="text-green">Research Publishing House</a> publication assistance, we
                    submit your research paper after quality refinement and keep
                    revising it as per the feedback until final acceptance.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image src="/three.webp" alt="package" width={350} height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
