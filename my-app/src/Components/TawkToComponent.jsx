
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
        propertyId="67236eb82480f5b4f596b0cc" // Replace with your actual propertyId
        widgetId="default" // Replace with your actual widgetId
        ref={tawkMessengerRef}
        onLoad={onLoad}
        
      />
      <button className="minimize-button" onClick={handleMinimize}>
       
      </button>
    </>
  );
};

export default TawkToComponent;















