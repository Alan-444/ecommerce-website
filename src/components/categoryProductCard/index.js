import React from "react";
import styles from "./style.module.css";

const CategoryProductCard = ({ imageUrl, title, count, onClick }) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <div className={styles.count}>{count} Items</div>
      </div>
      <div className={styles.imagebox}>
        <img src={imageUrl} alt="images" />
      </div>
    </div>
  );
};

export default CategoryProductCard;
