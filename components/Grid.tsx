import React, { ReactNode } from "react";

interface GridProps {
  className?: string;
  children: ReactNode;
}

interface GridItemProps {
  className?: string;
  children: ReactNode;
}

interface GridType {
  Item: React.FC<GridItemProps>;
}

export const Grid: React.FC<GridProps> & GridType = ({ className = "", children }) => {
  return <div className={`grid ${className}`}>{children}</div>;
};

Grid.Item = ({ className = "", children }) => {
  return <div className={`${className}`}>{children}</div>;
};