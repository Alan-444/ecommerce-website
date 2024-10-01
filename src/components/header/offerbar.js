import React, { Fragment } from "react";
import styles from "./style.module.css";
import DealTimer from "../dealtimer";

const OfferBar = () => {
  return (
    <Fragment>
      <div className={`${styles.offerbar}`}>
        <div className={`${styles.title}`}>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </div>
        <DealTimer />
      </div>
    </Fragment>
  );
};
export default OfferBar;
