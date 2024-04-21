import React from 'react';

const UpIcon = ({
    height = '24',
    width = '24',
    color = '#76767E',
}) => (
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
            d="m7.33 13.998 4.667-4 4.667 4"
        />
    </svg>
);
export default UpIcon;
