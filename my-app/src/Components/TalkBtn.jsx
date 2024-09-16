'use client'
import { useEffect } from "react"

import React from 'react'
import { BiMessageRoundedDots } from "react-icons/bi";

export const TalkBtn = () => {
    useEffect(() => {
        // Adding Tawk.to script to the page when the component mounts
        var Tawk_API = Tawk_API || {},
          Tawk_LoadStart = new Date();
        (function () {
          var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
          s1.async = true;
          s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf";
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
            className="flex gap-2 items-center bg-[#ffb800] w-full md:w-[220px] h-10 justify-center rounded-md"
          >
            <BiMessageRoundedDots
              className="text-2xl md:text-3xl"
              color="white"
            />
            <h1 className="text-white font-bold text-sm uppercase">
              help assignment
            </h1>
          </button>
    </div>
  )
}
