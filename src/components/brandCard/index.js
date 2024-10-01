import React from "react";
import Button from "../button";
import styles from "./style.module.css";

const Card = ({ imageSrc, altText, title, text, buttonText }) => {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={altText} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardText}>{text}</p>
        <Button text={"SHOP NOW"} type={"outline"} />
      </div>
    </div>
  );
};

export default Card;
