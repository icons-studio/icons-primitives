import React from 'react';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Section: React.FC<SectionProps> = ({ children, className = '', ...props }) => {
  return (
    <section className={className} {...props}>
      {children}
    </section>
  );
};