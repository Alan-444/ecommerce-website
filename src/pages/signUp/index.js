import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/login.png";
import styles from "./style.module.css";
import EyeIcon from "../../icons/eyeIcon";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container>
      <Row className={styles.form_section}>
        <Col lg={6}>
          <div className={styles.login_img}>
            <img src={img1} alt="login img" />
          </div>
        </Col>
        <Col lg={6}>
          <div className={styles.login_box}>
            <div className={styles.title}>Register</div>
            <div className={styles.sub_title}>Join to us</div>
            <form className={styles.form}>
              <div className={styles.form_input}>
                <label htmlFor="name">Your name</label>
                <br />
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className={styles.form_input}>
                <label htmlFor="emailId">Email Address</label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="emailId"
                  placeholder="Enter Your Email"
                />
              </div>

              <div className={styles.form_input}>
                <label htmlFor="Password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Enter Password"
                />
                <span>
                  <EyeIcon />
                </span>
              </div>

              <div className={styles.form_input}>
                <label htmlFor="Con_Password">Confirm Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  id="Con_Password"
                  placeholder="Enter Confirm Password"
                />
                <span>
                  <EyeIcon />
                </span>
              </div>

              <div className={styles.submit_btn}>
                <input type="button" name="submit" value="Register" />
              </div>
            </form>
            <div className={styles.sign_up}>
              already user ? <Link> Login</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
