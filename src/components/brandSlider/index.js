import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BrandCard from "../brandCard";
import Brandimg1 from "../../assets/images/brand-img-1.png";
import Brandimg2 from "../../assets/images/brand-img-2.png";
import Brandimg3 from "../../assets/images/brand-img-3.png";
import Brandimg4 from "../../assets/images/brand-img-4.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./style.module.css";

const cardsData = [
  {
    imageSrc: Brandimg1,
    altText: "Wireless Headphones",
    title: "Zumac Steel Computer Case",
    text: "And an option to upgrade every three years",
  },
  {
    imageSrc: Brandimg2,
    altText: "Wireless Headphones",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    text: "Limited time offer. Hurry up",
  },
  {
    imageSrc: Brandimg3,
    altText: "Wireless Headphones",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    text: "Limited time offer. Hurry up",
  },
  {
    imageSrc: Brandimg4,
    altText: "Wireless Headphones",
    title: "iPed Pro Mini 6 - Powerful l in hand",
    text: "From $19.99/month for 36 months. $280.35 final payment due in month 37",
  },
  {
    imageSrc: Brandimg1,
    altText: "Wireless Headphones",
    title: "Zumac Steel Computer Case",
    text: "And an option to upgrade every three years",
  },
  {
    imageSrc: Brandimg2,
    altText: "Wireless Headphones",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    text: "Limited time offer. Hurry up",
  },
  {
    imageSrc: Brandimg3,
    altText: "Wireless Headphones",
    title: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.",
    text: "Limited time offer. Hurry up",
  },
  {
    imageSrc: Brandimg4,
    altText: "Wireless Headphones",
    title: "iPed Pro Mini 6 - Powerful l in hand",
    text: "From $19.99/month for 36 months. $280.35 final payment due in month 37",
  },
];

const BrandSlider = () => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col lg={12}>
            <div className={`${styles.brandSlider}`}>
              <div className={`${styles.bs_title}`}>
                <h6>brand new for you</h6>
              </div>
              <div className={`${styles.bs_cards}`}>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  onInit={(swiper) => {
                    swiper.el.addEventListener("mouseenter", () => {
                      swiper.autoplay.stop();
                    });
                    swiper.el.addEventListener("mouseleave", () => {
                      swiper.autoplay.start();
                    });
                  }}
                  slidesPerView={4}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    640: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    1024: {
                      slidesPerView: 4,
                    },
                  }}
                  className={styles.customSwiper}
                  loop={true}
                >
                  {cardsData.map((card, index) => (
                    <SwiperSlide key={index}>
                      <BrandCard
                        imageSrc={card.imageSrc}
                        altText={card.altText}
                        title={card.title}
                        text={card.text}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default BrandSlider;
