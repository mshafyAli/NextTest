// import mobileSection from "../../assets/mobileSection.webp";
import Image from "next/image";


const EasyToStart = () => {
  return (
    <div className="w-full max-w-6xl h-auto mx-auto mt-20 px-4">
    
    <h1 className="text-[#5A5A5A] text-3xl md:text-6xl text-center font-bold pb-10 py-2 uppercase">
        EASY TO START
      </h1>
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center gap-10  justify-center">
        {/* Left Side */}
        <div className="hidden md:block md:w-1/2">
          {/* <img
            src={mobileSection}
            alt="Mobile Section"
            className="w-full h-auto"
          /> */}

          <Image src="/mobileSection.webp" alt="Mobile Section" width={500} height={500}
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div>
            <h1 className="text-3xl font-bold ">
              The best answer for “Can someone do my assignment”
            </h1>
            <p className="text-base text-[#8F8F8F] mt-4 mb-8">
              “Can someone do my assignment” or “do my assignment for me” or “I
              need assignment writing help”. Our assignment experts and
              assignment helpers are there to relieve the pressure on students
              with accurate and high quality assignment assistance services.
              Academians UK offers quality, professionalism and timely effective
              services across various subjects. Our expert team works day in and
              day out to deliver desirable satisfaction to our clients (spanning
              over more than five continents). Our team of experts excel at
              different levels of qualifications including undergraduate,
              Masters as well as PhD level. Your required assignments are
              handled by experts depending on the level of education,
              instructions and guidelines you provide. We work on delivering
              quality as per the instructions and details you provide us with
              and are ready to go that extra mile to deliver custom created
              original work. Our accomplished and skilled experts
            </p>
        

          </div>
        </div>
      </div>
    </div>
  );
};

export default EasyToStart;
