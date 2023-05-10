import * as React from 'react';

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Flex: React.FC<FlexProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`flex ${className}`} {...props}>
      {children}
    </div>
  );
};

