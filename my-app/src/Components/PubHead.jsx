import React from "react";
import Image from "next/image";

const PubHead = () => {
  return (
    <div className="bg-grey md:w-[70%] w-[95%] rounded-2xl h-auto mb-12 mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-10 py-6 px-4">
        <div className="flex flex-col items-center md:w-1/4">
          <Image
            src="/pubHead.webp"
            alt="package"
            className="rounded-full"
            width={200}
            height={100}
          />
          <h1 className="text-2xl md:text-3xl text-green font-semibold pt-4 pb-2">
            Dr Fiona
          </h1>
          <h4 className="text-base text-secondary font-semibold ">
            Editor in Chief
          </h4>
          <Image
            src="/scholar_logo.png"
            alt="package"
            className="mt-2"
            width={140}
            height={100}
          />
        </div>

        <div className="md:w-[70%] w-full">
          <h1 className="text-2xl md:text-3xl md:text-start text-center text-secondary font-semibold ">
            Meet Our Publication Head!
          </h1>
          <h4 className="text-base md:text-start text-center text-secondary font-medium py-2">
            98% Successful Publications
          </h4>
          <p className="text-sm md:text-start text-wrap">
            Dr. Fiona Wilson, who holds a Ph.D. in Publishing Studies from
            University College London, is currently serving as a Publication
            Expert at Brooks School of Scholars Ltd. Prior to this role, she had
            the privilege of serving as an Editorial Coordinator at Left Coast
            Press. During her time in academia, she acquainted herself with
            valuable skills such as XML/SGML, InDesign, manuscript management,
            and digital rights management.
          </p>
          <p className="text-sm pt-4 md:text-start text-wrap">
            Now, she is dedicatedly helping research enthusiasts deliver
            high-quality publications, including crafting the right content and
            selecting top-notch journals as per their criteria.
          </p>

          <div className="pt-6 flex flex-col md:flex-row gap-4 items-center">
            <table className="border border-gray-300 text-center md:w-auto w-full ">
              <thead>
                <tr className="bg-grey">
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                    Cited By
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                    All
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-sm font-semibold">
                    Since 2019
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-200 ">
                  <td className="border border-gray-300 text-sm px-4 py-2">
                    Citations
                  </td>
                  <td className="border border-gray-300 text-sm px-4 py-2">8725</td>
                  <td className="border border-gray-300 text-sm px-4 py-2">4203</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 text-sm px-4 py-2">h-index</td>
                  <td className="border border-gray-300 text-sm px-4 py-2">45</td>
                  <td className="border border-gray-300 text-sm px-4 py-2">36</td>
                </tr>
                <tr className="bg-gray-200">
                  <td className="border border-gray-300 text-sm px-4 py-2">
                    i10-index
                  </td>
                  <td className="border border-gray-300 text-sm px-4 py-2">105</td>
                  <td className="border border-gray-300 text-sm px-4 py-2">80</td>
                </tr>
              </tbody>
            </table>

            <div className="bg-white py-2 px-2 w-full md:w-auto">


                <h2 className="text-sm">Cited by : Dr. Fiona Wilson</h2>

            <Image
            src="/chart.png"
            alt="package"
            className="md:w-[250px] h-auto w-full"
            width={250}
            height={100}
          />


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubHead;
