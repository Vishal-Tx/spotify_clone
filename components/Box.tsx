import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Box;
