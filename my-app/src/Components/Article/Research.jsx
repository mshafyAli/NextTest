import React from "react";
import Image from "next/image";

const Research = () => {
  return (
    <div className="md:w-[80%] w-[90%] mx-auto mb-12">
      <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
      Supporting Researchers Worldwide With Our Article Writing Services
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center pt-10 ">
        <div className="py-6  flex flex-col items-center md:border-r border-gray-200 md:w-1/3">
            <h3 className="text-secondary font-semibold text-sm pb-4">40+ Journals & Publishers</h3>
          <Image
            src="/partners1.webp"
            alt={`Partners`}
            width={250}
            height={150}
            className=""
          />
        </div>
        <div className="py-6  flex flex-col items-center md:border-r border-gray-200 md:w-1/3">
            <h3 className="text-secondary font-semibold text-sm  pb-4">500+ Universities
            </h3>
          <Image
            src="/partners2.webp"
            alt={`Partners`}
            width={270}
            height={150}
            className=""
          />
        </div>
        <div className="py-6  flex flex-col items-center md:w-1/3">
            <h3 className="text-secondary font-semibold text-sm pb-4">1,100+ Societies</h3>
          <Image
            src="/partners3.webp"
            alt={`Partners`}
            width={220}
            height={150}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Research;
