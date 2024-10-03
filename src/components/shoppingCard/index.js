import React from "react";
import Button from "../../components/button";
import styles from "./style.module.css";
import CartItem from "../shoppingCartItem/cartItem";
import MobileProduct from "../../jsonData/mobileProduct.json";
import ComputerProduct from "../../jsonData/computerProduct.json";
import { useParams } from "react-router-dom";

const ShoppingCard = ({ onClose, isOpen }) => {
  const { id } = useParams();

  // Combine both Mobile and Computer products
  const product =
    MobileProduct.find((product) => product.id === parseInt(id)) ||
    ComputerProduct.find((product) => product.id === parseInt(id));

  // Handle empty product case
  if (!product) {
    return (
      <>
        <div className={styles.scOverlay} onClick={onClose}></div>
        <div className={`${isOpen ? styles.open : ""} ${styles.sc_box}`}>
          <h6 className={styles.card_title}>
            Cart is empty
            <span>
              <button className={styles.close_button} onClick={onClose}>
                Close x
              </button>
            </span>
          </h6>
        </div>
      </>
    );
  }

  // Calculate subtotal
  const subtotal = product.price * product.quantity;

  // Display cart items
  return (
    <>
      <div className={styles.scOverlay} onClick={onClose}></div>
      <div className={`${isOpen ? styles.open : ""} ${styles.sc_box}`}>
        <h6 className={styles.card_title}>
          Cart (1)
          <span>
            <button className={styles.close_button} onClick={onClose}>
              Close x
            </button>
          </span>
        </h6>
        <div className={styles.card_product}>
          <CartItem
            id={product.id}
            quantity={product.quantity}
            imgUrl={product.mainImage}
            name={product.name}
            color={product.color}
            price={product.price}
            count={product.count}
          />
        </div>
        <div className={styles.bottom_content}>
          <div className={`d-flex justify-content-between ${styles.subtotal}`}>
            <span>Subtotal</span>
            <h6>${subtotal.toFixed(2)}</h6>
          </div>
          <div className={`d-flex justify-content-between ${styles.total}`}>
            <span>Total</span>
            <h6>${subtotal.toFixed(2)}</h6>
          </div>
          <div className={styles.checkout_btn}>
            <Button text={"Checkout"} type={"fill"} to={"/checkOut"} />
            <Button text={"View Cart"} type={"textblack"} to={"/cart"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
