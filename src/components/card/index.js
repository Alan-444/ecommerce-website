import React from "react";
import styles from "./style.module.css";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../assets/images/tablet-img-1.png";
import Button from "../button";

const Card = () => {
  return (
    <Container>
      <Row>
        <div className={styles.card}>
          <Col lg={8}>
            <div className={styles.card1}>
              <div className={styles.c_product}>
                <div className={styles.cp_image}>
                  <img src={image1} alt="" />
                  <span>new</span>
                </div>
                <div className={styles.cp_content}>
                  <h6>SROK Smart Phone 128GB, Oled Retina</h6>
                  <p>$579.00</p>
                  <div className={styles.spdp_count}>
                    <button>-</button>
                    <input type="number" value={"1"} />
                    <button>+</button>
                  </div>
                  <div className={styles.cpc_free}>
                    <span>free shipping</span>
                    <span>free gift</span>
                  </div>
                  <div className={styles.spd_inStock}>
                    <span></span>
                    <span> In stock</span>
                  </div>
                </div>
              </div>
              <div className={styles.c_color}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.c_product}>
                <div className={styles.cp_image}>
                  <img src={image1} alt="" />
                  <span>new</span>
                </div>
                <div className={styles.cp_content}>
                  <h6>SROK Smart Phone 128GB, Oled Retina</h6>
                  <p>$579.00</p>
                  <div className={styles.spdp_count}>
                    <button>-</button>
                    <input type="number" value={"1"} />
                    <button>+</button>
                  </div>
                  <div className={styles.cpc_free}>
                    <span>free shipping</span>
                    <span>free gift</span>
                  </div>
                  <div className={styles.spd_inStock}>
                    <span></span>
                    <span> In stock</span>
                  </div>
                </div>
              </div>
              <div className={styles.c_color}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.c_product}>
                <div className={styles.cp_image}>
                  <img src={image1} alt="" />
                  <span>new</span>
                </div>
                <div className={styles.cp_content}>
                  <h6>SROK Smart Phone 128GB, Oled Retina</h6>
                  <p>$579.00</p>
                  <div className={styles.spdp_count}>
                    <button>-</button>
                    <input type="number" value={"1"} />
                    <button>+</button>
                  </div>
                  <div className={styles.cpc_free}>
                    <span>free shipping</span>
                    <span>free gift</span>
                  </div>
                  <div className={styles.spd_inStock}>
                    <span></span>
                    <span> In stock</span>
                  </div>
                </div>
              </div>
              <div className={styles.c_color}>
                <span></span>
                <span></span>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className={styles.orderSummary}>
              <h6>Order Summary</h6>
              <div className={styles.os_subTotal}>
                <span>Sub Total:</span>
                <span>$1,000.00</span>
              </div>
              <div className={styles.os_subTotal}>
                <span>Shpping estimate:</span>
                <span>$600.00</span>
              </div>{" "}
              <div className={styles.os_subTotal}>
                <span>Tax estimate:</span>
                <span>$137.00</span>
              </div>
              <div className={styles.orderTotal}>
                <span>Order total:</span>
                <span>$1,737.00</span>
              </div>
              <div className={styles.os_btn}>
                <Button title={"CHECKOUT"} />
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};
export default Card;
