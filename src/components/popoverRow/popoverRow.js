import React, { useState } from "react";
import CloseIcon from "../../assets/closeIcon";
import Dropdown from "../dropdown/dropdown";
import { GroupType, UserType } from "../popover/util";
import "./popoverRowStyles.css";

const PopoverRow = ({
  id,
  inputText,
  userType,
  groupValue,
  handleInputChange,
  handleDropdownChange,
  singleValue,
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="each-row flex-row center-align space-between-justify">
      <input
        type="text"
        placeholder="Type email"
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        value={inputText}
        onChange={(e) => {
          console.log("here");
          handleInputChange(id, e.target.value);
        }}
      />
      {isHover && (
        <span
          className="abs-input p-4"
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
          onClick={() => {
            handleInputChange(id, "");
          }}
        >
          <CloseIcon />
        </span>
      )}
      {singleValue ? (
        <div className="single-value p-4">{userType}</div>
      ) : (
        <Dropdown
        key={`${id}${userType}`}
          list={UserType}
          handleOptionClick={(val) => {
            handleDropdownChange(id, "userType", val);
          }}
          selectedOption={userType}
        />
      )}
      {singleValue ? (
        <div className="single-value p-4">{groupValue}</div>
      ) : (
        <Dropdown
        key={`${id}${groupValue}`}
          list={GroupType}
          handleOptionClick={(val) => {
            handleDropdownChange(id, "group", val);
          }}
          selectedOption={groupValue}
        />
      )}
    </div>
  );
};

export default PopoverRow;
