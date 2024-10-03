import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../../assets/images/login.png";
import styles from "./style.module.css";
import EyeIcon from "../../icons/eyeIcon";
import { Link } from "react-router-dom";

const Login = () => {
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
            <div className={styles.title}>Welcome Back</div>
            <div className={styles.sub_title}>login to continue</div>
            <form className={styles.form}>
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
                  placeholder="Enter Your Password"
                />
                <span>
                  <EyeIcon />
                </span>
              </div>

              <Link className={styles.forgot_password}>Forget Password ?</Link>

              <div className={styles.submit_btn}>
                <input type="button" name="submit" value="Login" />
              </div>
            </form>
            <div className={styles.sign_up}>
              new user ? <Link> Sign Up</Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
