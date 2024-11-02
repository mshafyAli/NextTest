import React from "react";
import Image from "next/image"
const SubjectExpert = () => {
  return (
    <div className="w-[80%] mx-auto my-12">
      <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
        Subject-specific Expertise
      </h1>

      <div>
        <div className="w-[250px] h-[250px] bg-white shadow-xl relative ">
            
          <div className="bg-secondary absolute z-10 h-16 w-full "></div>

          <Image
            src="/sub-bg.webp"
            alt="high Logo"
            width={150}
            height={100}
            className="relative -top-[2%] right-0"
          />
        </div>
      </div>
    </div>
  );
};

export default SubjectExpert;
