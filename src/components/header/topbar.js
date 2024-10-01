import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import HotlineIcon from "../../icons/hotlineIcon";
import SelectDropdown from "../selectDropdown";

const languageOptions = [
  { label: "English" },
  { label: "Hindi" },
  { label: "Spanish" },
  { label: "French" },
  { label: "German" },
];
const currencyOptions = [
  { label: "USD" },
  { label: "EUR" },
  { label: "INR" },
  { label: "GBP" },
];

const TopBar = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <div className={styles.topbar}>
            <div className={`${styles.t_helpline}`}>
              <span>
                <HotlineIcon />
                Hotline 24/7
              </span>
              <span>(025) 3886 25 16</span>
            </div>
            <div className={`${styles.t_right}`}>
              <Link to={"/"}>Sell on Swoo</Link>
              <Link to={"/"}>Order Tracki</Link>
              <div className={`${styles.selector}`}>
                <SelectDropdown options={currencyOptions} />|
                <SelectDropdown options={languageOptions} />
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default TopBar;
