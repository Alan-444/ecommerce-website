import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

const CartItem = ({
  id,
  imgUrl,
  name,
  color,
  price,
  quantity,
  removeFromCart,
  handleQuantityChange,
}) => {
  const quantityChange = useCallback(
    (type) => {
      if (type === "min" && quantity > 1) {
        handleQuantityChange(id, quantity - 1);
      } else if (type === "plus") {
        handleQuantityChange(id, quantity + 1);
      } else {
        removeFromCart(id);
      }
    },
    [handleQuantityChange, id, quantity, removeFromCart]
  );

  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      handleQuantityChange(id, newQuantity);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.card_inner}>
        <Link to={"/singleProductpage"} className={styles.pci_box}>
          <img src={imgUrl} alt="product-img" />
        </Link>
        <div className={styles.product_info}>
          <h6 className={styles.pi_title}>{name}</h6>
          <div className={styles.pi_color}>Color: {color}</div>
          <div className={styles.counterContainer}>
            <button
              className={styles.counterButton}
              onClick={() => quantityChange("min")}
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleInputChange}
              className={styles.count}
              min="1"
            />
            <button
              className={styles.counterButton}
              onClick={() => quantityChange("plus")}
            >
              +
            </button>
          </div>
        </div>
        <div className={styles.price_close_icon}>
          <div className={styles.price}>${price}</div>
          <button
            className={styles.close_button}
            onClick={() => {
              removeFromCart(id);
            }}
          >
            x
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
