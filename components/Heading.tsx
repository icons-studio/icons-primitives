import React from 'react';

type HeadingProps = {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

const HeadingComponents = {
  '1': 'h1',
  '2': 'h2',
  '3': 'h3',
  '4': 'h4',
  '5': 'h5',
  '6': 'h6',
} as const;

const defaultClasses = {
  '1': 'text-4xl',
  '2': 'text-3xl',
  '3': 'text-2xl',
  '4': 'text-xl',
  '5': 'text-lg',
  '6': 'text-base',
} as const;

export const Heading: React.FC<HeadingProps> = ({ level, children, className = '', ...props }) => {
  const Component = HeadingComponents[level];
  const defaultClass = defaultClasses[level];
  return <Component className={`${defaultClass} ${className}`} {...props}>{children}</Component>;
};

