/*
Al hacer fetch en el blog, el cover viene como un string o un objeto con la propiedad url
*/
'use client'
import { Image } from "@nextui-org/react";


interface Props {
  cover: string | { url: string };
}

const BlogCover: React.FC<Props> = ({ cover }) => {
  const coverUrl = typeof cover === 'string' ? cover : cover.url;


  return (<img
    src={coverUrl}
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover', 
      borderRadius: '20px'
    }} 
    alt="Post Cover"
  />);
};

export { BlogCover };
