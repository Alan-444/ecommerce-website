import React, { Fragment } from "react";
import styles from "./style.module.css";
import { Container, Row } from "react-bootstrap";
import HeroCategory from "../herocategory";
import LaptopIcon from "../../icons/laptopIcon";
import ComputerIcon from "../../icons/computerIcon";
import CellphoneIcon from "../../icons/cellPhoneIcon";
import TabletIcon from "../../icons/tabletIcon";
import CameraIcon from "../../icons/cameraIcon";
import TelegramIcon from "../../icons/telegramIcon";
// import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/scrollbar";
// import "swiper/css/autoplay";

const heroCategoryData = [
  {
    icon: <LaptopIcon />,
    title: "Laptop",
    count: "1",
  },
  {
    icon: <ComputerIcon />,
    title: "PC & Computers",
    count: "2",
  },
  {
    icon: <CellphoneIcon />,
    title: "Cell Phones",
    count: "3",
  },
  {
    icon: <TabletIcon />,
    title: "Tablets",
    count: "4",
  },
  {
    icon: <CameraIcon />,
    title: "Cameras",
    count: "5",
  },
];

const HeroSection = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <div className={`${styles.heroSection}`}>
            <div className={`${styles.category}`}>
              <h5 className={`${styles.c_title}`}>Category</h5>
              {heroCategoryData.map((item, index) => (
                <HeroCategory
                  icon={item.icon}
                  title={item.title}
                  count={item.count}
                />
              ))}
            </div>

            <div className={`${styles.tabpanel}`}>
              <h1 className={`${styles.tp_heading}`}>
                Don’t miss amazing grocery deals
              </h1>
              <p> Sign up for the daily newsletter</p>
              <div className={`${styles.subscribe}`}>
                <TelegramIcon />
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default HeroSection;
