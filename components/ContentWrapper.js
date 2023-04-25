import React from 'react';

const ContentWrapper = ({ children }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default ContentWrapper;
