// Foto y título
// Se usa en el padre

import {Image} from "@nextui-org/react";

import React from 'react';

const Skill = ({ src, alt, label, url }) => (
  <div className="flex flex-col space-y-2 m-2" >
    <a className='skill-image ' href={url}> 
      <Image 
        isBlurred
        width={50} 
        height={50} 
        className="h-16 w-16" 
        src={src} 
        alt={alt} />
    </a>
    <p className="flex justify-center">{label}</p>

    {/* Animación de las cartas */}
    <style jsx>{`
    .skill-image {
        border-radius: 10px; /* Add this line */
        height: 100px;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;

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
