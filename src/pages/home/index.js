import { Fragment, useState } from "react";
import HeroSection from "../../components/herosection";
import { Col, Container, Row } from "react-bootstrap";
import FeaturedBrands from "../../components/featuredbrands";
import Categories from "../../components/categories";
import SingleProductHome from "../../components/singleProductHome";
import DiscoverBanner from "../../components/discoverBanner";
import BestSellerProduct from "../../components/bestSellerProduct";
import BrandSlider from "../../components/brandSlider";
import styles from "./style.module.css";
import SectionHeading from "../../components/sectionHeading";
import Button from "../../components/button";
import CategoryProductCard from "../../components/categoryProductCard";
import pimage1 from "../../assets/images/mobile-image-01.png";
import pimage2 from "../../assets/images/mobile-image-02.png";
import pimage3 from "../../assets/images/mobile-image-03.png";
import pimage4 from "../../assets/images/mobile-image-04.png";
import pimage5 from "../../assets/images/mobile-image-05.png";
import pimage6 from "../../assets/images/mobile-image-06.png";
import ProductCard from "../../components/productCard";
import pcimage1 from "../../assets/images/pc-img-01.png";
import pcimage2 from "../../assets/images/pc-img-02.png";
import pcimage3 from "../../assets/images/pc-img-03.png";
import pcimage4 from "../../assets/images/pc-img-04.png";
import pcimage5 from "../../assets/images/pc-img-05.png";
import pcimage6 from "../../assets/images/pc-img-06.png";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import CategoryCard from "../../components/categoryCard";
import speakerImg from "../../assets/images/speaker.png";
import gamingMouseImg from "../../assets/images/gaming-mouse.png";
import projectorImg from "../../assets/images/projector.png";
import Speakersmall from "../../assets/images/Speaker-small.png";
import Dslr from "../../assets/images/dslr.png";
import Earbuds from "../../assets/images/Earbuds.png";
import Microphone from "../../assets/images/Microphone.png";
import Monitor from "../../assets/images/Monitors.png";
import chair from "../../assets/images/Chair.png";
import Controller from "../../assets/images/Controller.png";
import Keyboard from "../../assets/images/Keyboards.png";
import Printer from "../../assets/images/Printers.png";
import Network from "../../assets/images/Network.png";
import Security from "../../assets/images/Security.png";
import Projector from "../../assets/images/Projectors-small.png";
import orangeSofa from "../../assets/images/orange-sofa.png";
import RecentlyViewed from "../../components/recentlyViewed";
import viewimg1 from "../../assets/images/xomie-watch.png";
import AllProductsData from "../../jsonData/allProductsData.json";

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
  {
    imageUrl: pimage6,
    title: "Accessories",
    count: "29 Items",
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
  {
    imageUrl: pcimage6,
    title: "Secondhand",
    count: "16 Items",
  },
];

const audioItems = [
  { image: Speakersmall, name: "Speaker", count: 12 },
  { image: Dslr, name: "DSLR Camera", count: 9 },
  { image: Earbuds, name: "Earbuds", count: 5 },
  {
    image: Microphone,
    name: "Microphone",
    count: 12,
  },
];

const gamingItems = [
  { image: Monitor, name: "Monitors", count: 28 },
  { image: chair, name: "Chair", count: 12 },
  { image: Controller, name: "Controller", count: 9 },
  { image: Keyboard, name: "Keyboards", count: 30 },
];

const officeItems = [
  { image: Printer, name: "Printers", count: 9 },
  { image: Network, name: "Network", count: 90 },
  { image: Security, name: "Security", count: 12 },
  { image: Projector, name: "Projectors", count: 12 },
];

