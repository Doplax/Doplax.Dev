// components/SkillSection.js
import React from 'react';

const SkillSection = ({ title, skills }) => (
  <div className="border drop-shadow-sm rounded-lg mb-10">
    <div className="divide-y-2">
      <div className="flex items-center px-6 py-4 text-xl">
        <p className="font-bold">{title}</p>
      </div>
      <div className="px-6 py-4 text-lg">
        <div className="hidden md:flex space-x-10">{skills}</div>
        <div className="grid grid-cols-2 md:hidden p-6 gap-12">{skills}</div>
      </div>
    </div>
  </div>
);

export default SkillSection;
