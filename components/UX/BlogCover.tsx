import React from 'react';

interface Props {
  cover: string | { url: string };
  customClass?: string;
}

const PostCover: React.FC<Props> = ({ cover, customClass }) => {
  const coverUrl = typeof cover === 'string' ? cover : cover.url;

  return coverUrl ? (
    <img className={`${customClass}`} src={coverUrl} alt="Post Cover" />
  ) : null;
};

export default PostCover;
