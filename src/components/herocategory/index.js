import React, { Fragment } from "react";
import styles from "./style.module.css";

const HeroCategory = ({ icon, title, count }) => {
  return (
    <Fragment>
      <div className={`${styles.heroCategory}`}>
        <div className={`${styles.icontitle}`}>
          <div className={`${styles.icon}`}>{icon}</div>
          <div className={`${styles.title}`}>{title}</div>
        </div>
        <div className={`${styles.count}`}>{count}</div>
      </div>
    </Fragment>
  );
};

export default HeroCategory;
