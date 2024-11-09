"use client";
import React, { useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import DiscountModal from '../DiscountModel';

const TwoButtons = ({ orderLabel = "Submit Inquiry", whatsappLabel = "WhatsApp Now" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2 py-4 w-full md:w-auto">
        {/* Order Button */}
        <button
          onClick={openModal}
          className="bg-white w-full md:w-[160px] h-10 flex items-center justify-center rounded-[25px]  text-blue text-sm uppercase transition duration-300 ease-in-out"
        >
          {orderLabel}
        </button>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/447456428217?text=${encodeURIComponent(
            "I want to inquire about your services please."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group  w-full md:w-[160px] h-10 flex gap-1 items-center justify-center rounded-[25px] bg-blue transition duration-300 ease-in-out">
            <IoLogoWhatsapp className="text-xl text-white transition duration-300 ease-in-out" />
            <h1 className="text-white text-sm uppercase  transition duration-300 ease-in-out">
              {whatsappLabel}
            </h1>
          </div>
        </a>
      </div>

      <DiscountModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default TwoButtons;
