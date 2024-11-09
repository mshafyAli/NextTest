import React from "react";
import Image from "next/image";

const Package = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-10">
      <div>
        <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold mt-2">
          Taking You Through The Process Of Our Article Writing Service
          Provision
        </h1>
        <p className="text-center py-2">
          Wanna know how we work through the process of delivering{" "}
          <a href="#" className="text-green">
            Research house Publication
          </a>
          ? Let&apos;s find out!
        </p>

        {/* container */}
        <div>
          {/* 1st */}
          <div className="flex items-center flex-col md:flex-row justify-center md:gap-10 gap-4 mt-6">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-7 uppercase">
                Reviewing Your Requirements
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">01</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Technical Team Discussion
                  </h1>
                  <p>
                    Soon after you are done with the registration process, our
                    team goes through your requirements and then the designated
                    writer communicates with you directly through email for
                    further clarifications.
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
                Integrating Requirements With Essentials
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Journal Article Preparation
                  </h1>
                  <p>
                    Then begins our article preparation services where your
                    requirements are considered while meeting the essential
                    guidelines of specific journal article writing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col md:flex-row items-center justify-center md:gap-20 gap-4">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Integrating Requirements With Essentials
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Journal Article Preparation
                  </h1>
                  <p>
                    Then begins our article preparation services where your
                    requirements are considered while meeting the essential
                    guidelines of specific journal article writing.
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
                On-to The Submission Process
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">03</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Ready For Publication
                  </h1>
                  <p>
                    After the effective delivery of research writing services,
                    the project is prepared for the submission process. Complete
                    support is provided till the publication of the article.
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
