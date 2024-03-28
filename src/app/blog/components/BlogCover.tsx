
const BlogCover = ({ coverUrl }: { coverUrl: string }) => {

  return (
    <img
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
