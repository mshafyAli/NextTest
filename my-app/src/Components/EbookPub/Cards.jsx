


// import React from "react";
// import { FaFilePen } from "react-icons/fa6";

// const Cards = () => {
//   return (
//     <div className="bg-grey w-full py-20 h-auto">
//       <div className="w-[80%] mx-auto">
//         <h1 className="uppercase md:text-4xl text-2xl text-secondary text-center font-bold">
//           Get Your E-Book Published TODAY On The Best E-Book Publishing
//           Platforms!
//         </h1>
//         <p className="text-center md:px-24 px-0 py-2">
//           Be ready to become a published author with expert assistance to make
//           your book globally recognized among thousands of readers.
//         </p>

//         {/* Flip Card Container */}
//         <div className="grid grid-cols-4">
//           {/* card1 */}
//           <div className="flip-card-container w-[18rem] h-[18rem] mx-auto mt-8">
//             {/* Flip Inner Container */}
//             <div className="flip-card">
//               {/* Front Side */}
//               <div className="flip-card-front">
//                 <h1 className="text-6xl font-bold text-secondary">01</h1>
//                 <p className="text-lg font-semibold text-secondary">
//                   PROOFREADING
//                 </p>
//                 <p className="text-lg font-semibold text-secondary">
//                   AND EDITING
//                 </p>
//               </div>

//               {/* Back Side */}
//               <div className="flip-card-back">
//                 <FaFilePen size={60} className="pb-2" />
//                 <h2 className="text-xl font-bold text-center px-4 pb-2">
//                   Proofreading and Editing
//                 </h2>
//                 <p className="text-center px-4">
//                   You can reach absolute perfection on your ebooks with our
//                   proofreading and editing services.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* card2 */}
//           <div className="flip-card-container w-[18rem] h-[18rem] mx-auto mt-8">
//             {/* Flip Inner Container */}
//             <div className="flip-card">
//               {/* Front Side */}
//               <div className="flip-card-front">
//                 <h1 className="text-6xl font-bold text-secondary">02</h1>
//                 <p className="text-lg font-semibold text-secondary text-center uppercase">
//                   Print-On-
//                   <br />
//                   Demand (POD)
//                 </p>
//               </div>

//               {/* Back Side */}
//               <div className="flip-card-back">
//                 <FaFilePen size={60} className="pb-2" />
//                 <h2 className="text-xl font-bold text-center px-4 pb-2">
//                   Print-On-Demand (POD)
//                 </h2>
//                 <p className="text-center px-4">
//                   Sell printed copies on globally recognized platforms and make
//                   your books known.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* card3 */}
//           <div className="flip-card-container w-[18rem] h-[18rem] mx-auto mt-8">
//             {/* Flip Inner Container */}
//             <div className="flip-card">
//               {/* Front Side */}
//               <div className="flip-card-front">
//                 <h1 className="text-6xl font-bold text-secondary">03</h1>
//                 <p className="text-lg font-semibold text-secondary text-center uppercase">
//                   Digital Rights
//                   <br />
//                   Management
//                 </p>
//               </div>

//               {/* Back Side */}
//               <div className="flip-card-back">
//                 <FaFilePen size={60} className="pb-2" />
//                 <h2 className="text-xl font-bold text-center px-4 pb-2">
//                   Digital Rights Management
//                 </h2>
//                 <p className="text-center px-4">
//                   We take every measure to prevent any sort of unauthorized
//                   copying, editing, sharing of content, and copyright issues on
//                   your e-books.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cards;


import React from "react";
import { FaFilePen } from "react-icons/fa6";

// Define card data array
const cardData = [
  {
    id: 1,
    number: "01",
    title: "Proofreading and Editing",
    frontText: ["PROOFREADING", "AND EDITING"],
    description:
      "You can reach absolute perfection on your ebooks with our proofreading and editing services.",
  },
  {
    id: 2,
    number: "02",
    title: "Print-On-Demand (POD)",
    frontText: ["Print-On-", "Demand (POD)"],
    description:
      "Sell printed copies on globally recognized platforms and make your books known.",
  },
  {
    id: 3,
    number: "03",
    title: "Digital Rights Management",
    frontText: ["Digital Rights", "Management"],
    description:
      "We take every measure to prevent any unauthorized copying, editing, sharing of content, and copyright issues on your e-books.",
  },
  {
    id: 4,
    number: "04",
    title: "ISBN Allocation",
    frontText: ["ISBN Allocation"],
    description:
      "We offer fast, reliable, and affordable ISBN allocation assistance for independent authors and publishers.",
  },

  {
    id: 5,
    number: "05",
    title: " E-Pub Formatting",
    frontText: ["E-Pub Formatting"],
    description:
      "We offer finished ePub formatting proof of your ebook for your review.",
  },

  {
    id: 6,
    number: "06",
    title: "Cross-Platform Compatibility",
    frontText: ["Cross-Platform","Compatibility"],
    description:
      "Our experts ensure your ebooks are compatible for multiple platforms making them accessible to a large range of readers.",
  },
  {
    id: 7,
    number: "07",
    title: "Worldwide Support",
    frontText: ["Worldwide Support"],
    description:
      "Our professional eBook publishing services let you publish your work from anywhere in the world.",
  },
  {
    id: 8,
    number: "08",
    title: "Ebook Formatting",
    frontText: ["Ebook Formatting"],
    description:
      "We transform your content into a masterpiece, making us the best choice for any author in need of publication services.",
  },
  
  
];

const Cards = () => {
  return (
    <div className="bg-grey w-full py-20 h-auto">
      <div className="w-[80%] mx-auto">
        <h1 className="uppercase md:text-4xl text-2xl text-secondary text-center font-bold">
          Get Your E-Book Published TODAY On The Best E-Book Publishing Platforms!
        </h1>
        <p className="text-center md:px-24 px-0 py-2">
          Be ready to become a published author with expert assistance to make
          your book globally recognized among thousands of readers.
        </p>

        {/* Flip Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {cardData.map((card) => (
            <div key={card.id} className="flip-card-container w-[18rem] h-[18rem] mx-auto">
              <div className="flip-card">
                {/* Front Side */}
                <div className="flip-card-front">
                  <h1 className="text-6xl font-bold text-secondary">{card.number}</h1>
                  {card.frontText.map((text, index) => (
                    <p key={index} className="text-lg font-semibold text-secondary uppercase">
                      {text}
                    </p>
                  ))}
                </div>

                {/* Back Side */}
                <div className="flip-card-back">
                  <FaFilePen size={60} className="pb-2" />
                  <h2 className="text-xl font-bold text-center px-4 pb-2">{card.title}</h2>
                  <p className="text-center px-4">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
