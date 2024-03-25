import Image from "next/image";

const BlogCover = ({ coverUrl }: { coverUrl: string }) => {

  return (
    <Image
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
