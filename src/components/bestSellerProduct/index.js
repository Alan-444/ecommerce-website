import React, { Fragment } from "react";
import Button from "../button";
import ProductCard from "../productCard";
import productimg1 from "../../assets/images/product-img-1.png";
import productimg2 from "../../assets/images/product-img-2.png";
import productimg3 from "../../assets/images/product-img-3.png";
import productimg4 from "../../assets/images/product-img-4.png";
import productimg5 from "../../assets/images/product-img-5.png";
import pimg1 from "../../assets/images/pimg1.png";
import pimg2 from "../../assets/images/pimg2.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import styles from "./style.module.css";

const productCardData = [
  {
    mainImage: productimg1,
    additionalImages: [pimg1, pimg2],
    name: "BOSO 2 Wireless On Ear Headphone",
    rating: "★★★★☆ (152)",
    price: "$359.00",
    status: ["FREE SHIPPING", "FREE GIFT"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg2,
    additionalImages: [""],
    name: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    rating: "★★★★☆ (152)",
    price: "569.00",
    originalPrice: "$759.00",
    discount: " 199.00",
    status: ["FREE SHIPPING"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg3,
    additionalImages: [""],
    name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    rating: "★★★★☆ (2)",
    price: "$1,729.00 ",
    originalPrice: "$2,119.00",
    discount: " 199.00",
    status: ["FREE SHIPPING"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg4,
    additionalImages: [""],
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$979.00 - $1,259.00",
    status: ["$2.98 SHIPPING"],
    stock: ["PRE - ORDER"],
  },
  {
    mainImage: productimg5,
    additionalImages: [""],
    rating: "★★★★☆ (9)",
    name: "iSmart 24V Charger",
    price: "$9.00 ",
    originalPrice: "$12.00",
    discount: " 3.00",
    status: ["$3.98 SHIPPING"],
    stock: ["Contact"],
  },
  {
    mainImage: productimg1,
    additionalImages: [pimg1, pimg2],
    name: "BOSO 2 Wireless On Ear Headphone",
    rating: "★★★★☆ (152)",
    price: "$359.00",
    status: ["FREE SHIPPING", "FREE GIFT"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg2,
    additionalImages: [""],
    name: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    rating: "★★★★☆ (152)",
    price: "569.00",
    originalPrice: "$759.00",
    discount: " 199.00",
    status: ["FREE SHIPPING"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg3,
    additionalImages: [""],
    name: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
    rating: "★★★★☆ (2)",
    price: "$1,729.00 ",
    originalPrice: "$2,119.00",
    discount: " 199.00",
    status: ["FREE SHIPPING"],
    stock: ["inStock"],
  },
  {
    mainImage: productimg4,
    additionalImages: [""],
    name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
    price: "$979.00 - $1,259.00",
    status: ["$2.98 SHIPPING"],
    stock: ["PRE - ORDER"],
  },
  {
    mainImage: productimg5,
    additionalImages: [""],
    rating: "★★★★☆ (9)",
    name: "iSmart 24V Charger",
    price: "$9.00 ",
    originalPrice: "$12.00",
    discount: " 3.00",
    status: ["$3.98 SHIPPING"],
    stock: ["Contact"],
  },
];

const BestSellerProduct = () => {
  return (
    <Fragment>
      <div className={styles.bs_Product}>
        <div className={styles.bsp_top}>
          <div className={styles.tablist}>
            <span>Best seller</span>
            <span>New in</span>
            <span>Popular</span>
          </div>
          <Button text={"View All"} />
        </div>
        <div className={styles.bsp_products}>
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
            slidesPerView={5}
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
                slidesPerView: 5,
              },
            }}
            className={styles.customSwiper}
            loop={true}
          >
            {productCardData.map((item, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Fragment>
  );
};

export default BestSellerProduct;
