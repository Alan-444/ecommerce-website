import React from "react";
import Button from "..//button";
import styles from "./style.module.css";

const SectionHeading = ({ title, buttonLabel, onButtonClick }) => {
  return (
    <div className={styles.headingContainer}>
      {title}
      {buttonLabel && (
        <Button
          className={styles.buttonStyle}
          onClick={onButtonClick}
          text={buttonLabel}
          buttonType={"text"}
        />
      )}
    </div>
  );
};

export default SectionHeading;
