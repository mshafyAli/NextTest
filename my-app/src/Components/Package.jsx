import React from "react";
import Image from "next/image";

const Package = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-10">
      <div>
        <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold mt-2">
          A Complete Package Of Research Publishing House Assistance
        </h1>
        <p className="text-center py-2">
          We take your research paper carefully through each stage, ensuring its
          publication in Scopus journal all along.
        </p>

        {/* container */}
        <div>
          {/* 1st */}
          <div className="flex items-center flex-col md:flex-row justify-center md:gap-10 gap-4 mt-6">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-7 uppercase">
                Well-aligned And Targeted
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">01</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Suitable Journal Selection
                  </h1>
                  <p>
                    Soon after your order placement; our experts identify your
                    research topic and find its best match in the Journal index
                    while considering all the journal metrics and target
                    audience.
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
                Professional Submission
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Peer-Review Approach
                  </h1>
                  <p>
                    After refining your research paper and manuscript, we also
                    provide you with Scopus journal paper submission assistance.
                    This includes the attachment of a cover letter that
                    highlights the importance of specific research.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col md:flex-row items-center justify-center md:gap-20 gap-4">
           
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Professional Submission
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Peer-Review Approach
                  </h1>
                  <p>
                    After refining your research paper and manuscript, we also
                    provide you with Scopus journal paper submission assistance.
                    This includes the attachment of a cover letter that
                    highlights the importance of specific research.
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
                Overview Before Publication
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">03</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Post-Acceptance Stage
                  </h1>
                  <p>
                    Once your project has been accepted, we proofread it for the
                    last time before the final publication while sharing the
                    research through our academic plus social networks for
                    enhanced visibility.
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
