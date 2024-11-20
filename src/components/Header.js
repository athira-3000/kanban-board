import React, { useState } from "react";
import Icon from "./Icon"; // Ensure Icon component exists
import "./Header.css"; // Styling for header
import DisplayIcon from "../assets/Display.svg"; // Correct path to the SVG

const Header = ({ onGroupingChange, onSortingChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleButtonClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleGroupingOptionClick = (option) => {
    onGroupingChange(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  const handleSortingOptionClick = (option) => {
    onSortingChange(option);
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <header className="header">
      <div className="display-container">
        <button className="display-button" onClick={handleButtonClick}>
        <Icon src={DisplayIcon} alt="Display Icon" />
          Display  
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
                <div className="dropdown-title"><h4>Grouping</h4></div>
                <div className="dropdown-buttondiv"><button onClick={() => handleGroupingOptionClick("status")}>Status</button>
                <button onClick={() => handleGroupingOptionClick("user")}>User</button>
                <button onClick={() => handleGroupingOptionClick("priority")}>Priority</button>
                </div>
              
            </div>
            <div className="dropdown-item">
              
              <div className="dropdown-title"><h4>Ordering</h4></div>
              <div className="dropdown-buttondiv"><button onClick={() => handleGroupingOptionClick("status")}>Status</button>
              <button onClick={() => handleSortingOptionClick("priority")}>Priority</button>
              <button onClick={() => handleSortingOptionClick("title")}>Title</button>
                </div>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
