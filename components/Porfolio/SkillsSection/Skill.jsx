// components/Skill.js

import React from 'react';

const Skill = ({ src, alt, label }) => (
  <div className="flex flex-col space-y-2 m-4" >
    <div className='h-24 w-24 flex justify-center items-center skill-image'> 
      <img className="h-16 w-16" src={src} alt={alt} />
    </div>
    <p className="flex justify-center">{label}</p>

    <style jsx>{`
    .skill-image {
       border-radius: 10px; /* Add this line */

}
      .skill-image:hover {
        border-color: var(--yellow);
        box-shadow: 0px 0px 4px 2px var(--yellow);
        transform: scale(1.15);
        transition: transform 0.2s ease-in-out;
      }
    `}</style>
  </div>
);

export {Skill};
