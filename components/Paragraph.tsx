import React from 'react';

type ParagraphProps = {
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

export const Paragraph: React.FC<ParagraphProps> = ({ children, className, ...props }) => {
  return <p className={className} {...props}>{children}</p>;
};

