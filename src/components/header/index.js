import React, { Fragment } from "react";
// import styles from "./style.module.css";
import OfferBar from "./offerbar";
import Navbar from "./nevbar";
import TopBar from "./topbar";
import Searchbar from "./searchbar";

const Header = () => {
  return (
    <Fragment>
      <OfferBar />
      <TopBar />
      <Navbar />
      <Searchbar />
    </Fragment>
  );
};
export default Header;
