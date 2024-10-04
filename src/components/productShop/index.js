import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../button";
import styles from "./stye.module.css";
import ArrowLeftIcon from "../../icons/arrowLeftIcon";
import ArrowRightIcon from "../../icons/arrowRightIcon";
import CategoryProductCard from "../categoryProductCard";
import pimage1 from "../../assets/images/mobile-image-01.png";
import pimage2 from "../../assets/images/mobile-image-02.png";
import pimage3 from "../../assets/images/mobile-image-03.png";
import pimage4 from "../../assets/images/mobile-image-04.png";
import pimage5 from "../../assets/images/mobile-image-05.png";
import pcimage1 from "../../assets/images/pc-img-01.png";
import pcimage2 from "../../assets/images/pc-img-02.png";
import pcimage3 from "../../assets/images/pc-img-03.png";
import pcimage4 from "../../assets/images/pc-img-04.png";
import pcimage5 from "../../assets/images/pc-img-05.png";
import { Link } from "react-router-dom";
import ProductCard from "../productCard";
import productimg2 from "../../assets/images/product-img-2.png";
import productimg3 from "../../assets/images/product-img-3.png";
import productimg4 from "../../assets/images/product-img-4.png";
import productimg5 from "../../assets/images/product-img-5.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import SectionHeading from "../sectionHeading";
import fbimg01 from "../../assets/images/fbimg01.png";
import fbimg02 from "../../assets/images/fbimg02.png";
import fbimg03 from "../../assets/images/fbimg03.png";
import fbimg04 from "../../assets/images/fbimg04.png";
import fbimg05 from "../../assets/images/fbimg05.png";
import MobileProduct from "../../jsonData/mobileProduct.json";
import SelectDropdown from "../selectDropdown";

const CategoryProductCardData = [
  {
    imageUrl: pimage1,
    title: "iPhone (iOS)",
    count: "74 Items",
  },
  {
    imageUrl: pimage2,
    title: "Android",
    count: "35 Items",
  },
  {
    imageUrl: pimage3,
    title: "5G Support",
    count: "12 Items",
  },
  {
    imageUrl: pimage4,
    title: "Gaming",
    count: "9 Items",
  },
  {
    imageUrl: pimage5,
    title: "Xiaomi",
    count: "52 Items",
  },
];

const CategoryProductCardData2 = [
  {
    imageUrl: pcimage1,
    title: "Macbook",
    count: "74 Items",
  },
  {
    imageUrl: pcimage2,
    title: "Gaming PC",
    count: "5 Items",
  },
  {
    imageUrl: pcimage3,
    title: "Laptop Office",
    count: "22 Items",
  },
  {
    imageUrl: pcimage4,
    title: "Laptop 15’’",
    count: "55 Items",
  },
  {
    imageUrl: pcimage5,
    title: "M1 2023",
    count: "32 Items",
  },
];

const productCardData = [
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
];
const shortingOptions = [
  { label: "Default" },
  { label: "A to Z" },
  { label: "Z to A" },
  { label: "Low to High" },
  { label: "High to Low" },
];

