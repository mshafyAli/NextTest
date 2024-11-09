
import { IoLogoWhatsapp } from "react-icons/io";

const StickyBtn = () => {
  return (
    // <div className="bg-white fixed bottom-0 left-0 right-0 mt-24 md:hidden block">
    //   <div className="flex  gap-2 py-2 px-2">
    //     <div>
    //       <a
    //         href={`https://wa.me/61280064210?text=${encodeURIComponent(
    //           "Hello Team Academians Australia, I want to avail my promo code THA-OFF50."
    //         )}`}
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <div className="bg-[#408955] w-full h-16 flex justify-center rounded-md ">
    //           <div className="flex items-center gap-1 px-4 w-full max-w-[470px] mx-auto">
    //             <IoLogoWhatsapp className="text-3xl" color="white" />
    //             <h1 className="text-white font-bold text-xl">WhatsApp</h1>
    //           </div>
    //         </div>
    //       </a>
    //     </div>
    //     <div className="bg-[#C9293C] w-full h-16 flex justify-center rounded-md">
    //       <div className="flex items-center gap-1 px-4 w-full max-w-[470px] mx-auto">
    //       <IoLogoWhatsapp className="text-3xl" color="white" />
    //       <h1 className="text-[#C9293C] font-bold text-xl">WhatsApp</h1>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white fixed bottom-0 z-50 left-0 right-0 mt-24 w-full md:hidden block">
  <div className="flex gap-1 py-2 px-2">
    <div className="flex-1">
      
          <div className="bg-green w-full h-16 flex justify-center rounded-md ">
        <div className="flex items-center gap-1 px-4 w-full  ">
          <IoLogoWhatsapp className="text-3xl text-green"  />
          <h1 className="text-green font-bold text-xl">WhatsApp</h1>
        </div>
      </div>
       
     
    </div>
    <div className="flex-1">
   <a href={`https://wa.me/447456428217?text=${encodeURIComponent(
          "I want to inquire about your services please!"
        )}`}
        target="_blank"
        rel="noopener noreferrer">
   <div className="bg-[#023838] w-full h-16 flex justify-center rounded-md border">
          <div className="flex items-center gap-1 px-4 w-full ">
            <IoLogoWhatsapp className="text-3xl" color="white" />
            <h1 className="text-white font-bold text-xl">WhatsApp</h1>
          </div>
        </div>
   </a>
    </div>
  </div>
</div>

  );
};

export default StickyBtn;
