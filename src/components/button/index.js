import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Button = ({ buttonType, onClick, type, text, icon, to, subtype }) => {
  return buttonType === "btn" ? (
    <button
      onClick={onClick}
      type={subtype}
      className={`${styles.button} ${styles[type]} `}
    >
      {text}
      <span>{icon}</span>
    </button>
  ) : (
    <Link to={to} className={`${styles.button} ${styles[type]} `}>
      {text}
      <span>{icon}</span>
    </Link>
  );
};

export default Button;
