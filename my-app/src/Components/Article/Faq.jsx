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
        "   What do your paper writing services include?",
      answer:
        "Our experts offer complete support when it comes to paper writing services while following the standard journal guidelines. It covers all sections like literature review, methodology, data analysis, and manuscript writing with utmost efficiency.",
    },
    {
      question:
        "How do you ensure the quality of top indexed journal article writing?",
      answer:
        "The strict adherence to the journal standards and the adoption of quality checks by our experienced editors ensure the high-quality article creation. The thorough peer review of the content written by our expert further enhances the project.",
    },
    {
      question:
        "What is the process for research article writing with your service?",
      answer:
        "Our process of research article writing begins with an initial consultation followed by the drafting of the manuscript, incorporating the researcher’s feedback, and then finalizing the research paper accordingly. Hence; making it all ready for publication.",
    },
    {
      question:
        "Who are the expert article writers on your team?",
      answer:
        "Each of our writers holds academic expertise in their respective area of study and has been producing exceptional articles to be published in high authority journals for years now.",
    },
    {
      question:
        "How can I get article writing help from your service?",
      answer:
        "You can contact us directly through our website, where you will just have to fill in the basic details and give your requirements. Our customer support team will be with you throughout to further ease the process of registration for you.",
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
        Cost-effective Article Writing Help For All
      </h1>

      <div className="flex flex-col md:flex-row md:items-start items-center gap-2 justify-center pt-6">
        <div className="bg-white md:w-[25%] w-full py-6 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
          <div className="flex flex-col justify-center items-center px-6">
            <Image src="/Expert.webp" alt="Expert" width={80} height={80} />
            <h1 className="text-base font-semibold text-secondary py-2">
              Affordable
            </h1>
            <p className="text-center text-sm">
              Get your very own customized article ready for publication at
              competitive prices.
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
                  Multiple Payment Options
                </h1>
                <p className="text-sm text-gray-700">
                  Pay for our Scopus journal article writing service charges
                  through any means of payment.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
            <div className="flex items-start justify-start gap-2 px-4">
              <FaFileInvoiceDollar size={60} className="text-blue" />
              <div>
                <h1 className="text-sm font-semibold text-secondary">
                  Safe Transaction
                </h1>
                <p className="text-sm text-gray-700">
                Our strict confidentiality policies ensure safe payment transactions so make the payment without worrying about confidentiality breaches.


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
