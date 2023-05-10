import React from 'react';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container: React.FC<ContainerProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`max-w-screen-xl mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};