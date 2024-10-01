import React, { useContext } from "react";
import Button from "../../components/button";
import styles from "./style.module.css";
import CartItem from "../shoppingCartItem/cartItem";
import { CartContext } from "../../context/cartProvider";

const ShoppingCard = ({ onClose, isOpen }) => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const subtotal = cart.reduce(
    (stotle, item) => stotle + item.price * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <>
      <div className={styles.scOverlay} onClick={onClose}></div>
      <div className={`${isOpen ? styles.open : ""} ${styles.sc_box} `}>
        <h6 className={` ${styles.card_title}`}>
          Cart ({cart.length})
          <span>
            <button className={styles.close_button} onClick={onClose}>
              Close x
            </button>
          </span>
        </h6>
        <div className={styles.card_product}>
          {cart.map((value, index) => (
            <CartItem
              key={index}
              id={value.id}
              quantity={value.quantity}
              imgUrl={value.image}
              name={value.title}
              color={value.color}
              price={value.price}
              count={value.count}
              removeFromCart={removeFromCart}
              handleQuantityChange={handleQuantityChange}
            />
          ))}
        </div>
        <div className={styles.bottom_content}>
          <div className={`d-flex justify-content-between ${styles.subtotal}`}>
            <span>Subtotal</span>
            <h6>${subtotal.toFixed(2)}</h6>
          </div>
          <div className={`d-flex justify-content-between ${styles.total}`}>
            <span>Total</span>
            <h6>${total.toFixed(2)}</h6>
          </div>
          <div className={`${styles.checkout_btn}`}>
            <Button text={"Checkout"} type={"fill"} to={"/checkOut"} />
            {/* <div className={`${styles.checkCart_btn}`}> */}
            <Button text={"View Cart"} type={"textblack"} to={"/cart"} />
            {/* <Button
                text={"Clear Cart"}
                type={"textblack"}
                buttonType={"btn"}
                onClick={clearCart}
              /> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
