import React, { useState } from "react";
import DownIcon from "../../assets/downIcon";
import UpIcon from "../../assets/upIcon";
import "./dropdown.css";

const Dropdown = ({ list, handleOptionClick, selectedOption, defaultValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle flex-row space-between-justify center-align p-4"
        onClick={toggleDropdown}
      >
        <div className="selected-option flex-row center-align">
          {selectedOption ? selectedOption : defaultValue}
        </div>
        {isOpen ? <DownIcon /> : <UpIcon />}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {list?.map((item, idx) => {
            return (
              <div
                className="dropdown-item p-4"
                onClick={() => {
                  handleOptionClick(item.value)
                  setIsOpen(false);
                }}
                key={idx}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
