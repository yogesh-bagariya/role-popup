import React, { useCallback, useMemo, useState } from "react";
import Dropdown from "../dropdown/dropdown";
import PopoverRow from "../popoverRow/popoverRow";
import ToggleBtn from "../toggle/toggle";
import "./popoverStyles.css";
import DummyData, { GroupType, UserType } from "./util";

const Popover = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [tableData, setTableData] = useState(DummyData);
  const [allUserType, setAllUserType] = useState("guest");
  const [allGroupType, setAllGroupType] = useState("Group A");

  const handleUserChange = (value) => {
    setAllUserType(value);
    changeAllUser(value);
  };

  const handleGroupChange = (value) => {
    setAllGroupType(value);
    changeAllGroup(value);

  };

  const handleInputChange = (id, value) => {
    console.log("id", id);
    console.log("value", value);
    setTableData((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], email: value },
    }));
  };

  const handleDropdownChange = (id, dropdownType, value) => {
    setTableData((prevData) => ({
      ...prevData,
      [id]: { ...prevData[id], [dropdownType]: value },
    }));
  };

  const disableBtn = useMemo(() => {
    let disable = false;
    Object.keys(tableData).forEach((val) => {
      if (tableData[val].email?.length === 0) {
        disable = true;
      } 
    });
    return disable;
  }, [tableData]);


  const changeAllUser = useCallback((value) => {
    setTableData((prev) => {
      const newObj = {};
      Object.keys(prev).forEach((idNum) => {
        newObj[idNum] = { ...prev[idNum], userType: value };
      });
      return newObj;
    });
  }, []);

  const changeAllGroup = useCallback((value) => {
    console.log("in all change", value);
    setTableData((prev) => {
      const newObj = {};
      Object.keys(prev).forEach((idNum) => {
        newObj[idNum] = { ...prev[idNum], group: value };
      });
      return newObj;
    });
  }, []);

  return (
    <div className="popover-container flex-col p-16">
      <div className="header flex-col">
        <div className="heading-text">Select Role</div>
        <div className="header-bottom flex-row space-between-justify">
          <div className="subtext-wrapper flex-row center-align">
            <div className="sub-text">Custom Roles and Groups</div>
            <ToggleBtn toggle={isToggle} setIsToggle={setIsToggle} />
          </div>
          {isToggle && (
            <div className="dropdown-wrapper flex-row">
              <Dropdown
                list={UserType}
                handleOptionClick={handleUserChange}
                selectedOption={allUserType}
                defaultValue={"guest"}
              />
              <Dropdown
                list={GroupType}
                handleOptionClick={handleGroupChange}
                selectedOption={allGroupType}
                defaultValue={"Group A"}
              />
            </div>
          )}
        </div>
      </div>
      <div className="table flex-col">
        <div className="table-head flex-row">
          <div className="table-head-text">EMAIL</div>
          <div className="table-head-text">ROLE</div>
          <div className="table-head-text">GROUP</div>
        </div>
        <div className="table-body flex-col">
          {Object.keys(tableData).map((key) => {
            return (
              <PopoverRow
                key={key}
                id={key}
                userType={tableData[key].userType}
                groupValue={tableData[key].group}
                inputText={tableData[key].email}
                handleInputChange={handleInputChange}
                handleDropdownChange={handleDropdownChange}
                singleValue={isToggle}
              />
            );
          })}
        </div>
      </div>
      <div className="footer flex-row flex-end">
        <button
          className={`btn-submit ${disableBtn ? 'disable': ''}`}
          onClick={() => {
            console.log("submit button clicked!");
          }}
          disabled={disableBtn}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Popover;
