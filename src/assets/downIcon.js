import React from "react";

const ChevronDown = ({height = '24', width = '24', color = "#76767E"}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeWidth={1.8}
      d="m16.67 9.998-4.667 4-4.667-4"
    />
  </svg>
);

export default ChevronDown
