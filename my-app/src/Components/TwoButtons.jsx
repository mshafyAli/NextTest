
import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

const TwoButtons = ({ orderLabel = "Order Now", whatsappLabel = "Whatsapp Now" }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2  py-4 w-full md:w-auto">
      {/* Order Button */}
      <div className="bg-secondary group w-full md:w-[160px] h-10 flex gap-2 items-center justify-center rounded-[25px] hover:bg-blue cursor-pointer transition duration-300 ease-in-out">
        <h1 className="text-white  text-sm  uppercase">
          {orderLabel}
        </h1>
      </div>

      {/* WhatsApp Button */}
      <a
  href={`https://wa.me/447456428217?text=${encodeURIComponent(
    "I want to inquire about your services please."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="group border border-secondary w-full md:w-[160px] h-10 flex gap-1 items-center justify-center rounded-[25px] hover:bg-secondary transition duration-300 ease-in-out">
    <IoLogoWhatsapp className="text-xl text-secondary group-hover:text-white transition duration-300 ease-in-out" />
    <h1 className="text-secondary  text-sm  uppercase group-hover:text-white transition duration-300 ease-in-out">
      {whatsappLabel}
    </h1>
  </div>
</a>

    </div>
  );
};

export default TwoButtons;
