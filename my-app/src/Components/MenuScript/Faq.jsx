"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";

const Faq = () => {
  // Sample data for FAQ items
  const faqs = [
    {
      question:
        "What specific services are offered under your manuscript writing services?",
      answer:
        "Complete manuscript writing services are offered to students including the customized research topic selection to rigours methodology formation to accurate formatting. The editing, submission, and post-publication services are also offered.",
    },
    {
      question:
        "How do your manuscript editing and writing services ensure high-quality output?",
      answer:
        "Our thorough peer-review process, strict adherence to specific journal guidelines, and collaboration with specialized experts in the field ensure the production of high-quality manuscripts",
    },
    {
      question:
        "What qualifications and experience do your manuscript writing experts have?",
      answer:
        "Our experts hold PhD or equivalent degrees in their respective areas of study. They are certified editors with extensive experience in publishing; making them a perfect fit as your manuscript writers.",
    },
    {
      question:
        "How do you tailor custom manuscript writing solutions to fit individual research requirements?",
      answer:
        "Our experts closely work with the researcher and understand his requirements and his research goals. Direct contact through email is maintained between the researcher and the designated manuscript writer for clear communication purposes.",
    },
    {
      question:
        "How can your manuscript writing consultancy improve my chances of publication in a high authority journal?",
      answer:
        "We offer carefully crafted, extensively researched, and accurately formatted manuscripts while following all the top journal guidelines plus keeping them optimized all the time. This helps in improving the chances of your manuscript’s publication in a high authority journal.",
    },
  ];

  // State to track which question is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close answer
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="md:w-[80%] w-[90%] mx-auto my-12">
      <h1 className="text-center text-2xl md:text-3xl text-secondary font-semibold">
        Easily Accessible Manuscript Writing Support
      </h1>

      <div className="flex flex-col md:flex-row md:items-start items-center gap-2 justify-center pt-6">
        <div className="bg-white md:w-[25%] w-full py-6 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
          <div className="flex flex-col justify-center items-center px-6">
            <Image src="/Expert.webp" alt="Expert" width={80} height={80} />
            <h1 className="text-base font-semibold text-secondary py-2">
              3-Step Registration Process
            </h1>
            <p className="text-center text-sm">
              Get our Scopus manuscript writing support by contacting our
              website, filling in the requirements, and making the payment.
            </p>

            <button className="flex items-center gap-2 py-2 text-blue text-sm">
              <h4>Meet Our Support Stars</h4>
              <IoArrowForwardCircleOutline size={15} />
            </button>
          </div>
        </div>

        {/* Second Column with Multiple Cards */}
        <div className="md:w-[25%] flex flex-col gap-4">
          <div className="bg-white py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
            <div className="flex items-start justify-start gap-2 px-4">
              <MdOutlinePayments size={60} className="text-blue" />
              <div>
                <h1 className="text-sm font-semibold text-secondary">
                  Complete Price Transparency
                </h1>
                <p className="text-sm text-gray-700">
                  No hidden charges! A fair and transparent pricing structure is
                  provided according to the given requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
            <div className="flex items-start justify-start gap-2 px-4">
              <FaFileInvoiceDollar size={60} className="text-blue" />
              <div>
                <h1 className="text-sm font-semibold text-secondary">
                  Multiple Payment Methods
                </h1>
                <p className="text-sm text-gray-700">
                  Pay through any given mode of transaction for our Scopus
                  manuscript writing services as per your ease.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[40%] p-6 bg-white rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
          <h2 className="text-xl md:text-2xl font-bold text-secondary mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-sm font-semibold text-secondary">
                  {faq.question}
                </h3>
                <span className="text-blue font-semibold text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-blue text-sm mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
