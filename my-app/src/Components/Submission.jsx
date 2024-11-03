import React from "react";
import Image from "next/image";
import TwoBtn from "./TwoBtn";


const Submission = () => {
  return (
    <div className="bg-primary w-full py-12">
      <div className="md:w-[80%] w-[90%] mx-auto">
        <h1 className="text-center text-3xl md:text-3xl text-secondary font-semibold">
          Expertly Setting Milestones With Our Research House Submission
          Assistance
        </h1>

        <div className="flex flex-col md:flex-row justify-center gap-6 pt-8">
          <div className="grid grid-cols-2 gap-4 md:w-[40%]">
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-2xl text-blue">1M+</h3>
              <p>Articles Created</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">2M+</h3>
              <p>Manuscripts Created</p>
            </div>
            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">1.5M+</h3>
              <p>Journals Edited</p>
            </div>

            <div className="bg-white rounded-md px-6 py-10">
              <h3 className="font-bold text-3xl text-blue">2M+</h3>
              <p>Manuscripts Edited</p>
            </div>
          </div>

          <div className="bg-white rounded-md md:w-[40%] pt-4 relative">
            <h1 className="font-bold text-secondary px-4">Premium Language Solutions</h1>
            <p className="py-2 px-4">
              Our qualified translators with professional translation skills
              convert your manuscripts into the English language so that they
              can effectively reach a target audience.
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
                    <h1 className="font-semibold text-secondary text-xl">Research House Submission Consultancy For Instant Publication
                    </h1>
                    <p className="text-sm py-2">Hurry up! Now is your chance to get your research paper published and contribute meaningfully to your field of study with our expert Research House consultation assistance.

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

       <div  className="flex justify-center ">
       <TwoBtn/>
       </div>


      </div>
    </div>
  );
};

export default Submission;