const ProductShop = () => {
  const [priceValueMin, setPriceValueMin] = useState(0);
  const [priceValueMax, setPriceValueMax] = useState(10000);
  const [rangeFilter, setrangeFilter] = useState(MobileProduct);
  const [sort, setSort] = useState(true);

  const filterrange = () => {
    const rFilter = MobileProduct.filter(
      (prod) => prod.price >= priceValueMin && prod.price <= priceValueMax
    );
    setrangeFilter(rFilter);
  };

  const handleRangeFilter = (range) => {
    setPriceValueMin(range);
    filterrange();
  };

  const handleSort = () => {
    const sorted = [...rangeFilter].sort((a, b) => {
      const priceA = parseFloat(a.price.replace(",", ""));
      const priceB = parseFloat(b.price.replace(",", ""));
      return priceA - priceB;
    });
    setrangeFilter(sorted);
  };

  return (
    
    <Fragment>
      <Container>
        <Row>
          <div className={styles.productShop_top}>
            <h6>top cell phones & tablets</h6>
            <div className={styles.slider_boxes}>
              <Col lg={8} md={12} sm={12} xs={12}>
                <div className={styles.sb_slider}>
                  <h2>
                    Noise Cancelling <br />
                    <span>Headphone</span>
                  </h2>
                  <ul>
                    <li>Boso Over-Ear Headphone</li>
                    <li>Wifi, Voice Assistant,</li>
                    <li>Low latency game mde</li>
                  </ul>
                  <Button text={"BUY NOW"} type={"fill"} />
                  <div className={styles.slider_controls}>
                    <span>
                      <ArrowLeftIcon />
                    </span>
                    <span>
                      <ArrowRightIcon />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12} xs={12}>
                <div className={`${styles.sb_banner}`}>
                  <div className={styles.banner_content}>
                    <h6>
                      redmi note 12
                      <br /> Pro+ 5g
                    </h6>
                    <span>
                      <Button
                        text={"SHOP NOW"}
                        type={"fill"}
                        buttonType={"btn"}
                      />
                    </span>
                  </div>
                  <small>Rise to the challenge</small>
                </div>
              </Col>
            </div>
          </div>
          <div className={styles.productShop_middle}>
            <h6>popular categories</h6>
            <div className={styles.pc_categories}>
              {CategoryProductCardData.map((phone, index) => (
                <Col sm={3} key={index}>
                  {" "}
                  <CategoryProductCard
                    imageUrl={phone.imageUrl}
                    title={phone.title}
                    count={phone.count}
                  />
                </Col>
              ))}
            </div>
            <div className={styles.pc_categories}>
              {CategoryProductCardData2.map((phone, index) => (
                <CategoryProductCard
                  key={index}
                  imageUrl={phone.imageUrl}
                  title={phone.title}
                  count={phone.count}
                />
              ))}
            </div>
          </div>
          <div className={styles.productShop_bottom}>
            <div className={styles.pb_inner1}>
              <Col lg={3} md={3} sm={3} xs={12}>
                <div className={styles.categories1}>
                  <h6>CATEGORIES</h6>
                  <span>
                    <Link to={"/"}>All Categories</Link>
                  </span>
                  <h6 className={styles.cpt}>Cell Phones & Tablets</h6>
                  <ul>
                    <Link to="">
                      <li>All</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Iphone</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Samsung</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Xiaomi</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Asus</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Oppo</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Gaming Smartphone</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Ipad</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Window Tablets</li>
                    </Link>{" "}
                    <Link to="">
                      <li>eReader</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Smartphone Chargers</li>
                    </Link>{" "}
                    <Link to="">
                      <li>5G Support Smartphone</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Smartphone Accessories</li>
                    </Link>
                    <Link to="">
                      <li>Tablets Accessories</li>
                    </Link>{" "}
                    <Link to="">
                      <li>Cell Phones</li>
                    </Link>{" "}
                  </ul>
                </div>
              </Col>
              <Col lg={9} md={9} sm={9} xs={12}>
                <div className={styles.pbi_slider}>
                  <h6>Best seller in this category</h6>
                  <div className={styles.slider}>
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
                        document
                          .querySelector(`.${styles.prev}`)
                          .addEventListener("click", () => {
                            swiper.slidePrev();
                          });
                        document
                          .querySelector(`.${styles.next}`)
                          .addEventListener("click", () => {
                            swiper.slideNext();
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
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 3,
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
                    <button className={styles.prev}>prev</button>
                    <button className={styles.next}>next</button>
                  </div>
                </div>
              </Col>
            </div>
            <div className={styles.pb_inner2}>
              <Col lg={3} md={3} sm={12} xs={12}>
                <div className={styles.categories2}>
                  <SectionHeading
                    title={"categories"}
                    buttonLabel={" Reset All"}
                  />
                  <div className={styles.c_span}>
                    <span>Min: $45.00 </span>
                    <span>10.9 inch </span>
                    <span>Color: Red </span>
                    <span>128GB </span>
                  </div>
                  <div className={styles.filter_brand}>
                    <strong>By Brandsh</strong>
                    <input
                      type="text"
                      name="brand"
                      className={styles.fb_input}
                    />
                    <div className={styles.fb_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <img src={fbimg01} alt="Brand 1" />
                      <span>(14)</span>
                    </div>
                    <div className={styles.fb_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <img src={fbimg02} alt="Brand 2" />
                      <span>(6)</span>
                    </div>
                    <div className={styles.fb_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <img src={fbimg03} alt="Brand 3" />
                      <span>(7)</span>
                    </div>
                    <div className={styles.fb_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <img src={fbimg04} alt="Brand 4" />
                      <span>(18)</span>
                    </div>
                    <div className={styles.fb_checkbox}>
                      <input type="checkbox" id="brand1" />
                      <img src={fbimg05} alt="Brand 5" />
                      <span>(1)</span>
                    </div>
                  </div>
                  <div className={styles.filter_price}>
                    <strong>By Price</strong>
                    <div className={styles.priceRange}>
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="10"
                        value={priceValueMin}
                        onChange={(e) => handleRangeFilter(e.target.value)}
                        className={styles.priceRangeMin}
                      />
                    </div>
                    <div className={styles.fp_inputs}>
                      <span>
                        $
                        <input
                          type="number"
                          value={priceValueMin}
                          onChange={(e) => setPriceValueMin(e.target.value)}
                          placeholder="0"
                        />
                      </span>
                      -
                      <span>
                        $
                        <input
                          type="number"
                          value={priceValueMax}
                          onChange={(e) => setPriceValueMax(e.target.value)}
                          placeholder="10000"
                        />
                      </span>
                      <span className={styles.bspan}>
                        <button onClick={filterrange}>Go</button>
                      </span>
                    </div>
                  </div>
                  <div className={styles.filter_rating}>
                    <strong>By Rating</strong>
                    <div className={styles.rating}>
                      <div className={styles.fr_checkbox}>
                        <input type="checkbox" id="brand1" />
                        <span className={styles.fr_stars}>★★★★★</span>
                        <span>(52)</span>
                      </div>
                      <div className={styles.fr_checkbox}>
                        <input type="checkbox" id="brand1" />
                        <span className={styles.fr_stars}>★★★★☆</span>
                        <span>(52)</span>
                      </div>
                      <div className={styles.fr_checkbox}>
                        <input type="checkbox" id="brand1" />
                        <span className={styles.fr_stars}>★★★☆☆</span>
                        <span>(52)</span>
                      </div>
                      <div className={styles.fr_checkbox}>
                        <input type="checkbox" id="brand1" />
                        <span className={styles.fr_stars}>★★☆☆☆</span>
                        <span>(52)</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.filter_screen}>
                    <strong>By Screen Size</strong>
                    <div className={styles.screen}>
                      <span>7” & Under</span>
                      <span>7.1” - 8.9”</span>
                      <span>9” - 10.9”</span>
                      <span>11” & Greater</span>
                    </div>
                  </div>
                  <div className={styles.filter_color}>
                    <strong>By Color</strong>
                    <div className={styles.color}>
                      <span className={styles.color1}></span>
                      <span className={styles.color2}></span>
                      <span className={styles.color3}></span>
                      <span className={styles.color4}></span>
                      <span className={styles.color5}></span>
                      <span className={styles.color6}></span>
                      <span className={styles.color7}></span>
                      <span className={styles.color8}></span>
                    </div>
                  </div>
                  <div className={styles.filter_memory}>
                    <strong>By Memory</strong>
                    <div className={styles.memory}>
                      <Col lg={6}>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            12GB <span>(4)</span>
                          </label>
                        </div>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            8GB <span>(3)</span>
                          </label>
                        </div>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            6GB <span>(12)</span>
                          </label>
                        </div>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            4GB <span>(6)</span>
                          </label>
                        </div>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            3GB <span>(7)</span>
                          </label>
                        </div>
                      </Col>
                      <Col lg={6}>
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            1.5GB <span>(1)</span>
                          </label>
                        </div>{" "}
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            1GB <span>(1)</span>
                          </label>
                        </div>{" "}
                        <div className={styles.memorys}>
                          <input type="checkbox" id="brand1" />
                          <label>
                            512MB <span>(2)</span>
                          </label>
                        </div>
                      </Col>
                    </div>
                  </div>
                  <div className={styles.filter_condition}>
                    <strong>By Condition</strong>
                    <div className={styles.conditions}>
                      <input type="checkbox" id="brand1" />
                      <label>
                        New <span>(21)</span>
                      </label>
                    </div>
                    <div className={styles.conditions}>
                      <input type="checkbox" id="brand1" />
                      <label>
                        Like New <span>(2)</span>
                      </label>
                    </div>
                    <div className={styles.conditions}>
                      <input type="checkbox" id="brand1" />
                      <label>
                        Open Box <span>(38)</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className={styles.addimg}>
                  <h6 className={styles.addimg_heading6}>
                    OKODo{" "}
                    <span>
                      hero 11+ <br />
                      5K wireless
                    </span>
                  </h6>
                  <p>FROM</p>
                  <h5 className={styles.addimg_heading5}>$169</h5>
                </div>
              </Col>
              <Col lg={9} md={9} sm={12} xs={12}>
                <div className={styles.pb_products}>
                  <div className={styles.product_topbar}>
                    <div className={styles.results}>
                      <strong>
                        1-40
                        <span className={styles.tb_span}>of 120 results</span>
                      </strong>
                    </div>
                    <div className={styles.itemnum}>
                      <span className={styles.tb_span}>Show item</span>
                      <div className={styles.itemnum_div}>
                        <Link to={"/"}>24</Link>
                        <Link to={"/"}>48</Link>
                        <Link to={"/"}>72</Link>
                      </div>
                    </div>
                    <div className={styles.itemOption}>
                      <span className={styles.tb_span}>Show item</span>
                      <div>
                        <SelectDropdown
                          options={shortingOptions}
                          onChange={handleSort}
                        />
                      </div>
                    </div>
                    <div className={styles.viewas}>
                      <span className={styles.tb_span}>view as</span>
                    </div>
                  </div>
                </div>
                <div className={styles.pb_products_list}>
                  {rangeFilter.map((item, index) => (
                    <Col lg={3} md={4} sm={6} xs={12} key={index}>
                      <ProductCard product={item} />
                    </Col>
                  ))}
                </div>
              </Col>
            </div>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default ProductShop;
