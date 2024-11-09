import React from "react";
import Image from "next/image";
import TwoBtn from "../TwoBtn";

const Submission = () => {
  return (
    <div className="bg-primary w-full py-12">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <h1 className="text-center text-3xl md:px-[10rem] px-0  md:text-3xl text-secondary font-semibold">
          Setting Trademarks With Top Indexed Journal Article Writing Help
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
          <div className="grid grid-cols-2 gap-4 md:w-[40%]">
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-2xl text-blue">2M+</h3>
              <p>Manuscripts Created</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">1.5M+</h3>
              <p>Articles Written</p>
            </div>
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">1.5M+</h3>
              <p>Articles Edited</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">2M+</h3>
              <p>Graphical-abstracts Formed</p>
            </div>
          </div>

          <div className="bg-white rounded-md md:w-[40%] pt-4 relative">
            <h1 className="font-bold text-secondary px-4">Readily Available</h1>
            <p className="py-2 px-4">
              More accessible and approachable! Get article writing help at any
              time and from anywhere. Our experts are always ready to help you
              with your research project writing plus publication.
            </p>

            <Image
              src="/globe.webp"
              alt={`globe`}
              width={350}
              height={150}
              className="relative md:-right-16 w-[400px]"
            />
          </div>
        </div>

        <div className="bg-white md:w-[82%] rounded-md px-6 py-4 mx-auto my-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h1 className="font-semibold text-secondary ">
                Get Your Order Registered Right Away
              </h1>
              <p className="text-sm py-2">
                Get your article published now while it&apos;s still relevant to
                achieve a better impact. So; place your order now for writing
                plus publication writing help and watch the magic unfold.
              </p>
            </div>

            <Image
              src="/payment.svg"
              alt={`payment`}
              width={350}
              height={150}
              className=""
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <TwoBtn />
        </div>
      </div>
    </div>
  );
};

export default Submission;
