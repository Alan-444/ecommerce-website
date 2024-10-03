import React, { Fragment } from "react";
import Button from "../button";
import ArrowLeftIcon from "../../icons/arrowLeftIcon";
import ArrowRightIcon from "../../icons/arrowRightIcon";
import prod1 from "../../assets/images/prod1.png";
import prod2 from "../../assets/images/prod2.png";
import prod3 from "../../assets/images/prod3.png";
import prod4 from "../../assets/images/prod4.png";
import styles from "./style.module.css";

const categoriesdata = [
  {
    image: prod1,
    title: "Laptops",
  },
  {
    image: prod2,
    title: "PC Gaming",
  },
  {
    image: prod3,
    title: "Headphones",
  },
  {
    image: prod4,
    title: "Monitors",
  },
];

const Categories = () => {
  return (
    <Fragment>
      <div className={`${styles.categories}`}>
        <div className={`${styles.c_top}`}>
          <div className={`${styles.c_title}`}>TOP CATEGORIES</div>
          <Button text={"View All"} />
          <div className={`${styles.arrow}`}>
            <span>
              <ArrowLeftIcon />
            </span>
            <span>
              <ArrowRightIcon />
            </span>
          </div>
        </div>
        <div className={`${styles.c_category}`}>
          {categoriesdata.map((item, index) => (
            <div className={`${styles.category_box}`} key={index}>
              <img src={item.image} alt="" />
              <span className={`${styles.title}`}>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
