import React, { Fragment } from "react";
import Button from "../button";
import BrandLogo1 from "../../assets/images/brand-logo-1.png";
import BrandLogo2 from "../../assets/images/brand-logo-2.png";
import BrandLogo3 from "../../assets/images/brand-logo-3.png";
import BrandLogo4 from "../../assets/images/brand-logo-4.png";
import BrandLogo5 from "../../assets/images/brand-logo-5.png";
import BrandLogo6 from "../../assets/images/brand-logo-6.png";
import BrandLogo7 from "../../assets/images/brand-logo-7.png";
import BrandLogo8 from "../../assets/images/brand-logo-8.png";
import BrandLogo9 from "../../assets/images/brand-logo-9.png";
import BrandLogo10 from "../../assets/images/brand-logo-10.png";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const logoData = [
  {
    image: BrandLogo1,
  },
  {
    image: BrandLogo2,
  },
  {
    image: BrandLogo3,
  },
  {
    image: BrandLogo4,
  },
  {
    image: BrandLogo5,
  },
  {
    image: BrandLogo6,
  },
  {
    image: BrandLogo7,
  },
  {
    image: BrandLogo8,
  },
  {
    image: BrandLogo9,
  },
  {
    image: BrandLogo10,
  },
];

const FeaturedBrands = () => {
  return (
    <Fragment>
      <div className={`${styles.featuredBrands}`}>
        <div className={`${styles.fb_cont}`}>
          <h6 className={`${styles.fb_title}`}>FEATURED BRANDS</h6>
          <Button text={"View All "} />
        </div>
        <div className={`${styles.fb_logos}`}>
          {logoData.map((item, index) => (
            <Link to={item.link} key={index}>
              <img src={item.image} alt="" />
            </Link>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FeaturedBrands;
