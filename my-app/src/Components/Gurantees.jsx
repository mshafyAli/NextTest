import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";


const Gurantees = () => {
  
  return (
    <div className="w-[70%] mx-auto mt-14">
      <h1 className="text-[#5A5A5A] text-3xl md:text-6xl text-center font-bold pb-10 py-2">
        MEET OUR EXPERTS
      </h1>
      <div className="bg-primary w-full h-auto relative">
        <div className="px-12 py-20 w-[50%]">
          <h1 className="font-bold text-3xl text-white">
            1. Exceptional Quality Work
          </h1>
          <p className="text-white text-sm pt-2">
            No matter how complicated the task, the quality of the assignment we
            deliver is always our top priority!
          </p>
          <h1 className="font-bold text-3xl text-white mt-6">
            2. Personal Data Protection
          </h1>
          <p className="text-white text-sm pt-2">
            We ensure that you will remain anonymous at all times and that no
            one will ever know you used our services!
          </p>
        </div>

        <div className="bg-[white] border absolute -right-4 -top-4 border-gray-300 w-[320px] h-[480px] shadow-lg rounded-md">
            <div className="px-6 py-8">
          
                <h3 className="text-lg font-semibold  pb-2 mb-4">Free Extras</h3>
                
                <div className="flex items-center justify-between border-b">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Plagiarism check</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>
                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Title page</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>
                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Bibliography/References page</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>
                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Plagiarism check</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>

                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Formatting</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>

                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]"> Simple outline (on request)</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>

                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Revision (within 48 hours)</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>
                <div className="flex items-center justify-between border-b pt-2">
                    <div className="flex gap-1 items-center">
                    < FaCheckCircle className="h-3 w-3 text-green-500" />
                    <h6 className="text-[#333333] text-[12px]">Delivery to e-mail</h6>
                    </div>
                    <h6 className="uppercase text-[#333333] text-sm font-semibold">free</h6>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-6 shadow-md">
                PLACE ORDER
            </button> 


           
            <div className="flex items-center justify-center gap-4 mt-6 text-sm text-gray-600">
                <Image src="/secure.webp" alt="securePic" width={150} height={150}/>
                <Image src="/support2.webp" alt="suportPic" width={150} height={150}/>
               
            </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Gurantees;