const itemsData = [
  {
    items: [
      {
        image: viewimg1,
        name: "Xomie Remid 8 Sport Water Resistance Watch",
        price: "$579.00",
        label: "NEW",
      },
    ],
  },
  {
    items: [
      {
        image: viewimg1,
        name: "Xomie Remid 8 Sport Water Resistance Watch",
        price: "$579.00",
        label: "NEW",
      },
    ],
  },
  {
    items: [
      {
        image: viewimg1,
        name: "Xomie Remid 8 Sport Water Resistance Watch",
        price: "$579.00",
        label: "NEW",
      },
    ],
  },
  {
    items: [
      {
        image: viewimg1,
        name: "Xomie Remid 8 Sport Water Resistance Watch",
        price: "$579.00",
        label: "NEW",
      },
    ],
  },
  {
    items: [
      {
        image: viewimg1,
        name: "Xomie Remid 8 Sport Water Resistance Watch",
        price: "$579.00",
        label: "NEW",
      },
    ],
  },
];

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState("Smartphone");


  const Smartphone = AllProductsData.filter((item) =>
    selectedBrand === "Smartphone"
      ? item.category === "Smartphone"
      : item.brand === selectedBrand
  );
  const filteredCategories = AllProductsData.filter(
    (item) =>
      item.category === "Laptop" ||
      item.category === "Mouse" ||
      item.category === "Tablet" ||
      item.category === "Desktop"
  );

  return (
    <Fragment>
      <HeroSection />
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} xs={12}>
            <FeaturedBrands />
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <Categories />
          </Col>
        </Row>
      </Container>

      <SingleProductHome />

      <Container>
        <Row>
          <Col lg={12}>
            <DiscoverBanner />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <BestSellerProduct />
          </Col>
        </Row>
      </Container>

      <BrandSlider />

      <Container>
        <Row>
          <Col lg={12}>
            <div className={`${styles.tp_box}`}>
              <SectionHeading
                title="Top Cellphones & Tablets"
                buttonLabel="View All"
              />
              <Row>
                <Col lg={6}>
                  <div className={`${styles.tp_box_left}`}>
                    <div className={`${styles.tpb_content}`}>
                      <h5>
                        redmi note
                        <br /> 12 Pro+ 5g
                      </h5>
                      <p>Rise to the challenge</p>
                      <Button text={"SHOP NOW"} type={"fill"} />
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${styles.cp_card}`}>
                    {CategoryProductCardData.map((phone, index) => (
                      <Col lg={4} key={index}>
                        <CategoryProductCard
                          onClick={() => {
                            setSelectedBrand(phone.title);
                          }}
                          imageUrl={phone.imageUrl}
                          title={phone.title}
                          count={phone.count}
                        />
                      </Col>
                    ))}
                  </div>
                </Col>
              </Row>
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
                  {Smartphone.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard product={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <div className={`${styles.tp_box}`}>
              <SectionHeading
                title="Best Laptops & Computers"
                buttonLabel="View All"
              />
              <Row>
                <Col lg={6}>
                  <div className={`${styles.pc_box_left}`}>
                    <div className={`${styles.pcb_content}`}>
                      <h5>
                        Mobok 2
                        <br /> Superchard
                        <br />
                        <span>By M2</span>
                      </h5>
                      <p>
                        Start from <span>$1,199</span>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg={6}>
                  <div className={`${styles.cp_card}`}>
                    {CategoryProductCardData2.map((phone, index) => (
                      <Col lg={4} key={index}>
                        <CategoryProductCard
                          imageUrl={phone.imageUrl}
                          title={phone.title}
                          count={phone.count}
                        />
                      </Col>
                    ))}
                  </div>
                </Col>
              </Row>
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
                  {filteredCategories.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ProductCard product={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <div className={`${styles.banner3boxes}`}>
            <Col lg={4} md={4} sm={12} xs={12}>
              <CategoryCard
                title={
                  <SectionHeading
                    title="Audios & Cameras"
                    buttonLabel="View All"
                  />
                }
                imageSrc={speakerImg}
                imageAlt="Best Speaker 2023"
                items={audioItems}
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <CategoryCard
                title={<SectionHeading title="GAMING" buttonLabel="View All" />}
                imageSrc={gamingMouseImg}
                imageAlt="Wireless RGB Gaming Mouse"
                items={gamingItems}
              />
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <CategoryCard
                title={
                  <SectionHeading
                    title="OFFICE EQUIPMENTS"
                    buttonLabel="View All"
                  />
                }
                imageSrc={projectorImg}
                imageAlt="Laser Projector"
                items={officeItems}
              />
            </Col>
          </div>
        </Row>
      </Container>

      <Container>
        <Row className="justify-content-center">
          <div className={`${styles.bannerboxes}`}>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={`${styles.massage_chair}`}>
                <h6>
                  massage chair <br />
                  Luxury
                </h6>
                <p>
                  Fuka Relax Full Body
                  <br /> Massage Chair
                </p>
                <br />
                <Button text={"Shop Now"} type={"fill"} />
                <img src={orangeSofa} alt="sofa" />
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <div className={`${styles.Download_app}`}>
                <div className={`${styles.texts}`}>
                  <p className={`${styles.text1}`}>
                    Download
                    <br /> our app
                  </p>
                  <p className={`${styles.text2}`}>
                    Enter your phone number and we'll <br />
                    send you a download link.
                  </p>
                </div>
                <div className={`${styles.inputbtn}`}>
                  <input
                    type="number"
                    placeholder="(+xx) xxx..."
                    className={styles.no_spinner}
                  />
                  <Button text={"send link"} type={"text"} />
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.recentlyViewed}>
              <SectionHeading
                title="your recently viewed"
                buttonLabel="View All"
              />
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
                {itemsData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <RecentlyViewed items={item.items} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={12}>
            <div className={styles.marketplace}>
              <h5>Swoo – #1 Online Marketplace for technology</h5>
              <p className={styles.marketplacep1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vitae posuere mi. Quisque iaculis dignissim scelerisque. Morbi
                condimentum sagittis leo vitae tempor.
                <br /> Suspendisse in dolor odio. Sed aliquet ac lacus ut
                luctus. Fusce mattis sollicitudin sem, id lobortis nibh
                ullamcorper a. Donec vehicula dolor et arcu consequat mattis.
                <br />
                Fusce mattis nec nulla in scelerisque.
              </p>
              <p className={styles.marketplacep2}>
                Morbi pharetra sem mauris, nec aliquet ipsum vestibulum
                suscipit. Curabitur non euismod dui. Proin eget justo eu erat
                luctus placerat. Nam rhoncus ipsum ac enim faucibus, at
                consequat <br /> ante maximus. Vestibulum at nibh ac odio
                ultrices varius. Duis vitae libero mollis, lobortis ligula id,
                varius erat. Sed id odio dictum, laoreet enim ac, commodo magna.
                Praesent sodales porttitor <br /> maximus. Sed a lacus felis.
                Maecenas consectetur consequat orci scelerisque malesuada. Fusce
                vel orci eu tortor consequat mattis quis at ante. Class aptent
                taciti sociosqu ad litora <br /> torquent per conubi,
              </p>
              <Button text={"View All"} type={"text"} />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
