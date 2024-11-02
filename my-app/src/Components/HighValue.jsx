import React from "react";
import Image from "next/image";

const HighValue = () => {
  return (
    <div className="bg-primary w-full h-auto py-12">
      <div className="w-[70%] mx-auto relative">
        <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
          High Value Packages
        </h1>
        <div className="flex justify-center pt-24 pb-10">
          <Image
            src="/highBanner.webp"
            alt="high Logo"
            width={450}
            height={100}
          />
        </div>

        {/* 1st section */}
        <div className="flex gap-60 absolute top-[12%] right-[1rem]">
          <div className="bg-white w-[400px] h-auto rounded-[15px]">
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
          <div className="bg-white w-[400px] h-auto rounded-[15px]">
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
        <div className="flex gap-60 absolute top-[40%] right-[4rem]">
          <div className="bg-white w-[360px] h-auto rounded-[15px]">
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
          <div className="bg-white w-[360px] h-auto rounded-[15px]">
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
        <div className="flex gap-60 absolute top-[70%] right-[1rem]">
          <div className="bg-white w-[400px] h-auto rounded-[15px]">
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
          <div className="bg-white w-[400px] h-auto rounded-[15px]">
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
