// import React from "react";
// import { FaShieldAlt, FaPhone, FaSearchDollar, FaFileAlt, FaLock, FaChartLine } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaShieldAlt size={24} className="text-indigo-600" />,
//     title: "Expert Submission Support",
//     description:
//       "We offer affordable Scopus publication assistance because all students deserve an equal chance to get their research work published, irrespective of financial differences.",
//   },
//   {
//     icon: <FaPhone size={24} className="text-indigo-600" />,
//     title: "Assistance Till Publication",
//     description:
//       "We offer the best Scopus publication assistance because we not only help with the preparation and submission of the research work but also stay with you till its publication.",
//   },
//   {
//     icon: <FaSearchDollar size={24} className="text-indigo-600" />,
//     title: "Expert Consultation",
//     description:
//       "Proofreading, statistical analysis support, copyright advice, and much more. Our Scopus journal publication consulting services provide comprehensive support.",
//   },
//   {
//     icon: <FaFileAlt size={24} className="text-indigo-600" />,
//     title: "Manuscript Preparation",
//     description:
//       "Engaging introduction, detailed methodology, and balanced discussions! Our assistance is not confined to the guidance rather we also help with the preparation of the manuscripts.",
//   },
//   {
//     icon: <FaLock size={24} className="text-indigo-600" />,
//     title: "Highly Secured",
//     description:
//       "Your research works and details are in safe hands with us as we adopt advanced data encryption techniques, anti-malware protection, and secure submission systems.",
//   },
//   {
//     icon: <FaChartLine size={24} className="text-indigo-600" />,
//     title: "Well-Optimized Publication Approach",
//     description:
//       "Our experts choose the right submission model and promote researchers’ work even post-publication while analyzing its impact all along.",
//   },
// ];

// const Services = () => {
//   return (
//     <div className="container mx-auto py-10 px-4">
//       <h1 className="text-center text-3xl font-bold text-indigo-800 mb-8">Our Services</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {services.map((service, index) => (
//           <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
//             <div className="flex items-center mb-4">
//               {service.icon}
//               <h2 className="text-lg font-semibold text-indigo-800 ml-3">{service.title}</h2>
//             </div>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import {
  FaShieldAlt,
  FaPhone,
  FaSearchDollar,
  FaFileAlt,
  FaLock,
  FaChartLine,
} from "react-icons/fa";
import TwoButtons from "./TwoButtons";
import TwoBtn from "./TwoBtn";

const Services = () => {
  return (
    <div className="w-[70%] mx-auto my-10">
      <h1 className="text-2xl md:text-4xl font-bold text-secondary text-center">
        What Sets Us Apart?
      </h1>

      {/* container */}
      <div className="flex items-center py-2">
        {/* 1st */}

        <div className="w-1/3  px-6 py-6">
          <div>
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Expert Submission Support
            </h2>
            <p className="text-sm pt-2">
              We offer affordable Research publication assistance because all
              students deserve an equal chance to get their research work
              published, irrespective of financial differences.
            </p>
          </div>
          <div className="pt-8">
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Manuscript Preparation
            </h2>
            <p className="text-sm pt-2">
              Engaging introduction, detailed methodology, and balanced
              discussions! Our assistance is not confined to the guidance rather
              we also help with the preparation of the manuscripts.
            </p>
          </div>
        </div>

        <div className="w-1/3  px-6 py-6">
          <div>
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Assistance Till Publication
            </h2>
            <p className="text-sm pt-2">
              We offer the best Scopus publication assistance because we not
              only help with the preparation and submission of the research work
              but also stay with you till its publication.
            </p>
          </div>
          <div className="pt-8">
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Highly Secured
            </h2>
            <p className="text-sm pt-2">
              Your research works and details are in safe hands with us as we
              adopt advanced data encryption techniques, anti-malware
              protection, and secure submission systems.
            </p>
          </div>
        </div>

        <div className="w-1/3  px-6 py-6">
          <div>
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Expert Consultation
            </h2>
            <p className="text-sm pt-2">
              Proofreading, statistical analysis support, copyright advice, and
              much more. Our{" "}
              <a href="#" className="text-green">
                Research Publishing House consulting
              </a>{" "}
              services provide comprehensive support.
            </p>
          </div>
          <div className="pt-8">
            <FaShieldAlt size={25} className="text-blue" />
            <h2 className="text-secondary font-semibold pt-2">
              Well-Optimized Publication Approach
            </h2>
            <p className="text-sm pt-2">
              Our experts choose the right submission model and promote
              researchers  work even post-publication while analyzing its impact
              all along.
            </p>
          </div>
        </div>
      </div>


      <div className="flex justify-center">
      <TwoBtn />
      </div>
    </div>
  );
};

export default Services;

function Divider() {
  return (
    <div className="hidden md:block h-24 border-r border-secondary mx-4" />
  );
}
