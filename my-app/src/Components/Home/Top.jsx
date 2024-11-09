import React from "react";
import { PiSealPercent } from "react-icons/pi";
import { BsFillGiftFill } from "react-icons/bs";

const Top = () => {
  return (
    <div className="w-full h-12">
      <div className="flex">
        <div className="w-1/2 bg-green h-12">
          <div className="flex gap-2 items-center px-2 text-white justify-end py-4">
            <BsFillGiftFill size={20} />
            <h4 className="text-[11px]">
              Get your articles and papers published in affordable prices
              without any quality compromise.
            </h4>
          </div>
        </div>
        <div className="w-1/2 bg-secondary h-12">
          <div className="flex gap-2 items-center text-white justify-start px-2 py-4">
            <PiSealPercent size={20} />
            <h4 className="text-[11px]">
            Amazing discounts available for limited on publication services!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
