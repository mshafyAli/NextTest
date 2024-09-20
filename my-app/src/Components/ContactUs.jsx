// import { IoLogoWhatsapp } from "react-icons/io";
// import { TalkBtn } from "./TalkBtn";
// import ContactForm from "./ContactForm";
// import React, { forwardRef } from 'react';

// const ContactUs = forwardRef((props, ref) => {
  

 
//   return (
//     <div
//       className="w-full md:w-[75%] h-auto md:my-24 contact-section mx-auto mt-12 px-4"
//       ref={ref}
//       id="contact-us"
//     >
//       <h1 className="text-[#5A5A5A] text-3xl md:text-5xl text-center font-bold mb-2 md:mb-12">
//         CONTACT US
//       </h1>

//       {/* container */}
//       <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 justify-center">
//         {/* Left Side */}
//         <div className="w-full md:w-[60%] py-8 md:py-0 text-center md:text-left ">
//           <h1 className="text-[#333333] text-2xl md:text-3xl font-bold mb-4 md:mb-6">
//             One Stop Solution to All <br /> Academic Worries
//           </h1>

//           <p className="text-sm md:text-base text-[#333333] mb-6 px-4 md:px-0">
//             Struggling with looming deadlines and intricate assignments? At
//             Academians, we understand the pressure students face daily. If
//             you&apos;re constantly thinking, Who can write my assignment for me? or
//             Where can I pay someone to do my assignment?, look no further. Our
//             team of dedicated assignment writers is here to provide top-notch,
//             tailor-made solutions for all your academic needs. Let us be your
//             academic beacon, guiding you through every challenge, ensuring your
//             success.
//           </p>

//           <div className="flex flex-col md:flex-row gap-3 py-8 w-full md:w-auto">
//          <TalkBtn/>

//             <a
//               href={`https://wa.me/447397145697?text=${encodeURIComponent(
//                 "Hello Team Academians, I want to avail my promo code TA-OFF50."
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
              
//             >
//               <div className="bg-white w-full md:w-[230px] h-10 flex items-center gap-2 justify-center rounded-md border border-[#408955]">
//                 <IoLogoWhatsapp className="text-2xl text-[#408955]" />
//                 <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
//                   Whatsapp Now
//                 </h1>
//               </div>
//             </a>
//           </div>

        
//         </div>

//         {/* Right Side */}
//        <ContactForm />
//       </div>
//     </div>
//   );
// });

// export default ContactUs;


import { IoLogoWhatsapp } from "react-icons/io";
import { TalkBtn } from "./TalkBtn";
import ContactForm from "./ContactForm";
import React, { forwardRef } from 'react';

const ContactUs = forwardRef((props, ref) => {
  return (
    <div
      className="w-full md:w-[75%] h-auto md:my-24 contact-section mx-auto mt-12 px-4"
      ref={ref}
      id="contact-us"
    >
      <h1 className="text-[#5A5A5A] text-3xl md:text-5xl text-center font-bold mb-2 md:mb-12">
        CONTACT US
      </h1>

      {/* container */}
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-16 justify-center">
        {/* Left Side */}
        <div className="w-full md:w-[60%] py-8 md:py-0 text-center md:text-left ">
          <h1 className="text-[#333333] text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            One Stop Solution to All <br /> Academic Worries
          </h1>

          <p className="text-sm md:text-base text-[#333333] mb-6 px-4 md:px-0">
            Struggling with looming deadlines and intricate assignments? At
            Academians, we understand the pressure students face daily. If
            you&apos;re constantly thinking, Who can write my assignment for me? or
            Where can I pay someone to do my assignment?, look no further. Our
            team of dedicated assignment writers is here to provide top-notch,
            tailor-made solutions for all your academic needs. Let us be your
            academic beacon, guiding you through every challenge, ensuring your
            success.
          </p>

          <div className="flex flex-col md:flex-row gap-3 py-8 w-full md:w-auto">
            <TalkBtn />

            <a
              href={`https://wa.me/447397145697?text=${encodeURIComponent(
                "Hello Team Academians, I want to avail my promo code TA-OFF50."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-white w-full md:w-[230px] h-10 flex items-center gap-2 justify-center rounded-md border border-[#408955]">
                <IoLogoWhatsapp className="text-2xl text-[#408955]" />
                <h1 className="text-[#408955] font-bold text-sm md:text-base uppercase">
                  Whatsapp Now
                </h1>
              </div>
            </a>
          </div>
        </div>

        {/* Right Side */}
        <ContactForm />
      </div>
    </div>
  );
});

// Assign display name for debugging
ContactUs.displayName = 'ContactUs';

export default ContactUs;

