









// import { Montserrat } from "next/font/google";
// import Script from "next/script"; 
// import "./globals.css";
// import Head from "next/head"; 
// import TawkToComponent from "@/Components/TawkToComponent";

// // Using 'swap' to optimize font loading behavior
// const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

// export const metadata = {
//   title: "Research Publishing House Services By Leading Experts",
//   description: "Need help with assignments? Pay someone to do your assignment for you. Get expert assistance, timely delivery, and high-quality work for any subject. Make your life easier today",
//   icons: {
//     icon: "/favicon.png", // path to your favicon in the public folder
//   },
// };



// export default function RootLayout({ children }) {
//   const gtmId = "GTM-TMWZ98XS"; // Ensure this is your correct GTM ID

//   return (
//     <html lang="en">
//       <Head>
//         <title>{metadata.title}</title>
//         <meta name="description" content={metadata.description} />
       
//         {/* Preload GTM script to optimize loading performance */}
//         <link
//           rel="preload"
//           href={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
//           as="script"
//         />
//       </Head>

//       <body className={montserrat.className}>
//         {/* Lazy load Google Tag Manager Script */}
//         <Script
//           id="google-tag-manager"
//           strategy="lazyOnload" // Lazy load GTM script to load after all resources are fully loaded
//           dangerouslySetInnerHTML={{
//             __html: `
//               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//               })(window,document,'script','dataLayer','${gtmId}');
//             `,
//           }}
//         />

//         {/* noscript fallback for GTM */}
//         <noscript
//           dangerouslySetInnerHTML={{
//             __html: `
//               <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
//               height="0" width="0" style="display:none;visibility:hidden"></iframe>
//             `,
//           }}
//         />

//         {children}

       
//         {/* <TawkToComponent /> */}
//       </body>
//     </html>
//   );
// }


import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Head from "next/head";
import TawkToComponent from "@/Components/TawkToComponent";

// Using 'swap' to optimize font loading behavior
const poppins = Poppins({ subsets: ["latin"], display: "swap", weight: ["400", "700"] });

export const metadata = {
  title: "Research Publishing House Services By Leading Experts",
  description: "Need help with assignments? Pay someone to do your assignment for you. Get expert assistance, timely delivery, and high-quality work for any subject. Make your life easier today",
  icons: {
    icon: "/favicon.png", // path to your favicon in the public folder
  },
};

export default function RootLayout({ children }) {
  // const gtmId = "GTM-TMWZ98XS"; 

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       
        {/* Preload GTM script to optimize loading performance */}
        {/* <link
          rel="preload"
          href={`https://www.googletagmanager.com/gtm.js?id=${gtmId}`}
          as="script"
        /> */}
      </Head>

      <body className={poppins.className}>
        {/* Lazy load Google Tag Manager Script */}
        {/* <Script
          id="google-tag-manager"
          strategy="lazyOnload" // Lazy load GTM script to load after all resources are fully loaded
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        /> */}

        {/* noscript fallback for GTM */}
        {/* <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        /> */}

        {children}

        <TawkToComponent />
      </body>
    </html>
  );
}

