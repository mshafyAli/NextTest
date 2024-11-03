import React from "react";
import Image from "next/image";

const HighValue = () => {
  return (
    <div className="bg-primary w-full h-auto py-12">
      <div className="md:w-[70%] w-[90%] mx-auto md:relative">
        <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold md:pb-0 pb-4">
          High Value Packages
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
                <h1 className="font-bold text-right">Experienced Editors</h1>
                <p className="text-right text-sm">
                  Pick an editor of your choice from our list of PhD expert
                  editors who&apos;s gonna provide you with Scopus research
                  publication assistance services.
                </p>
              </div>
              <Image src="/high1.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high2.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-bold ">Unlimited Revisions</h1>
                <p className="text-sm">
                  There’s an unlimited revision policy with our{" "}
                  <a href="#" className="text-green">
                    Research Publishing House services
                  </a>{" "}
                  through which your content is revised by our experts till its
                  publication.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-col md:flex-row md:gap-60 gap-4 md:absolute md:top-[40%] md:right-[4rem] pt-4 md:pt-0">
          <div className="bg-white md:w-[360px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <div>
                <h1 className="font-bold text-right">Academic Resources</h1>
                <p className="text-right text-sm">
                  Attend seminars and gain access to our published articles to
                  refine the quality of your research works even more.
                </p>
              </div>
              <Image src="/high3.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[360px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high4.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-bold ">Referral Program</h1>
                <p className="text-sm">
                  Refer our website to your friends/colleagues to get assistance
                  with Scopus journal publication from us and grab amazing
                  deals.
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
                <h1 className="font-bold text-right">Poster Formation</h1>
                <p className="text-right text-sm">
                  Give your research paper the much-needed boost by getting the
                  poster designed with the Scopus publication guidance of our
                  graphic designers
                </p>
              </div>
              <Image src="/high5.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high6.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-bold ">Speedy Publication</h1>
                <p className="text-sm">
                  Get fast Research Publishing House guidance for speedy
                  publication especially, if your research paper is
                  time-sensitive.
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

