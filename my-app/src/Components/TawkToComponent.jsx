
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
  };

  

  return (
    <>
      <TawkMessengerReact
        propertyId="66339c801ec1082f04ea383e" // Replace with your actual propertyId
        widgetId="1hsspmlq1" // Replace with your actual widgetId
        ref={tawkMessengerRef}
        onLoad={onLoad}
        
      />
      <button className="minimize-button" onClick={handleMinimize}>
       
      </button>
    </>
  );
};

export default TawkToComponent;















