import React from "react";
import Image from "next/image";

const HighValue = () => {
  return (
    <div className="bg-primary w-full h-auto py-12">
      <div className="md:w-[70%] w-[90%] mx-auto md:relative">
        <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold md:pb-0 pb-4">
          Best Custom Packages
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
                <h1 className="font-semibold text-sm text-right">PhD Editors</h1>
                <p className="text-right text-sm">
                  Edit your manuscripts to the level of absolute perfection with
                  our manuscript writing help where your content is elevated
                  while keeping its context intact
                </p>
              </div>
              <Image src="/high1.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high2.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm ">Article Creation</h1>
                <p className="text-sm">
                  Get your article written right from scratch by our experts who
                  not only offer manuscript writing support but also write the
                  whole research project for you in a customized manner.
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
                <h1 className="font-semibold text-sm text-right">English Translation</h1>
                <p className="text-right text-sm">
                  Let a wider audience have access to your manuscript with our
                  manuscript writing services provided along with our{" "}
                  <a href="#" className="text-green">
                    Research Publishing House consulting
                  </a>{" "}
                  services for improved discoverability.
                </p>
              </div>
              <Image src="/high3.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[380px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high4.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm ">Graphical Abstract Formation</h1>
                <p className="text-sm">
                  Enhance your manuscript&apos;s visibility by getting the key
                  concepts designed in a graphical abstract form by our experts.
                  A clear and vivid representation overview of your article!
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
                  Professional Consultation
                </h1>
                <p className="text-right text-sm">
                  Improve your manuscript with our manuscript writing
                  consultancy where you are guided through each step ensuring
                  its improved chances for publication.
                </p>
              </div>
              <Image src="/high5.webp" alt="high Logo" width={80} height={80} />
            </div>
          </div>
          <div className="bg-white md:w-[400px] w-full h-auto rounded-[15px]">
            <div className="py-4 px-4 flex items-center gap-2">
              <Image src="/high6.webp" alt="high Logo" width={80} height={80} />
              <div>
                <h1 className="font-semibold text-sm">Academic Resources</h1>
                <p className="text-sm">
                  Access webinars, seminars, and unlimited articles with our
                  professional manuscript writing assistance for better
                  comprehension of the journal.
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
