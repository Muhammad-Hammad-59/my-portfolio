 
import React from "react";

const GridBackground = ({ className = "" }) => {
  return (
    <div 
      className={`absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-0 ${className}`}
    />
  );
};

export default GridBackground;
