import * as React from 'react';

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Box: React.FC<BoxProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};