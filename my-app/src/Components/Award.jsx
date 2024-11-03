// import React from "react";
// import Image from "next/image";

// const Award = () => {
//   return (
//     <div className="bg-grey w-full h-auto mb-12 relative">
//       <div className="w-[80%] mx-auto pt-6 ">
//         {/* Container for Award image and heading */}
//         <div className="relative flex flex-col items-center">
//           <Image
//             src="/Award-head.webp"
//             alt="Award Head"
//             width={300}
//             height={100}
//           />
//           <h1 className="absolute text-center text-secondary text-2xl font-bold top-1/2 transform -translate-y-1/2">
//             Awards and <br /> Achievements
//           </h1>
//         </div>

//         <div className="flex pt-6">
//           <div className="w-[200px] py-6 px-4 border-b border-r flex flex-col justify-center items-center border-gray-400">
//             <h1 className="font-bold">Pulitzer-Prize</h1>
//             <h2 className="text-secondary text-center pt-2 font-semibold">
//               National Medal of Science
//             </h2>
//           </div>

//           <div className="w-[200px] py-6 px-4 border-b border-r flex flex-col justify-center items-center border-gray-400">
//             <Image src="/Award1.webp" alt="Award Head" width={80} height={80} />
//             <h2 className="text-secondary text-center pt-2 font-semibold">
//               Abel Prize
//             </h2>
//           </div>

//           <div className="w-[200px] py-6 px-4 border-b border-r flex flex-col justify-center items-center border-gray-400">
//             <Image src="/Award2.webp" alt="Award Head" width={80} height={80} />
//             <h2 className="text-secondary text-center pt-2 font-semibold">
//               Nobel Prize for Physics
//             </h2>
//           </div>

//           <div className="w-[200px] py-6 px-4 border-b border-r flex flex-col justify-center items-center border-gray-400">
//             <Image src="/Award2.webp" alt="Award Head" width={80} height={80} />
//             <h2 className="text-secondary text-center pt-2 font-semibold">
//               Pulitzer Prize
//             </h2>
//           </div>

//           <div className="w-[200px] py-6 px-4 border-b border-r flex flex-col justify-center items-center border-gray-400">
//             <Image src="/Award2.webp" alt="Award Head" width={80} height={80} />
//             <h2 className="text-secondary text-center pt-2 font-semibold">
//             Lasker Award
//             </h2>
//           </div>


//         </div>
//       </div>

//       {/* Background banner image positioned at the bottom-right */}
//       <Image
//         src="/AwardBanner.webp"
//         alt="Award Bg"
//         width={500}
//         height={300}
//         className="absolute bottom-0 right-0"
//       />
//     </div>
//   );
// };

// export default Award;



import React from "react";
import Image from "next/image";

