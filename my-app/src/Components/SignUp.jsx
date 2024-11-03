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

// "use client";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Select from "react-select";
// import countryList from "react-select-country-list";
// import Image from "next/image";

// const SignUp = () => {
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState(null);
//   const options = countryList().getData();

//   const handleCountryChange = (selectedCountry) => {
//     setCountry(selectedCountry);
//   };

//   return (
//     <>
//       <div className="relative w-[400px] h-[100px] hidden md:block">
//         <Image src="/brand.png" alt="brand" width={400} height={100} className="w-[350px] hidden md:block" />

//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex items-center justify-center -left-10 -top-16">
//           <h1 className="text-green font-bold md:text-base text-sm text-center">
//             LOWEST PRICE <span className="text-white">GUARANTEED</span>
//           </h1>
//         </div>
//       </div>

//       <div className="w-full h-24 border-2 border-secondary mb-8 relative">
//         <div className="relative bg-primary text-2xl font-semibold mx-auto bottom-4 px-4 w-[12rem]">Straight 50%
//         </div>
//         <h1 className="text-green font-extrabold flex justify-center items-center  text-4xl">DISCOUNT</h1>
//         <div className="relative bg-secondary text-white text-sm md:font-semibold px-2 mx-auto -bottom-2 md:px-4  md:w-[22rem] w-full rounded-md">Up to 20% Additional Discount On Big Orders

//         </div>
//       </div>

//       <div className="max-w-md mx-auto p-6 border border-green bg-white rounded-lg shadow-md">
//         <h1 className="text-secondary text-center pb-4 text-2xl font-bold">
//           Act Fast - Save Big!
//         </h1>

//         <form className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-1">Name*</label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-blue"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Email Address*
//             </label>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-1 focus:ring-blue"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Country*</label>

//             <Select
//               options={options}
//               value={country}
//               onChange={handleCountryChange}
//               placeholder="---Select Country---"
//               className="mt-1 "
//               styles={{
//                 control: (base) => ({
//                   ...base,
//                   borderColor: "#14125c",
//                   boxShadow: "none",
//                   borderRadius: "9999px",
//                 }),
//               }}
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Phone Number*
//             </label>

//             <div className="w-full rounded-full  border border-secondary">
//               <PhoneInput
//                 country={"us"}
//                 value={phone}
//                 onChange={setPhone}
//                 placeholder="Phone Number"
//                 inputStyle={{
//                   border: "none",
//                   borderRadius: "9999px",
//                   width: "100%",
//                   paddingLeft: "52px", // Adjust for flag dropdown spacing
//                 }}
//                 buttonStyle={{
//                   border: "none",
//                   backgroundColor: "transparent",
//                   paddingLeft: "10px", // Adjust as needed
//                 }}
//                 containerClass="w-full rounded-full"
//                 inputClass="w-full rounded-full px-4 py-2"
//               />
//             </div>
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue text-white py-2 rounded-full font-bold hover:bg-blue-700 transition"
//           >
//             Get My Free Quote
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default SignUp;

"use client";
import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import countryList from "react-select-country-list";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const options = countryList().getData();
  const router = useRouter();

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name,
      email,
      country: country ? country.label : "",
      phone,
    };

    try {
      const response = await axios.post("https://be.researchpublishinghouse.com/api/signup.php", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200 || response.status === 201) {
        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");

        // Redirect to ThankYou page with query parameters
        const urlParams = new URLSearchParams({
          name: encodeURIComponent(name),
          email: encodeURIComponent(email),
          phone: encodeURIComponent(phone),
        });
        router.push(`/thankyou?${urlParams.toString()}`);
      } else {
        console.error("Error:", response);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="relative w-[400px] h-[100px] hidden md:block">
        <Image src="/brand.png" alt="brand" width={400} height={100} className="w-[350px] hidden md:block" />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center -left-10 -top-16">
          <h1 className="text-green font-bold md:text-base text-sm text-center">
            LOWEST PRICE <span className="text-white">GUARANTEED</span>
          </h1>
        </div>
      </div>

      <div className="w-full h-24 border-2 border-secondary mb-8 relative">
        <div className="relative bg-primary text-2xl font-semibold mx-auto bottom-4 px-4 w-[12rem]">Straight 50%</div>
        <h1 className="text-green font-extrabold flex justify-center items-center text-4xl">DISCOUNT</h1>
        <div className="relative bg-secondary text-white text-sm md:font-semibold px-2 mx-auto -bottom-2 md:px-4 md:w-[22rem] w-full rounded-md">
          Up to 20% Additional Discount On Big Orders
        </div>
      </div>

      <div className="max-w-md mx-auto p-6 border border-green bg-white rounded-lg shadow-md">
        <h1 className="text-secondary text-center pb-4 text-2xl font-bold">
          Act Fast - Save Big!
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name*</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-secondary rounded-full focus:outline-none focus:ring-1 focus:ring-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email Address*</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-full border border-secondary focus:outline-none focus:ring-1 focus:ring-blue"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Country*</label>
            <Select
              options={options}
              value={country}
              onChange={handleCountryChange}
              placeholder="---Select Country---"
              className="mt-1"
              styles={{
                control: (base) => ({
                  ...base,
                  borderColor: "#14125c",
                  boxShadow: "none",
                  borderRadius: "9999px",
                }),
              }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number*</label>
            <div className="w-full rounded-full border border-secondary">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={setPhone}
                placeholder="Phone Number"
                inputStyle={{
                  border: "none",
                  borderRadius: "9999px",
                  width: "100%",
                  paddingLeft: "52px", // Adjust for flag dropdown spacing
                }}
                buttonStyle={{
                  border: "none",
                  backgroundColor: "transparent",
                  paddingLeft: "10px", // Adjust as needed
                }}
                containerClass="w-full rounded-full"
                inputClass="w-full rounded-full px-4 py-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue text-white py-2 rounded-full font-bold hover:bg-blue-700 transition"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? "Submitting..." : "Get My Free Quote"}
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUp;

