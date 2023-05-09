// components/Skill.js

import React from 'react';

const Skill = ({ src, alt, label }) => (
  <div className="flex flex-col space-y-2">
    <img className="h-20" src={src} alt={alt} />
    <p className="flex justify-center">{label}</p>
  </div>
);

export {Skill};
