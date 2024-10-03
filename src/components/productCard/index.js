import React from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    id,
    mainImage,
    additionalImages,
    name,
    rating,
    price,
    originalPrice,
    discount,
    status,
    stock,
  } = product;

  return (
    <div className={styles.productCard}>
      {discount && (
        <span className={styles.discountLabel}>
          SAVE <br />
          <span>${discount}</span>
        </span>
      )}
      <Link to={`/singleProduct/${id}`} className={styles.image}>
        <img src={mainImage} alt={name} />
      </Link>
      <div className={styles.details}>
        <div className={styles.rating}>{rating} </div>
        <Link to={`/singleProduct/${id}`}>
          <div className={styles.name}>{name}</div>
        </Link>
        <div className={styles.pricing}>
          <span className={styles.currentPrice}>${price}</span>
          <span className={styles.originalPrice}>{originalPrice}</span>
        </div>
        <div className={styles.offer_status}>
          {status.map((statusItem, index) => (
            <div key={index} className={styles.status}>
              {statusItem}
            </div>
          ))}
        </div>
        {stock.map((StockItem, index) => (
          <span className={styles.stockStatus} key={index}>
            {StockItem}
          </span>
        ))}
        <div className={styles.p_img}>
          {additionalImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
