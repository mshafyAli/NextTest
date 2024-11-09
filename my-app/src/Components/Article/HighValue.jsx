import React from "react";
import Image from "next/image";

const HighValue = () => {
  return (
    <div className="bg-primary w-full h-auto py-12">
      <div className="md:w-[70%] w-[90%] mx-auto md:relative">
        <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold md:pb-0 pb-4">
          Valuable Packages
        </h1>
        <div className="md:flex justify-center hidden pt-24 pb-10">
          <Image
            src="/highBanner.webp"
            alt="high Logo"
            width={450}
            height={100}
          />
        </div>

        {/* 1st section */}
        <div className="flex flex-col md:flex-row md:gap-60 gap-4 md:absolute md:top-[12%] md:right-[1rem]">
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <div>
                <h1 className="font-semibold text-sm text-right">
                  Graphic Abstract Formation
                </h1>
                <p className="text-right text-sm">
                  Design the abstract of your research paper&apos;s key concepts
                  along with our research article writing services to enhance
                  the visibility of your paper.
                </p>
              </div>
              <Image src="/high1.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high2.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm ">Referral Program</h1>
                <p className="text-sm">
                  Refer our publication article writing website to another
                  individual; be it your colleague or friend and get amazing
                  discounts with your research publication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-col md:flex-row md:gap-60 gap-4 md:absolute md:top-[40%] md:right-[4rem] pt-4 md:pt-0">
          <div className="bg-white md:w-[380px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <div>
                <h1 className="font-semibold text-sm text-right">
                  Academic Resources
                </h1>
                <p className="text-right text-sm">
                  Attend workshops and seminars along with access to our
                  exceptionally written articles as a part of our{" "}
                  <a href="#" className="text-green">
                    Research Publishing House consulting
                  </a>{" "}
                  consulting deal.
                </p>
              </div>
              <Image src="/high3.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[380px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high4.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm ">Rapid Submission</h1>
                <p className="text-sm">
                  Submit your research paper rapidly for a faster peer review
                  process and better impact of the article, especially if it is
                  time-sensitive; ensuring high chances of acceptance.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3rd Section */}
        <div className="flex flex-col md:flex-row md:gap-60 gap-4 md:absolute md:top-[70%] md:right-[1rem] pt-4 md:pt-0">
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <div>
                <h1 className="font-semibold text-sm text-right">
                  Translation Help
                </h1>
                <p className="text-right text-sm">
                  Translate your manuscript in the English language with our
                  <a href="#" className="text-green">
                    Research Publishing House consulting
                  </a>{" "}
                  assistance from qualified language translators so that it can
                  reach a wider audience.
                </p>
              </div>
              <Image src="/high5.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high6.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm">
                  Indexed-publication Ready
                </h1>
                <p className="text-sm">
                  Get your article indexed-publication ready with our high
                  quality and ethically compliant work to enhance the visibility
                  and improve the discoverability of your article.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighValue;
