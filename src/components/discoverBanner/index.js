import React, { Fragment } from "react";
import Button from "../button";
import watchimg from "../../assets/images/watch-img.png";
import styles from "./style.module.css";

const DiscoverBanner = () => {
  return (
    <Fragment>
      <div className={`${styles.discoverBanner}`}>
        <div className={`${styles.preOrder}`}>
          <h6>PRE ORDER</h6>
          <small>BE THE FIRST TO OWN</small>
          <p>From $399</p>
        </div>
        <div className={`${styles.healthyLeap}`}>
          <small>
            Opplo Watch Sport
            <br /> Series 8
          </small>
          <h3>A healthy leap ahead</h3>
        </div>
        <Button text={"Discover Now"} type={"fillround"} />
        <img src={watchimg} alt="" />
      </div>
    </Fragment>
  );
};

export default DiscoverBanner;
