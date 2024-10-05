import React, { Fragment, useRef } from "react";
import Button from "../button";
import ArrowLeftIcon from "../../icons/arrowLeftIcon";
import ArrowRightIcon from "../../icons/arrowRightIcon";
import prod1 from "../../assets/images/prod1.png";
import prod2 from "../../assets/images/prod2.png";
import prod3 from "../../assets/images/prod3.png";
import prod4 from "../../assets/images/prod4.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import CategoryData from "../../jsonData/categoryData.json";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const swiperRef = useRef(null);

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Fragment>
      <div className={`${styles.categories}`}>
        <div className={`${styles.c_top}`}>
          <div className={`${styles.c_title}`}>TOP CATEGORIES</div>
          <Button text={"View All"} />
          <div className={`${styles.arrow}`}>
            <button className={`${styles.prev}`} onClick={handlePrevClick}>
              <ArrowLeftIcon />
            </button>
            <button className={`${styles.next}`} onClick={handleNextClick}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className={`${styles.c_category}`}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className={styles.customSwiper}
            loop={true}
          >
            {CategoryData.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={item.to}
                  className={`${styles.category_box}`}
                  key={index}
                >
                  <img src={item.image} alt={item.title} />
                  <span className={`${styles.title}`}>{item.title}</span>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default Categories;
