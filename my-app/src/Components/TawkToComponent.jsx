
// "use client";

// import { useEffect, useRef } from "react";
// import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

// const TawkToComponent = () => {
//   const tawkMessengerRef = useRef(null);

//   const handleMinimize = () => {
//     if (tawkMessengerRef.current) {
//       tawkMessengerRef.current.minimize();
//     }
//   };

//   const onLoad = () => {
//     console.log("Tawk.to chat widget loaded!");
//   };

  

//   return (
//     <>
//       <TawkMessengerReact
//         propertyId="67236eb82480f5b4f596b0cc" // Replace with your actual propertyId
//         widgetId="default" // Replace with your actual widgetId
//         ref={tawkMessengerRef}
//         onLoad={onLoad}
        
//       />
//       <button className="minimize-button" onClick={handleMinimize}>
       
//       </button>
//     </>
//   );
// };

// export default TawkToComponent;





"use client";

import { useEffect, useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const TawkToComponent = () => {
  const tawkMessengerRef = useRef(null);

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  const onLoad = () => {
    console.log("Tawk.to chat widget loaded!");

    // Wait 5 seconds before maximizing the widget
    setTimeout(() => {
      if (tawkMessengerRef.current) {
        tawkMessengerRef.current.maximize();
      }
    }, 5000); // 5000 milliseconds = 5 seconds
  };

  useEffect(() => {
    // Check if Tawk API is ready and maximize the chat after a delay
    const checkAndMaximize = () => {
      if (window.Tawk_API && window.Tawk_API.maximize) {
        setTimeout(() => window.Tawk_API.maximize(), 5000); // Delayed maximize
      } else {
        // Retry after a short delay if Tawk API is not yet available
        setTimeout(checkAndMaximize, 500);
      }
    };

    checkAndMaximize();
  }, []);

  return (
    <>
      <TawkMessengerReact
        propertyId="67236eb82480f5b4f596b0cc" // Replace with your actual propertyId
        widgetId="default" // Replace with your actual widgetId
        ref={tawkMessengerRef}
        onLoad={onLoad}
      />
      <button className="minimize-button" onClick={handleMinimize}></button>
    </>
  );
};

export default TawkToComponent;





