import Image from "next/image";
import TwoBtn from "../TwoBtn";
const About = () => {
  return (
    <div className="w-[80%]   mx-auto">
      {/* container */}
      <div className="flex justify-center items-center gap-4">
        <div className="md:w-[50%] w-full">
          <div className="mt-12">
            <h1 className="md:text-4xl text-2xl text-secondary text-center md:text-start font-bold">
              Publish Your E-Book Today With Exceptional Support
            </h1>
          </div>
          <p className="text-[#8F8F8F] mt-6">
            Are you concerned about your ebook? Don&apos;t worry! We are here to
            fend off all your woes with our trustable support. Just put your
            faith in us to deliver exactly what you need. We understand the
            value of time and ensure you get your work delivered within the
            agreed-upon timeframe. We offer you the convenience to revise your
            work unlimited times until you are satisfied with it. We will
            happily make whatever changes you require. Receive comprehensive
            support from expert writers, editors, and proofreaders to transform
            your book into a masterpiece that gets approved in a snap!
          </p>
          <div className="mt-4">
            <TwoBtn />
          </div>
        </div>

        {/* right side    */}
        <div className=" hidden md:block">
          <Image
            src="/our-education.webp"
            alt="education"
            width={450}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
