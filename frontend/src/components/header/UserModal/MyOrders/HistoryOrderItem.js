import React, { useEffect } from "react";
import Basket from "../../../../assets/img/basket__icon.png";
// !styles
import styles from "../UserModal.module.css";

const HistoryOrderItem = ({ HistoryOrdersPages, total_price, order_date }) => {
  useEffect(() => {
    console.log(HistoryOrdersPages);
  }, []);
  return (
    <div className={styles.HistoryBlock}>
      <div className={styles.DataTotal}>
        <span className={styles.DataZakazi}>{order_date.slice(0, 10)}</span>
        <span className={styles.TotalZakazi}>{total_price} руб.</span>
      </div>
      <div>
        <div className={styles.HistoryZakaziNameSum}>
          <div>
            {HistoryOrdersPages.map((item) => (
              <div className={styles.rowImgText}>
                <img
                  src={`http://127.0.0.1:8000/${item.goods.images[0].images}`}
                  alt=""
                />
                <div className={styles.HistoryRowOrder}>
                  <div className={styles.OrderTitle}>{item.goods.title}</div>
                  <div className={styles.OrderPrice}>{item.price} руб.</div>
                </div>
              </div>
            ))}
          </div>
          <button className={styles.ImagesBasket}>
            <img className={styles.HistoryOfOrdersBasket} src={Basket} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryOrderItem;
