'use client'
import { useEffect } from "react"

import React from 'react'
import { BiMessageRoundedDots } from "react-icons/bi";

export const TalkBtn = ({width = 'w-full',mdWidth = "md:w-[230px]", bgColor = "#007285" ,label="TALK TO OUR EXPERT",icon: Icon = BiMessageRoundedDots }) => {
  useEffect(() => {
    // Adding Tawk.to script to the page when the component mounts
    var Tawk_API = Tawk_API || {},
      Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://tawk.to/chat/67236eb82480f5b4f596b0cc/default";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  const handleTalkToExpertClick = () => {
    if (window.Tawk_API && window.Tawk_API.maximize) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to is not initialized properly.");
    }
  };
    
      
  return (
    <div>
         <button
            onClick={handleTalkToExpertClick}
            className={`flex gap-2 items-center bg-secondary ${width} ${mdWidth} h-10 justify-center rounded-md`} style={{ backgroundColor: bgColor }}
          >
          {Icon && <Icon className="text-2xl md:text-3xl" color="white" />}
            <h1 className="text-white font-bold text-sm md:text-base uppercase">
             {label}
            </h1>
          </button>
    </div>
  )
}




