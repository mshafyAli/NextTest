


// import { useState } from "react";
// import Image from "next/image"


// const Books = () => {
//   const [activeCategory, setActiveCategory] = useState("fiction");

//   const images =[
//     {src:"/book1.webp"},
//     {src:"/book2.webp"},
//     {src:"/book3.webp"},
//     {src:"/book4.webp"},
//   ]



//   const imagesByCategory = {
//     fiction: [book1, book2, book3, book4],
//     nonfiction: [book5, book6, book7, book8],
//     biography: [book9, book10, book11, book12],
//     informative: [book13, book14, book15, book16],
//     autobiography: [book17, book18, book19],
//     memoir: [book20, book21, book22, book23],
//   };

//   const renderImages = () => {
//     return imagesByCategory[activeCategory].map((book, index) => (
//       <Image
//         key={index}
//         src={book}
//         className="w-[80px] md:w-[250px] h-auto object-cover hover:scale-105 transition-transform duration-500"
//         alt={`book-${index}`}
//       />
//     ));
//   };

//   return (
//     <div className="bg-white w-full py-8 px-4 md:px-8 lg:px-16">
//       <div className="w-full max-w-screen-xl mx-auto">
       

//         {/* Categories */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {["fiction", "nonfiction", "biography", "informative", "autobiography", "memoir"].map(
//             (category) => (
//               <div
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`cursor-pointer text-sm md:text-base lg:text-lg font-bold uppercase ${activeCategory === category ? "text-[#4F389D]" : "text-gray-600"}`}
//               >
//                 <h1>{category.replace(/([a-z])([A-Z])/g, '$1 $2')}</h1>
//                 {activeCategory === category && (
//                   <div className="w-20 h-[3px] rounded bg-[#4F389D] mx-auto mt-1"></div>
//                 )}
//               </div>
//             )
//           )}
//         </div>

//         {/* Render images based on the selected category */}
//         <div className="flex flex-wrap justify-center gap-4 mb-8">
//           {renderImages()}
//         </div>

        
        
        
//       </div>
//     </div>
//   );
// };

// export default Books;

import { useState } from "react";
import Image from "next/image";

const Books = () => {
  const [activeCategory, setActiveCategory] = useState("fiction");

  const imagesByCategory = {
    fiction: ["/book1.webp", "/book2.webp", "/book3.webp", "/book4.webp"],
    nonfiction: ["/book2.webp", "/book1.webp", "/book3.webp", "/book4.webp"],
    biography: ["/book1.webp", "/book4.webp", "/book2.webp", "/book3.webp"],
    informative: ["/book1.webp", "/book2.webp", "/book4.webp", "/book3.webp"],
    autobiography: ["/book2.webp", "/book1.webp", "/book3.webp", "/book4.webp"],
    memoir: ["/book4.webp", "/book3.webp", "/book2.webp", "/book1.webp"],
  };

  const renderImages = () => {
    return imagesByCategory[activeCategory].map((book, index) => (
      <Image
        key={index}
        src={book}
        className="w-[80px] md:w-[250px] h-auto object-cover hover:scale-105 transition-transform duration-500"
        alt={`book-${index}`}
        width={250}
        height={350}
      />
    ));
  };

  return (
    <div className="bg-white w-full py-8 px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-[80%] mx-auto">
        {/* Categories */}
        <div className="md:bg-white md:shadow-lg md:rounded-tr-[60px] uppercase md:rounded-bl-[60px] w-[90%] mx-auto py-6 flex flex-wrap items-center justify-center gap-2 md:gap-10 mb-8">
          {["fiction", "nonfiction", "biography", "informative", "autobiography", "memoir"].map(
            (category) => (
              <div
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`cursor-pointer text-sm md:text-base  font-bold  ${activeCategory === category ? "md:bg-blue hover:bg-secondary md:text-white md:px-10 md:py-4  md:rounded-tr-[60px] md:rounded-bl-[60px]" : "text-secondary"}`}
              >
                <h1>{category.replace(/([a-z])([A-Z])/g, '$1 $2')}</h1>
                {activeCategory === category && (
                  <div className="w-20 h-[3px] rounded bg-[#4F389D] md:hidden block mx-auto mt-1"></div>
                )}
              </div>
            )
          )}
        </div>

        {/* Render images based on the selected category */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {renderImages()}
        </div>
      </div>
    </div>
  );
};

export default Books;








