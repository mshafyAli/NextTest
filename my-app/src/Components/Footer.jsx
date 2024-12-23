// "use client";

// import { useRouter } from "next/navigation";
// import { IoLogoWhatsapp, IoCall } from "react-icons/io5";
// import { CgMail } from "react-icons/cg";
// import Image from "next/image";

// const Footer = ({ aboutRef, contactRef }) => {
//   const router = useRouter();

//   const scrollToSection = (path, ref) => {
//     router.push(path);
//     setTimeout(() => {
//       if (ref && ref.current) {
//         ref.current.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 500); // Adjust delay if necessary
//   };

//   const scrollToTopAndNavigate = (path) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     router.push(path);
//   };

//   return (
//     <footer className="bg-primary text-white py-8 md:py-20 w-full mt-12">
//       <div className="w-[80%] mx-auto">
//         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left">
//           <div className="w-full md:w-1/4 mb-8 md:mb-0">
//             <div className="flex justify-center items-center md:-ml-10 ml-0">
//               <div>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/")}
//                   className="cursor-pointer"
//                 >
//                   <Image
//                     src="/ta-logo.png"
//                     alt="Logo"
//                     width="300"
//                     height="300"
//                     quality={60}
//                     priority
//                     className="w-[300px] h-auto "
//                   />
//                 </a>
//               </div>
//             </div>
//             <p className="mt-4 text-sm md:text-base">
//               We review your documents to ensure that all fonts, margins,
//               indentations, and other formatting elements are used consistently.
//               Our professional team strives to provide quality service and we
//               are ready to assist you.
//             </p>
//           </div>
//           <div className="w-full lg:w-1/6 md:w-1/5 mb-8 md:mb-0">
//             <h3 className="text-lg md:text-xl font-bold">Navigation</h3>
//             <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToSection("/#about-us", aboutRef)}
//                   className="cursor-pointer hover:underline"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToSection("/#contact-us", contactRef)}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/reviews")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Reviews
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full lg:w-1/5 md:w-1/4 mb-4 md:mb-0">
//             <h3 className="text-lg md:text-xl font-bold">Services</h3>
//             <ul className="mt-4 space-y-2 md:space-y-1 list-none md:list-disc list-inside">
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/assignment-help")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Assignment Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/essay-help")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Essay Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/coursework-help")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Coursework Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/dissertation-help")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Dissertation Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/exam-help")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Online Exam Help
//                 </a>
//               </li>
//               <li>
//                 <a
//                   onClick={() => scrollToTopAndNavigate("/research-proposal")}
//                   className="cursor-pointer hover:underline"
//                 >
//                   Research Help
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div className="w-full md:w-1/5">
//             <h3 className="text-lg md:text-xl font-bold mb-3">Get In Touch</h3>
//             <div className="flex flex-col items-center md:items-start">
//               <div className="">
//                 <a
//                   href="tel:+44 161 818 9341"
//                   className="flex items-center gap-2"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoCall />
//                   <h1 className="font-bold">Call Us</h1>
//                 </a>
//               </div>
//               <div className="">
//                 <a
//                   href={`https://wa.me/447397145697?text=${encodeURIComponent(
//                     "Hello The Academians, I want to inquire about your services please!"
//                   )}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-2"

//                 >
//                   <IoLogoWhatsapp />
//                   <h1 className="font-bold">Whatsapp</h1>
//                 </a>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// components/Footer.js
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-darkBlue w-full">
      <div className="md:w-[80%] w-[90%] mx-auto text-white pt-8 pb-20 md:pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly">
            {/* Contact Us */}
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-semibold">CONTACT US</h2>
              <div>
                <div>
                  Call Us:{" "}
                  <a href="tel:+442038852608" className="hover:underline">
                    +44 20 3885 2608
                  </a>
                </div>
                <div>
                  whatsapp Us:{" "}
                  <a
                    href={`https://wa.me/447456428217?text=${encodeURIComponent(
                      "I want to inquire about your services please!"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +44 74 5642 8217
                  </a>
                </div>
              </div>
              <p>
                <span>
                  Email Us:{" "}
                  <a
                    href="mailto:info@researchpublishinghouse.com"
                    className="hover:underline"
                  >
                    info@researchpublishinghouse.com
                  </a>
                </span>
              </p>

              <p>94 Islington High Street, N1 8EG, London, United Kindgom</p>
            </div>

            {/* Social Media */}
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-semibold">SOCIAL MEDIA</h2>
              <div className="flex space-x-4 mt-2 cursor-pointer">
                <a
                  href="https://www.facebook.com/researchpublishinghouse/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white text-2xl" />
                </a>
                {/* <a href="https://www.instagram.com/your-instagram-link/" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-white text-2xl" />
  </a>
  <a href="https://twitter.com/your-twitter-link" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="text-white text-2xl" />
  </a>
  <a href="https://www.linkedin.com/company/your-linkedin-link" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="text-white text-2xl" />
  </a>
  <a href="https://www.youtube.com/channel/your-youtube-link" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="text-white text-2xl" />
  </a> */}
              </div>
            </div>

            {/* Countries We Serve */}
            <div className="w-full md:w-[25%] hidden md:block mb-4">
              <h2 className="text-lg font-semibold">COUNTRIES WE SERVE</h2>
              <div className="grid grid-cols-7 mt-2">
                {/* Replace with actual flag images */}
                <Image
                  src="/United-Kingdom.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/United-States.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Canada.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/United-Arab-Emirates.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Australia.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Malaysia.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />

                <Image
                  src="/Germany.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />

                {/* Add more flags as needed */}
              </div>
              <div className="grid grid-cols-7 mt-2">
                {/* Replace with actual flag images */}
                <Image
                  src="/Saudi-Arabia.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Oman.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Qatar.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Turkey.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/China.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />
                <Image
                  src="/Japan.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />

                <Image
                  src="/India.webp"
                  alt="Logo"
                  width="35"
                  height="35"
                  quality={60}
                  priority
                  className=""
                />

                {/* Add more flags as needed */}
              </div>
            </div>
          </div>

          <hr className="border-gray-600 my-6 hidden md:block " />

          {/* Quick Links */}
          <div className="md:flex hidden flex-wrap justify-start space-x-4 text-sm">
            <Link href="/about-us" className="hover:underline">
              About Us
            </Link>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Why Choose Us
            </a>
            <a href="#" className="hover:underline">
              Our Blog
            </a>
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/term-and-condition" className="hover:underline">
              Terms & Conditions
            </Link>
            <a href="#" className="hover:underline">
              FAQs
            </a>
            <Link href="/reviews" className="hover:underline">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
