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
        "How can your Research House Publication assistance help improve my chances of acceptance?",
      answer:
        "Our experts assist the researchers in elevating the standard of their research paper to that of Research House guidelines. Moreover; the editing and revising of the manuscript/article further improves the chances of the projects acceptance in Research House Publication.",
    },
    {
      question:
        "What specific services are included in your Research House submission assistance?",
      answer:
        "Our experts assist the researchers in elevating the standard of their research paper to that of Research House guidelines. Moreover; the editing and revising of the manuscript/article further improves the chances of the projects acceptance in Research House Publication.",
    },
    {
      question:
        "How do I get started with your assistance with Research House publication?",
      answer:
        "To get started with our assistance, you just have to contact with us directly on our website and give us your paper along with your requirements. We will start working on it accordingly with the utmost expertise soon after you are done with the payment transaction.",
    },
    {
      question:
        "Do you offer affordable Research House publication assistance for researchers on a budget?",
      answer:
        "Yes! Despite being the best Research publication service provider, we have kept our service charges extremely low so that researchers can get our help within their budget.",
    },
    {
      question:
        "What are the benefits of using your Research House-indexed publication assistance services?",
      answer:
        "Our Research House-indexed publication services come with a number of benefits including unlimited revisions, speedy assistance, and post-publication strategies.",
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
        Your Go-to Scopus Journal Paper Submission Assistance Platform
      </h1>

      {/* <div className="flex items-center gap-2 justify-center">
        <div className="bg-white w-[25%] py-6 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
          <div className="flex flex-col justify-center items-center px-6">
            <Image src="/Expert.webp" alt="Expert" width={80} height={80} />
            <h1 className="text-base font-semibold text-secondary py-2">
              Committed Support Team
            </h1>
            <p className="text-center text-sm">
              Get your questions about Research Publishing House assistance
              instantly answered by our expert customer support team.
            </p>

            <button className="flex items-center gap-2 py-2 text-blue text-sm">
              <h4>Meet Our Support Stars</h4>
              <IoArrowForwardCircleOutline size={15} />
            </button>
          </div>
        </div>

        <div className="w-[25%] flex flex-col">
          <div className="bg-white  py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)">
            <div className="flex items-start justify-start gap-2">
              <MdOutlinePayments size={60} />
              <div className="">
                <h1>Easy Payment Methods</h1>
                <p>
                  Pay for our Research House submission assistance through easy
                  and reliable transactional means.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white  py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)">
            <div className="flex items-start justify-start gap-2">
              <MdOutlinePayments  size={60} />
              <div className="">
                <h1>Local Invoice System</h1>
                <p>
                  Get to know more about all essential information in a local
                  and customized manner without having to do extra research.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[40%] p-6 bg-white rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
          <h2 className="text-2xl font-bold text-secondary mb-4">
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
      </div> */}

<div className="flex flex-col md:flex-row md:items-start items-center gap-2 justify-center pt-6">
  <div className="bg-white md:w-[25%] w-full py-6 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
    <div className="flex flex-col justify-center items-center px-6">
      <Image src="/Expert.webp" alt="Expert" width={80} height={80} />
      <h1 className="text-base font-semibold text-secondary py-2">
        Committed Support Team
      </h1>
      <p className="text-center text-sm">
        Get your questions about Research Publishing House assistance instantly
        answered by our expert customer support team.
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
        <MdOutlinePayments size={60} />
        <div>
          <h1 className="text-sm font-semibold text-secondary">Easy Payment Methods</h1>
          <p className="text-sm text-gray-700">
            Pay for our Research House submission assistance through easy
            and reliable transactional means.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white py-4 rounded-lg shadow-[0px_1px_6px_0px_rgba(59,_130,_246,_0.5)]">
      <div className="flex items-start justify-start gap-2 px-4">
        <FaFileInvoiceDollar size={60} />
        <div>
          <h1 className="text-sm font-semibold text-secondary">Local Invoice System</h1>
          <p className="text-sm text-gray-700">
            Get to know more about all essential information in a local
            and customized manner without having to do extra research.
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
