import * as React from 'react';

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Text: React.FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};