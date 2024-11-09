import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
    <div className="bg-grey w-full py-20 h-auto">
      <div className="w-[75%] mx-auto">
        <h1 className="uppercase md:text-4xl text-2xl text-secondary text-center  font-bold">
          eBook Publishing Your Pathway to Growth
        </h1>

        <div className="grid grid-cols-5 gap-6 mt-8">
          <div className="bg-white flex items-center justify-center shadow-sm  rounded-lg py-2 px-4">
            <Image src="/elogo1.webp" alt="package" width={140} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-2 px-4">
            <Image src="/elogo2.webp" alt="package" width={140} height={100} />
          </div>
          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-2 px-4">
            <Image src="/elogo3.webp" alt="package" width={140} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-2 px-4">
            <Image src="/elogo4.webp" alt="package" width={140} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-2 px-4">
            <Image src="/elogo5.webp" alt="package" width={140} height={100} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="bg-white flex items-center justify-center shadow-sm  rounded-lg py-6 px-4">
            <Image src="/elogo6.webp" alt="package" width={180} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-6 px-4">
            <Image src="/elogo7.webp" alt="package" width={180} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-6 px-4">
            <Image src="/elogo8.webp" alt="package" width={180} height={100} />
          </div>
         
          

         
        </div>

        <div className="grid grid-cols-3 gap-6 mt-4">
          <div className="bg-white flex items-center justify-center shadow-sm  rounded-lg py-8 px-4">
            <Image src="/elogo9.webp" alt="package" width={180} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-8 px-4">
            <Image src="/elogo10.webp" alt="package" width={180} height={100} />
          </div>

          <div className="bg-white flex items-center justify-center shadow-sm rounded-lg py-8 px-4">
            <Image src="/elogo11.webp" alt="package" width={180} height={100} />
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Logos;
