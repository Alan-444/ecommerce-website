import React from "react";
import styles from "./style.module.css";

const RecentlyViewed = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <img src={item.image} alt={item.name} className={styles.image} />
          <div className={styles.details}>
            <span className={styles.labelNew}>{item.label}</span>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.price}>{item.price}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentlyViewed;
