import React from "react";
import Image from "next/image";
import Modal from "./Modal";

const OurRecognition = () => {
  return (
    <div className="w-[85%] mx-auto my-12">
      <div className="flex items-center justify-center gap-12">
        <div>
          <Modal />
        </div>

        <div>
          <h1 className=" text-2xl text-secondary text-center font-bold py-6">Our Recognition & Awards</h1>
          <div className="grid grid-cols-3">
            <div className=" py-4 border-r border-b px-6 border-green border-opacity-30 ">
              <Image
                src="/best-seller-1.webp"
                alt="package"
                width={90}
                height={90}
              />
            </div>
            <div className=" py-4 border-r border-b px-6 border-green border-opacity-30 ">
              <Image
                src="/amazon-best-seeling-1.webp"
                alt="package"
                width={90}
                height={90}
              />
            </div>
            <div className=" py-4  border-b px-6 border-green border-opacity-30  ">
              <Image
                src="/1st-place.webp"
                alt="package"
                width={90}
                height={90}
              />
            </div>
            <div className=" py-4  px-6 border-r border-b border-green border-opacity-30">
              <Image src="/IP.webp" alt="package" width={90} height={90} />
            </div>
            <div className=" py-4  px-6 border-r border-b border-green border-opacity-30">
              <Image src="/INDIE.webp" alt="package" width={90} height={90} />
            </div>
            <div className=" py-4  px-6  border-b border-green border-opacity-30">
              <Image src="/moon.webp" alt="package" width={90} height={90} />
            </div>
            <div className=" py-4  px-6 border-r border-green border-opacity-30">
              <Image src="/illum.webp" alt="package" width={90} height={90} />
            </div>
            <div className=" py-4  px-6 border-r border-green border-opacity-30">
              <Image src="/global.webp" alt="package" width={90} height={90} />
            </div>
            <div className=" py-4  px-6 ">
              <Image src="/gold.webp" alt="package" width={90} height={90} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurRecognition;
