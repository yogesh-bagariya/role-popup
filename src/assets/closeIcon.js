import React from 'react';

const CloseIcon = ({
    width = '20',
    height = '20',
    color = '#1B1B1D',
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M6 18L18 6M6 6L18 18"
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default CloseIcon;
