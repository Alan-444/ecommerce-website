import React, { Fragment } from "react";
// import styles from "./style.module.css";
import OfferBar from "./offerbar";
import Navbar from "./nevbar";
import TopBar from "./topbar";
import Searchbar from "./searchbar";
import { Container, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <OfferBar />
      <Container>
        <Row>
          <TopBar />
          <Navbar />
          <Searchbar />
        </Row>
      </Container>
    </Fragment>
  );
};
export default Header;
