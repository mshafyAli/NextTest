"use client"
import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import DiscountModal from "./DiscountModel";

const TwoBtn = ({
  orderLabel = "Get A Quote",
  whatsappLabel = "Chat With us!",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 py-2 w-full md:w-auto">
        {/* Order Button */}
        <div className="group bg-blue w-full md:w-[160px] h-10 flex gap-2 items-center justify-center hover:bg-secondary cursor-pointer transition duration-300 ease-in-out rounded-[25px]">
          <button onClick={openModal} className="text-white text-sm  ">{orderLabel}</button>
        </div>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/447456428217?text=${encodeURIComponent(
            "I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group border border-blue w-full md:w-[160px] h-10 flex gap-2 items-center justify-center rounded-[25px] hover:bg-blue transition duration-300 ease-in-out">
            <h1 className="text-blue  text-sm   group-hover:text-white transition duration-300 ease-in-out">
              {whatsappLabel}
            </h1>
          </div>
        </a>
      </div>
      <DiscountModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TwoBtn;
