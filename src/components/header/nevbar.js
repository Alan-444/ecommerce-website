import React, { useState } from "react";
import Logo from "../logo";
import MenuItem from "../menuItem";
import { Container, Row } from "react-bootstrap";
import WishListIcon from "../../icons/wishlistIcons";
import UserIcon from "../../icons/userIcon";
import ShoppingBagIcon from "../../icons/shoppingBagIcon";
import { Link } from "react-router-dom";
import ShoppingCard from "../shoppingCard/";
import styles from "./style.module.css";

const MenuItems = [
  {
    id: 1,
    title: "HOMES",
    path: "/home",
    children: [
      { id: 11, title: "Home 1", path: "/home1" },
      { id: 12, title: "Home 2", path: "/home2" },
      { id: 13, title: "Home 3", path: "/home3" },
    ],
  },
  {
    id: 2,
    title: "PAGES",
    path: "/page",
    children: [
      { id: 11, title: "About", path: "/about" },
      { id: 12, title: "PAGE 2", path: "/page2" },
      { id: 13, title: "PAGE 3", path: "/page3" },
    ],
  },
  {
    id: 3,
    title: "PRODUCTS ",
    path: "/product",
    children: [
      { id: 11, title: "PRODUCT 1", path: "/page1" },
      { id: 12, title: "PRODUCT 2", path: "/page2" },
      { id: 13, title: "PRODUCT 3", path: "/page3" },
    ],
  },
  { id: 4, title: "CONTACT", path: "/contact" },
];
const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    setIsCartOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
    document.body.style.overflow = "";
  };
  return (
    <Container>
      <Row className="align-items-center position-relative">
        <div className={styles.header_navbar}>
          <div className={`${styles.nevleft}`}>
            <div className={styles.hamlogo}>
              <Logo />
            </div>
            <div className={`${styles.menubar}`}>
              {MenuItems.map((item, index) => (
                <MenuItem key={index} item={item} />
              ))}
            </div>
          </div>
          <div className={`${styles.nevright}`}>
            <div className={`${styles.wishlist}`}>
              <div className={`${styles.wishlist_icon}`}>
                <WishListIcon />
              </div>
            </div>
            <div className={`${styles.userprofile}`}>
              <span className={`${styles.icon}`}>
                <Link to={"/profile"}>
                  <UserIcon />
                </Link>
              </span>
              <div className={`${styles.userwellcome}`}>
                <p>WELCOME</p>
                <p>
                  <Link to={"login"}>LOG IN </Link> /{" "}
                  <Link to={"/signUp"}> REGISTER</Link>
                </p>
              </div>
            </div>
            <div className={`${styles.cartsidebar}`}>
              <button className={`${styles.icon}`} onClick={handleCartOpen}>
                <ShoppingBagIcon />
                <span>5</span>
              </button>
              <div className={`${styles.cart}`}>
                <p>CART</p>
                <p>$1,689.00</p>
              </div>
            </div>
          </div>
        </div>
        {isCartOpen && (
          <ShoppingCard isOpen={isCartOpen} onClose={handleCartClose} />
        )}
      </Row>
    </Container>
  );
};

export default Navbar;
