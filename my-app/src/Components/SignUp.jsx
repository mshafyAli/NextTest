// 'use client'

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//    const router = useRouter();

//   const [time, setTime] = useState({
//     hours: 1,
//     minutes: 36,
//     seconds: 37,
//   });

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTime((prevTime) => {
//         let { hours, minutes, seconds } = prevTime;

//         if (seconds > 0) {
//           seconds--;
//         } else if (minutes > 0) {
//           seconds = 59;
//           minutes--;
//         } else if (hours > 0) {
//           seconds = 59;
//           minutes = 59;
//           hours--;
//         } else {
//           clearInterval(countdown);
//         }

//         return { hours, minutes, seconds };
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     try {
//       const data = { name, email, phone };

//       console.log(data);

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const res = await axios.post(`https://be.encoders.com.pk/api/signup.php`, data, config);

//       if (res.status === 201 || res.status === 200) {
//         setName("");
//         setEmail("");
//         setPhone("");
//         console.log(res);

//       const urlParams = new URLSearchParams({
//         name: encodeURIComponent(name),
//         email: encodeURIComponent(email),
//         phone: encodeURIComponent(phone),
//       }).toString();

//       router.push(`/thankyou?${urlParams}`);

//       } else {
//         console.error("Error:", res);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {

//       setLoading(false);

//     }
//   };

//   return (
//     <div className="w-full">
//       <div className="relative md:w-[380px] max-w-lg mx-auto h-auto rounded-lg bg-white shadow-3xl">
//         <div className="absolute top-[-20px] left-24 transform -translate-x-1/2 shadow-xl h-10 bg-green-700 p-2 text-xs sm:text-sm font-bold rounded-md text-center text-white">
//           Deal Of The Day
//         </div>

//         <div className="py-10 px-4 sm:px-6">
//           <div className="flex gap-2">
//             <div className="w-2 h-[90px] bg-[#417EE5]"></div>
//             <div>
//               <div className="text-[#7279AE] font-bold text-[14px] sm:text-[16px]">
//                 Order Now & Avail
//               </div>
//               <div className="text-[#ffb800] text-5xl md:text-6xl font-bold animate-blink">
//                 50% OFF
//               </div>
//             </div>
//           </div>

//           <form onSubmit={handleSubmit} className="mt-4">
//             <div className="flex flex-col gap-2">
//               <input
//                 className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                 type="text"
//                 placeholder="Full Name"
//                 autoComplete="name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 autoComplete="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//                 type="tel"
//                 placeholder="Phone No."
//                 required
//                 autoComplete="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>

//             <div className="flex items-center justify-center gap-4 relative mt-6">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="pr-3 text-[12px] sm:text-sm font-bold rounded-l-lg bg-[#007285] text-white w-[45%] sm:w-[140px] md:w-[160px] h-[40px] md:h-[50px] flex-shrink-0"
//               >
//                 {loading ? "Applying Discount.." : "APPLY DISCOUNT"}
//               </button>
//               <span className="text-center font-semibold text-base absolute -top-1 py-3 lg:py-4 md:py-4 rounded-[50%] bg-white w-12 h-12 md:w-12 md:h-14">
//                 OR
//               </span>
//               <a
//                 href={`https://wa.me/447397145697?text=${encodeURIComponent(
//                   "Hello Team Academians, I want to avail my promo code TA-OFF50."
//                 )}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[12px] pl-5 py-3 md:pl-6 md:py-4 sm:text-sm font-bold rounded-r-lg bg-[#408955] text-white w-[45%] sm:w-[140px] md:w-[160px] h-[40px] md:h-[50px] flex-shrink-0"
//               >
//                 WHATSAPP NOW
//               </a>
//             </div>
//           </form>

//           <div className="flex items-center justify-center gap-2 mt-4">
//             <div className="flex items-center justify-center gap-4">
//               <div className="flex flex-col items-center">
//                 <h1 className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-[#007285] flex justify-center items-center text-2xl sm:text-3xl text-white font-semibold shadow-numbers rounded-md">
//                   0{time.hours}
//                 </h1>
//                 <h1 className="text-sm uppercase font-semibold mt-1">Hours</h1>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-semibold -mt-4 sm:-mt-6">
//                 :
//               </h1>
//               <div className="flex flex-col items-center">
//                 <h1 className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-[#007285] flex justify-center items-center text-2xl sm:text-3xl text-white font-semibold shadow-numbers rounded-md">
//                   {time.minutes}
//                 </h1>
//                 <h1 className="text-sm uppercase font-semibold ">Minutes</h1>
//               </div>
//               <h1 className="text-2xl sm:text-3xl font-semibold -mt-4 sm:-mt-6">
//                 :
//               </h1>
//               <div className="flex flex-col items-center">
//                 <h1 className="w-[50px] sm:w-[60px] h-[50px] sm:h-[60px] bg-[#007285] flex justify-center items-center text-2xl sm:text-3xl text-white font-semibold shadow-numbers rounded-md">
//                   {time.seconds}
//                 </h1>
//                 <h1 className="text-sm uppercase font-semibold mt-1">
//                   Seconds
//                 </h1>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="bg-green-700 w-full -mt-4 rounded-b-lg flex items-center justify-center gap-2 p-2">
//           {/* <img
//             src={hotOfferIcon}
//             className="w-5 sm:w-6 h-5 sm:h-6"
//             alt="hot offer icon"
//           /> */}
//           <h1 className="text-white font-semibold text-xs sm:text-base">
//             Signup & Get Additional £100 Discount
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

// "use client";
// import React from "react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const SignUp = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const data = { name, email, phone };

//       console.log(data);

//       const config = {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       };

//       const res = await axios.post(
//         `https://be.the-academians.co.uk/api/signup.php`,
//         data,
//         config
//       );

//       if (res.status === 201 || res.status === 200) {
//         setName("");
//         setEmail("");
//         setPhone("");
//         console.log(res);
//         const urlParams = new URLSearchParams({
//           name: encodeURIComponent(name),
//           email: encodeURIComponent(email),
//           phone: encodeURIComponent(phone),
//         });
//         router.push(`/thankyou?${urlParams.toString()}`);
//       } else {
//         console.error("Error:", res);
//       }
//     } catch (err) {
//       console.error("Error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     // <div className="w-full md:w-[70%] flex justify-center ">
//     //   <div className="bg-white shadow-md w-full md:w-[500px] rounded-2xl p-6 md:p-6">
//     //     <h1 className="bg-green rounded-md text-center text-white text-xl font-bold mb-2">
//     //     LIMITED TIME OFFER
//     //     </h1>
//     //     <div className='flex items-center gap-2 justify-center mb-4'>
//     //       <h1 className='font-bold text-green text-xl md:text-4xl'>50%</h1>
//     //       <h1 className='uppercase text-xl md:text-2xl font-bold'>Discount</h1>
//     //     </div>
//     //     <form onSubmit={handleSubmit}>
//     //       <div className="flex flex-col gap-4">
//     //         <input
//     //           className="border-2 border-[#EEEEEE] outline-none  p-2 rounded-md focus:border-blue-500"
//     //           type="text"
//     //           placeholder="Full Name"
//     //           required
//     //           value={name}
//     //           onChange={(e) => setName(e.target.value)}
//     //         />
//     //         <input
//     //           className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//     //           type="email"
//     //           placeholder="Email"
//     //           required
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //         />
//     //         <input
//     //           className="border-2 border-[#EEEEEE] outline-none p-2 rounded-md focus:border-blue-500"
//     //           type="tel"
//     //           placeholder="Phone No."
//     //           required
//     //           value={phone}
//     //           onChange={(e) => setPhone(e.target.value)}
//     //         />

//     //         <button
//     //           className="w-full md:w-auto h-12 text-white bg-secondary font-bold  flex items-center justify-center  rounded-md uppercase"
//     //           type="submit"
//     //           disabled={loading}
//     //         >
//     //           {loading ? "Submitting..." : "AVAIL NOW"}
//     //         </button>
//     //       </div>
//     //     </form>
//     //   </div>
//     // </div>

//     <div className="w-full md:w-[50%]  ">
//       <div className="bg-[#ffffff26]    w-full md:w-[330px] rounded-2xl ">
//         <h1 className="bg-green rounded-t-2xl shadow-md text-center text-white text-2xl font-bold  h-12 py-2 w-full -mt-3  ">
//           LIMITED TIME OFFER
//         </h1>

//         <div className="p-6 md:py-4 md:pb-10 md:p-6">
//           <div className="flex items-center gap-2 justify-center mb-4 ">
//             <h1 className="font-extrabold text-white text-5xl md:text-5xl animate-blink">
//               50%
//             </h1>
//             <h1 className="uppercase text-white text-4xl md:text-3xl font-extrabold">
//               Discount
//             </h1>
//           </div>
//           <form onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-4">
//               <input
//                 className="border-2 border-secondary outline-none p-2 placeholder:text-primary rounded-md focus:border-blue-500"
//                 type="text"
//                 placeholder="Full Name"
//                 required
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 className="border-2 border-secondary outline-none p-2 placeholder:text-primary rounded-md focus:border-blue-500"
//                 type="email"
//                 placeholder="Email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 className="border-2 border-secondary outline-none placeholder:text-primary p-2 rounded-md focus:border-blue-500"
//                 type="tel"
//                 placeholder="Phone No."
//                 required
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />

//               <button
//                 className="w-full md:w-auto h-12 text-white bg-secondary font-bold flex items-center justify-center rounded-md uppercase"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "AVAIL NOW"}
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import Image from 'next/image'

const SignUp = () => {
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState(null);
  const options = countryList().getData();

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <>
   <div className="relative w-[400px] h-[100px]">
      {/* Image */}
      <Image src="/brand.png" alt="rph Logo" width={400} height={100} />
      
      {/* Text Overlay */}
      <div className="absolute bottom-[4rem]  z-10 ">
        <h1 className="text-green font-bold text-xl">
        LOWEST PRICE <span className='text-white'>GUARANTEED</span>
        </h1>
      </div>
    </div>


    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name*
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address*
          </label>
          <input
            type="email"
            placeholder="Email"
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country*
          </label>
          <Select
            options={options}
            value={country}
            onChange={handleCountryChange}
            placeholder="---Select Country---"
            className="mt-1"
            styles={{
              control: (base) => ({
                ...base,
                borderColor: '#d1d5db',
                boxShadow: 'none',
                '&:hover': { borderColor: '#3b82f6' },
              }),
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number*
          </label>
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            placeholder="Phone Number"
            inputStyle={{
              width: '100%',
              borderRadius: '0.375rem',
              borderColor: '#d1d5db',
            }}
            containerStyle={{ width: '100%' }}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get My Free Quote
        </button>
      </form>
    </div>
    </>
  );
};

export default SignUp;
