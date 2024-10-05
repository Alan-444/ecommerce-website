import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import LocationIcon from "../../icons/locationIcon";
import SelectDropdown from "../../components/selectDropdown";
import SearchIcon from "../../icons/searchIcon";
import LocationData from "../deliverToAll";
import styles from "./style.module.css";

const Searchbar = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <div className={`${styles.searchbar}`}>
            <div className={`${styles.searchbar_inner}`}>
              <div className={`${styles.searchbox}`}>
                <div className={`${styles.input_grp}`}>
                  <input type="text" placeholder="Search anything..." />
                  <button>
                    <SearchIcon />
                  </button>
                </div>
              </div>
              <Link to={"/"}>free shipping over $199</Link>

              <Link to={"/"}>30 days money back</Link>

              <Link to={"/"}>100% secure payment</Link>
              <LocationData />
              {/* <div className={`${styles.deliver}`}>
                <Link to={"/"}>
                  <LocationIcon />
                </Link>
                <Link to={"/"}>
                  Deliver to <br className={styles.breckLine}/>
                  <span>all</span>
                </Link>
              </div> */}
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Searchbar;
