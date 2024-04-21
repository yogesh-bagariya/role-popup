import React from "react";
import './toggleStyles.css';

const ToggleBtn = ({isToggle, setIsToggle}) => {
  return (
    <div className="toggle">
      <input type="checkbox" id="toggle-btn" checked={isToggle} onChange={() => {
        setIsToggle((prev) => {
            return !prev;
        })
      }}/>
      <label htmlFor="toggle-btn"></label>
    </div>
  );
};

export default ToggleBtn;