const Award = () => {
  // Array containing details of each award
  const awards = [
    {
      title: "Pulitzer Prize",
      subtitle: "National Medal of Science",
      imageSrc: null, // No image for this entry as per your current code
    },
    {
      title: "Abel Prize",
      imageSrc: "/award1.webp",
    },
    {
      title: "Nobel Prize for Physics",
      imageSrc: "/award2.webp",
    },
    {
      title: "Pulitzer Prize",
      imageSrc: "/award3.webp",
    },
    {
      title: "Lasker Award",
      imageSrc: "/award4.webp",
    },
  ];

  const awards2 = [
    {
      title: "Turing Award",
      imageSrc: "/award5.webp",
    },
    {
      title: "Shaw Prize",
      imageSrc: "/award6.webp",
    },
    {
      title: "Fields Medal",
      imageSrc: "/award7.webp",
    },
    {
      title: "Kavli Prize",
      imageSrc: "/award8.webp",
    },
    {
      title: "Wolf Prize",
      imageSrc: "/award9.webp",
    },
  ];

  return (
    <div className="bg-grey w-full h-auto mb-12 relative">
      <div className="md:w-[80%] w-[90%] mx-auto pt-6">
        {/* Container for Award image and heading */}
        <div className="relative flex flex-col items-center">
          <Image src="/award-head.webp" alt="Award Head" width={300} height={100} />
          <h1 className="absolute text-center text-secondary text-2xl font-bold top-1/2 transform -translate-y-1/2">
            Awards and <br /> Achievements
          </h1>
        </div>

        {/* Award items */}
        <div className="hidden md:flex md:w-[80%] w-full mx-auto pt-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="w-[200px] py-2 px-4 md:border-b md:border-r flex flex-col justify-center items-center border-gray-200"
            >
              {award.imageSrc ? (
                <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
              ) : (
                <h1 className="font-bold">{award.title}</h1>
              )}
              <h2 className="text-secondary text-center pt-2 font-semibold">
                {award.subtitle || award.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:w-[80%] md:hidden w-full mx-auto pt-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="w-[200px] py-2 px-4 md:border-b md:border-r flex flex-col justify-center items-center border-gray-200"
            >
              {award.imageSrc ? (
                <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
              ) : (
                <h1 className="font-bold">{award.title}</h1>
              )}
              <h2 className="text-secondary text-center pt-2 font-semibold">
                {award.subtitle || award.title}
              </h2>
            </div>
          ))}
        </div> 



        <div className="md:flex hidden md:w-[80%] w-full mx-auto pb-20">
          {awards2.map((award, index) => (
            <div
              key={index}
              className="w-[200px] py-2 px-4 border-b border-r flex flex-col justify-center items-center border-gray-200"
            >
              {award.imageSrc ? (
                <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
              ) : (
                <h1 className="font-bold">{award.title}</h1>
              )}
              <h2 className="text-secondary text-center pt-2 font-semibold">
                {award.subtitle || award.title}
              </h2>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-2 md:hidden md:w-[80%] w-full mx-auto pb-20">
          {awards2.map((award, index) => (
            <div
              key={index}
              className="w-[200px] py-2 px-4 md:border-b md:border-r flex flex-col justify-center items-center border-gray-200"
            >
              {award.imageSrc ? (
                <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
              ) : (
                <h1 className="font-bold">{award.title}</h1>
              )}
              <h2 className="text-secondary text-center pt-2 font-semibold">
                {award.subtitle || award.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Background banner image positioned at the bottom-right */}
      <Image
        src="/AwardBanner.webp"
        alt="Award Bg"
        width={500}
        height={300}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
};

export default Award;


// import React from "react";
// import Image from "next/image";

// const Award = () => {
//   const awards = [
//     { title: "Pulitzer Prize", subtitle: "National Medal of Science", imageSrc: null },
//     { title: "Abel Prize", imageSrc: "/Award1.webp" },
//     { title: "Nobel Prize for Physics", imageSrc: "/Award2.webp" },
//     { title: "Pulitzer Prize", imageSrc: "/Award3.webp" },
//     { title: "Lasker Award", imageSrc: "/Award4.webp" },
//   ];

//   const awards2 = [
//     { title: "Turing Award", imageSrc: "/Award5.webp" },
//     { title: "Shaw Prize", imageSrc: "/Award6.webp" },
//     { title: "Fields Medal", imageSrc: "/Award7.webp" },
//     { title: "Kavli Prize", imageSrc: "/Award8.webp" },
//     { title: "Wolf Prize", imageSrc: "/Award9.webp" },
//   ];

//   return (
//     <div className="bg-grey w-full h-auto mb-12 relative">
//       <div className="md:w-[80%] w-[90%] mx-auto pt-6">
//         {/* Container for Award image and heading */}
//         <div className="relative flex flex-col items-center">
//           <Image src="/Award-head.webp" alt="Award Head" width={300} height={100} />
//           <h1 className="absolute text-center text-secondary text-2xl font-bold top-1/2 transform -translate-y-1/2">
//             Awards and <br /> Achievements
//           </h1>
//         </div>

//         {/* Award items */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[80%] w-full mx-auto pt-10">
//           {awards.map((award, index) => (
//             <div
//               key={index}
//               className="w-[200px] py-2 px-4 flex flex-col justify-center items-center 
//                          border-b border-gray-200 md:border-r md:border-b"
//             >
//               {award.imageSrc ? (
//                 <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
//               ) : (
//                 <h1 className="font-bold">{award.title}</h1>
//               )}
//               <h2 className="text-secondary text-center pt-2 font-semibold">
//                 {award.subtitle || award.title}
//               </h2>
//             </div>
//           ))}
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:w-[80%] w-full mx-auto pb-20">
//           {awards2.map((award, index) => (
//             <div
//               key={index}
//               className="w-[200px] py-2 px-4 flex flex-col justify-center items-center 
//                          border-b border-gray-200 md:border-r md:border-b"
//             >
//               {award.imageSrc ? (
//                 <Image src={award.imageSrc} alt={award.title} width={70} height={70} />
//               ) : (
//                 <h1 className="font-bold">{award.title}</h1>
//               )}
//               <h2 className="text-secondary text-center pt-2 font-semibold">
//                 {award.subtitle || award.title}
//               </h2>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Background banner image positioned at the bottom-right */}
//       <Image
//         src="/AwardBanner.webp"
//         alt="Award Bg"
//         width={500}
//         height={300}
//         className="absolute bottom-0 right-0"
//       />
//     </div>
//   );
// };

// export default Award;
