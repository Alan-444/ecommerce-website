import React from "react";
// import Section from "../../components/section";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import TwitterIcon from "../../icons/twitterIcon";
import FacebookIcon from "../../icons/facebookIcon";
import InstagramIcon from "../../icons/instagramIcon";
import YoutubeIcon from "../../icons/youTubeIcon.js";
import PinterestIcon from "../../icons/pintresticon.js";
import img from "../../assets/images/contact-product-img.png";
import styles from "./style.module.css";

const Contact = () => {
  return (
    // <Section>
    <Container className={styles.bg_color}>
      <Row>
        <Col lg={12}>
          <div className={styles.contact_title}>ready to work with us</div>
        </Col>
      </Row>

      <Row>
        <Col lg={7}>
          <div className={styles.contact_box}>
            <div className={styles.title}>
              Contact us for all your questions and opinions
            </div>
            <form className={styles.form}>
              <div className={styles.name_input}>
                <div className={styles.form_input}>
                  <label htmlFor="fName">
                    First Name <span className={styles.lablestar}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="fName"
                    id="fName"
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div className={styles.form_input}>
                  <label htmlFor="lName">
                    Last Name <span className={styles.lablestar}>*</span>
                  </label>
                  <br />
                  <input
                    type="text"
                    name="lName"
                    id="lName"
                    placeholder="Enter Your Last Name"
                  />
                </div>
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
                <label htmlFor="number">Phone Number (Optional)</label>
                <br />
                <input
                  type="number"
                  name="number"
                  id="number"
                  placeholder="+1 0231 4554 452"
                />
              </div>

              <div className={styles.form_input}>
                <label htmlFor="region">
                  Country / Region <span className={styles.lablestar}>*</span>
                </label>
                <br />
                <select id="region">
                  <option>United States (US)</option>
                  <option>India</option>
                  <option>Nepal</option>
                  <option>bhutan</option>
                </select>
              </div>

              <div className={styles.form_input}>
                <label htmlFor="subject">Subject (Optional)</label>
                <br />
                <input type="text" name="subject" id="subject" />
              </div>

              <div className={styles.form_input}>
                <label htmlFor="textarea">Message</label>
                <br />
                <textarea id="textarea" rows={4}>
                  Note about your order, e.g. special note for delivery
                </textarea>
              </div>

              <div className={styles.form_input_checkbox}>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  I want to receive news and updates once in a while. By
                  submitting, I’m agreed to the{" "}
                  <Link to={"#"}>Terms & Conditons</Link>
                </label>
              </div>

              <div className={styles.submit_btn}>
                <input type="button" name="submit" value="send message" />
              </div>
            </form>
          </div>
        </Col>

        <Col lg={5}>
          <div className={styles.address_box}>
            <div className={styles.country_name}>
              united states (head quater)
            </div>
            <div className={styles.street_name}>
              152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16 <br />
              <Link to={"#"}>hello@swattechmart.com</Link>
            </div>

            <div className={styles.country_name}>united kingdom (branch) </div>
            <div className={styles.street_name}>
              12 Buckingham Rd, Thornthwaite, HG3 4TY, UK (+718) 895-5350 <br />
              <Link to={"#"}>contact@swattechmart.co.uk</Link>
            </div>
            <div className={styles.social_icons}>
              <div className={styles.icon}>
                <TwitterIcon />
              </div>
              <div className={styles.icon}>
                <FacebookIcon />
              </div>
              <div className={styles.icon}>
                <InstagramIcon />
              </div>
              <div className={styles.icon}>
                <YoutubeIcon />
              </div>
              <div className={styles.icon}>
                <PinterestIcon />
              </div>
            </div>
          </div>
          <div className={styles.product_img}>
            <img src={img} alt="product img" />
          </div>
        </Col>
      </Row>
      <Row>
        <div className={styles.map}>
          <iframe
            src="https://maps.app.goo.gl/AuatMx3puR24ZP4c8"
            title="W3Schools Free Online Web Tutorials"
            width="100%"
            height="300"
          ></iframe>
        </div>
      </Row>
    </Container>
    // </Section>
  );
};

export default Contact;
