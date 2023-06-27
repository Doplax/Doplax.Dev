/*
Al hacer fetch en el blog, el cover viene como un string o un objeto con la propiedad url
*/

import React from 'react';

interface Props {
  cover: string | { url: string } ;
  customClass?: string;
}

const BlogCover: React.FC<Props> = ({ cover, customClass}) => {
  const coverUrl = typeof cover === 'string' ? cover : cover.url;
  console.log("COVER");
  console.log(coverUrl);
  return   (
    <img className={`${customClass}`} src={coverUrl} alt="Post Cover" />
  ) ;
};

export {BlogCover};
