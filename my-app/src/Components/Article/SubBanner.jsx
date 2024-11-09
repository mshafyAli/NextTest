



import React from 'react';
import { FaUsers, FaEdit, FaBriefcase, FaUserTie } from 'react-icons/fa';

export default function subBanner() {
  return (
    <div className='bg-grey'>
        <div className="md:w-[70%] w-full mx-auto flex   flex-col md:flex-row md:justify-between items-center justify-center gap-4 md:gap-0  p-6">
      {/* Feature Item */}
      <FeatureItem
        icon={<FaUsers className="text-green text-3xl" />}
        title="Guaranteed"
        subtitle="Excellence"
      />

      {/* Divider */}
      <Divider  />

      <FeatureItem
        icon={<FaEdit className="text-green text-3xl" />}
        title="Subject-specific"
        subtitle="Assistance"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaBriefcase className="text-green text-3xl" />}
        title="100% Reliable"
        subtitle="& Trustworthy"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaUserTie className="text-green text-3xl" />}
        title="2500+ Experts"
        subtitle="With Advanced Degrees"
      />
    </div>
    </div>
  );
}

function FeatureItem({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-6">
      <div className="mb-2">{icon}</div>
      <h3 className="text-blue font-bold text-lg">{title}</h3>
      <p className="text-secondary font-bold">{subtitle}</p>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block h-12 border-r border-secondary mx-4" />;
}

// import React from 'react';
// import { FaUsers, FaEdit, FaBriefcase, FaUserTie } from 'react-icons/fa';

// export default function SubBanner() {
//   return (
//     <div className='bg-grey'>
//       <div className="md:w-[80%] w-full mx-auto p-6">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
//           {/* Feature Item 1 */}
//           <FeatureItem
//             icon={<FaUsers className="text-green text-3xl" />}
//             title="100%"
//             subtitle="Plagiarism Removal"
//           />

//           {/* Divider for large screens */}
//           <Divider />

//           {/* Feature Item 2 */}
//           <FeatureItem
//             icon={<FaEdit className="text-green text-3xl" />}
//             title="10+ Years"
//             subtitle="Of Editing Experience"
//           />

//           {/* Divider for large screens */}
//           <Divider />

//           {/* Feature Item 3 */}
//           <FeatureItem
//             icon={<FaBriefcase className="text-green text-3xl" />}
//             title="24/7"
//             subtitle="Availability"
//           />

//           {/* Divider for large screens */}
//           <Divider />

//           {/* Feature Item 4 */}
//           <FeatureItem
//             icon={<FaUserTie className="text-green text-3xl" />}
//             title="2500+"
//             subtitle="Expert Editors"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// function FeatureItem({ icon, title, subtitle }) {
//   return (
//     <div className="flex flex-col items-center text-center px-4 md:px-6">
//       <div className="mb-2">{icon}</div>
//       <h3 className="text-blue font-bold text-lg">{title}</h3>
//       <p className="text-secondary font-bold">{subtitle}</p>
//     </div>
//   );
// }

// function Divider() {
//   return <div className="hidden md:block h-12 border-r border-secondary mx-4" />;
// }


