import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
const Bullets = () => {
  return (
    <div>
        <div className="grid grid-cols-2 gap-2  pt-8">
                <div className="flex items-center gap-1">
                  <FaStar size={15} className="text-green" />
                  <h1 className="text-sm  font-font-medium">
                  Publish in Top Journals
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar size={15} className="text-green" />
                  <h1 className="text-sm  font-font-medium">
                  Top Rated Publication Experts
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar size={15} className="text-green" />
                  <h1 className="text-sm  font-font-medium">
                  24/7 Friendly Support
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaClockRotateLeft size={15} className="text-green" />
                  <h1 className="text-sm  font-font-medium">
                  Most Affordable Prices
                  </h1>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar size={15} className="text-green" />
                  <h1 className="text-sm  font-font-medium">
                  Feature your papers
                  </h1>
                </div>
                
              </div>
    </div>
  )
}

export default Bullets