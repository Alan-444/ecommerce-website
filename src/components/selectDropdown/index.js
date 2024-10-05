import React, { useState } from "react";
import styles from "./style.module.css";

const SelectDropdown = ({ options = [], onChange }) => {
  const [selectedOption, setSelectedOption] = useState(
    options.length > 0 ? options[0].label : "Select an option"
  );
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    onChange(option.label);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        <span className={styles.selectedOption}>{selectedOption}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ""}`}>
          ▼
        </span>
      </div>

      {isOpen && (
        <ul className={styles.dropdownOptions}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className={styles.dropdownOption}
            >
              {option.icon && (
                <span className={styles.optionIcon}>{option.icon}</span>
              )}
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectDropdown;
