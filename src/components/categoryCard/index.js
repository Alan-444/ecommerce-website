import React from "react";
import styles from "./style.module.css";

const CategoryCard = ({ btn, title, imageAlt, imageSrc, items }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <div className={styles.featuredItem}>
              <img src={imageSrc} alt={imageAlt} />
              
      </div>
      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <span>{item.count} Items</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCard;
