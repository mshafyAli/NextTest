import React from "react";
import Image from "next/image";

const Package = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-10">
      <div>
        <h1 className="md:text-4xl text-center text-2xl text-secondary font-bold mt-2">
          Bringing Your Article To Light With Our Custom Manuscript Writing Help
        </h1>
        <p className="text-center py-2">
          Don&apos;t let your research paper rot in your computer folder rather
          get it published and among the best scholarly works with our
          assistance.
        </p>

        {/* container */}
        <div>
          {/* 1st */}
          <div className="flex items-center flex-col md:flex-row justify-center md:gap-10 gap-4 mt-6">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-7 uppercase">
                Understanding The Guidelines
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">01</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Analysis And Planning
                  </h1>
                  <p>
                    The research topic, objectives, and the given instructions
                    of the researcher are thoroughly analyzed by our experts.
                    Solutions are devised and a detailed plan is created
                    afterwards
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
                Aligning With Journal&apos;s Standards
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Drafting And Development
                  </h1>
                  <p>
                    A proper draft is created through our research manuscript
                    writing services where essential sections are formed. The
                    manuscript is developed in a way that perfectly meets the
                    journal&apos;s guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:hidden flex-col md:flex-row items-center justify-center md:gap-20 gap-4">
            <div className="md:w-[45%] w-full">
              <h1 className="text-green text-xl font-bold pl-8 uppercase">
                Aligning With Journal&apos;s Standards
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">02</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Drafting And Development
                  </h1>
                  <p>
                    A proper draft is created through our research manuscript
                    writing services where essential sections are formed. The
                    manuscript is developed in a way that perfectly meets the
                    journal&apos;s guidelines.
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
                Reviewing The Manuscript
              </h1>
              <div className="flex gap-2">
                <h1 className="text-secondary font-bold text-xl">03</h1>
                <div>
                  <h1 className="text-secondary font-bold text-xl">
                    Editing And Finalization
                  </h1>
                  <p>
                    Technical editing and language polishing is done while
                    thoroughly reviewing the manuscript. Scopus publication
                    consulting is also provided to ensure that the researcher&apos;s
                    manuscript is published.
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
