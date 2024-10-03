import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import productimg from "../../assets/images/mobile.png";
import smallimg1 from "../../assets/images/mobile1.png";
import smallimg2 from "../../assets/images/mobile2.png";
import smallimg3 from "../../assets/images/mobile3.png";
import smallimg4 from "../../assets/images/mobile4.png";
import sideimg1 from "../../assets/images/sideimg1.png";
import sideimg2 from "../../assets/images/sideimg2.png";
import sideimg3 from "../../assets/images/sideimg3.png";
import styles from "./style.module.css";

const SingleProductHome = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={9}>
            <div className={`${styles.dealofday}`}>Deals of the day</div>
            <div className={`${styles.productview}`}>
              <Col lg={6}>
                <div className={styles.imageGallery}>
                  <span className={styles.discountLabel}>
                    SAVE <br />
                    <span> $199.00</span>
                  </span>
                  <img src={productimg} alt="Product" />
                  <div className={`${styles.smallimg}`}>
                    <img src={smallimg1} alt="" />
                    <img src={smallimg2} alt="" />
                    <img src={smallimg3} alt="" />
                    <img src={smallimg4} alt="" />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.details}>
                  <h1>Xioma Redmi Note 11 Pro 256GB 2023, Black Smartphone</h1>
                  <div className={styles.pricing}>
                    <span className={styles.price}>$569.00</span>
                    <span className={styles.oldPrice}>$759.00</span>
                  </div>
                  <ul className={styles.features}>
                    <li>
                      Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                    </li>
                    <li>DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                    <li>
                      Commanding Power Design: Twin 16+1+2 Phases Digital VRM
                    </li>
                  </ul>
                  <div className={styles.shipping}>
                    <span>FREE SHIPPING</span>
                    <span>FREE GIFT</span>
                  </div>
                  <div className={styles.timer}>
                    <span>HURRY UP! PROMOTION WILL EXPIRES IN</span>
                    <div className={`${styles.timeout}`}>
                      <span className={`${styles.count}`}>
                        47 <span>d</span>
                      </span>
                      <span className={`${styles.count}`}>
                        06 <span>h</span>
                      </span>
                      <span className={`${styles.count}`}>
                        59 <span>m</span>
                      </span>
                      <span className={`${styles.count}`}>
                        59 <span>s</span>
                      </span>
                    </div>
                  </div>
                  <div className={styles.progress}>
                    <progress value="26" max="75"></progress>
                    <p>
                      Sold: <span>26/75</span>
                    </p>
                  </div>
                </div>
              </Col>
            </div>
          </Col>
          <Col lg={3}>
            <div className={`${styles.side_images}`}>
              <img src={sideimg1} alt="" />

              <img src={sideimg2} alt="" />

              <img src={sideimg3} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default SingleProductHome;
