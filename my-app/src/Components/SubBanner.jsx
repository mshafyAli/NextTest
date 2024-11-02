// import React from 'react'

// const subBanner = () => {
//   return (
//     <div className='bg-grey w-full h-[200px]'>

//     </div>
//   )
// }

// export default subBanner



import React from 'react';
import { FaUsers, FaEdit, FaBriefcase, FaUserTie } from 'react-icons/fa';

export default function subBanner() {
  return (
    <div className='bg-grey'>
        <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center  p-6">
      {/* Feature Item */}
      <FeatureItem
        icon={<FaUsers className="text-red-500 text-3xl" />}
        title="100%"
        subtitle="Plagiarism Removal"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaEdit className="text-red-500 text-3xl" />}
        title="10+ Years"
        subtitle="Of Editing Experience"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaBriefcase className="text-red-500 text-3xl" />}
        title="24/7"
        subtitle="Availability"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaUserTie className="text-red-500 text-3xl" />}
        title="2500+"
        subtitle="Expert Editors"
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
