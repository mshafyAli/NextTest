import React from "react";
import Image from "next/image";
import TwoBtn from "../TwoBtn";

const Submission = () => {
  return (
    <div className="bg-primary w-full py-12">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <h1 className="text-center text-3xl md:px-20 px-0  md:text-3xl text-secondary font-semibold">
          Enlightening Students With Our Manuscript Writing Consultancy Across
          The Globe
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
          <div className="grid grid-cols-2 gap-4 md:w-[40%]">
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-2xl text-blue">2M+</h3>
              <p>Manuscripts Written</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">1.5M+</h3>
              <p>Articles Edited</p>
            </div>
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">2M+</h3>
              <p>Manuscripts Translated</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">2M+</h3>
              <p>Manuscripts Edited</p>
            </div>
          </div>

          <div className="bg-white rounded-md md:w-[40%] pt-4 relative">
            <h1 className="font-bold text-secondary px-4">
              Complete Plagiarism Removal
            </h1>
            <p className="py-2 px-4">
              Done with the manuscript; fight with plagiarism begins? Well! No
              worries as our manuscript editors will take the plagiarism
              percentage from your content to 0% without changing the context
              but only to reform it.
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
                Always On-time
              </h1>
              <p className="text-sm py-2">
                Quality Submission with timely submission! Whether you get our
                manuscript writing help or article editing assistance; we ensure
                to provide you with your project on the decided time. So; get
                our assistance right away!
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
