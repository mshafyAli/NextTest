'use client'
import { useEffect } from "react"

import React from 'react'
import { BiMessageRoundedDots } from "react-icons/bi";

export const TalkBtn = ({width = 'w-full',mdWidth = "md:w-[230px]", bgColor = "#ffb800" ,label="Help Assignment",icon: Icon = BiMessageRoundedDots }) => {
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
            className={`flex gap-2 items-center bg-[#ffb800] ${width} ${mdWidth} h-10 justify-center rounded-md`} style={{ backgroundColor: bgColor }}
          >
          {Icon && <Icon className="text-2xl md:text-3xl" color="white" />}
            <h1 className="text-white font-bold text-sm uppercase">
             {label}
            </h1>
          </button>
    </div>
  )
}


// 'use client';
// import { useEffect } from "react";
// import React from 'react';
// import { BiMessageRoundedDots } from "react-icons/bi";

// export const TalkBtn = ({ width = "w-full", mdWidth = "md:w-[220px]", bgColor = "#ffb800", label = "help assignment" }) => {
//   useEffect(() => {
//     // Adding Tawk.to script to the page when the component mounts
//     var Tawk_API = Tawk_API || {},
//       Tawk_LoadStart = new Date();
//     (function () {
//       var s1 = document.createElement("script"),
//         s0 = document.getElementsByTagName("script")[0];
//       s1.async = true;
//       s1.src = "https://tawk.to/chat/601da070c31c9117cb7649b7/1etprlduf";
//       s1.charset = "UTF-8";
//       s1.setAttribute("crossorigin", "*");
//       s0.parentNode.insertBefore(s1, s0);
//     })();
//   }, []);

//   const handleTalkToExpertClick = () => {
//     if (window.Tawk_API && window.Tawk_API.maximize) {
//       window.Tawk_API.maximize();
//     } else {
//       console.error("Tawk.to is not initialized properly.");
//     }
//   };

//   return (
//     <div>
//       <button
//         onClick={handleTalkToExpertClick}
//         className={`flex gap-2 items-center ${width} ${mdWidth} h-10 justify-center rounded-md`}
//         style={{ backgroundColor: bgColor }}
//       >
//         <BiMessageRoundedDots className="text-2xl md:text-3xl" color="white" />
//         <h1 className="text-white font-bold text-sm uppercase">
//           {label}
//         </h1>
//       </button>
//     </div>
//   );
// };

