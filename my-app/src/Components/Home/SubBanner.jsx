



import React from 'react';
import { FaUsers, FaEdit, FaBriefcase, FaUserTie } from 'react-icons/fa';

export default function subBanner() {
  return (
    <div className='bg-primary w-full'>
        <div className="md:w-[70%] w-full mx-auto flex   flex-col md:flex-row md:justify-between items-center justify-center gap-4 md:gap-0  p-6">
      {/* Feature Item */}
      <FeatureItem
        icon={<FaUsers className="text-green text-3xl" />}
        title="100% Journal"
        subtitle="Compliant Manuscripts"
      />

      {/* Divider */}
      <Divider  />

      <FeatureItem
        icon={<FaEdit className="text-green text-3xl" />}
        title="98% Successful"
        subtitle="Publication Rate"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaBriefcase className="text-green text-3xl" />}
        title="200+ Editors With"
        subtitle="Advanced Degrees"
      />

      {/* Divider */}
      <Divider />

      <FeatureItem
        icon={<FaUserTie className="text-green text-3xl" />}
        title="Research Publication In"
        subtitle="100+ Countries"
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




