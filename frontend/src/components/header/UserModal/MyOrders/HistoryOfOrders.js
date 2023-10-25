import React from "react";
import Icon from "../../../../assets/img/zakazi.png";
import Basket from "../../../../assets/img/basket__icon.png";
import { CloseModal } from "../CloseМodal/CloseModal";
import Images from "../../../../assets/img/salat.png";

// !styles
import styles from "../UserModal.module.css";

const HistoryOfOrders = ({ setPersonalModal }) => {
  const HistoryOrdersPages = [
    {
      id: 0,
      img: Images,
      title: "Пицца мясной пир",
      price: 490,
    },
    {
      id: 1,
      img: Images,
      title: "Пивной набор Дружба",
      price: 650,
    },
    {
      id: 2,
      img: Images,
      title: "Циплёнок табака",
      price: 890,
    },
    {
      id: 3,
      img: Images,
      title: "Пицца мясной пир",
      price: 990,
    },
  ];

  return (
    <div className={styles.HistoryOfOrders}>
      <div className={styles.LIne}>
        <div className={styles.HistoryRow}>
          <div className={styles.iconBurgerTextRow}>
            <img className={styles.IconZakazi} src={Icon} alt="" />
            <h3>Мои заказы</h3>
          </div>
          <div className={styles.iconClose}>
            <CloseModal setPersonalModal={setPersonalModal} />
          </div>
        </div>
        <hr
          style={{
            border: "2px solid #D9D9D9",
            margin: "30px 0",
          }}
        />
      </div>
      <div className={styles.HistoryBlock}>
        <div className={styles.DataTotal}>
          <span className={styles.DataZakazi}>20.04.2023</span>
          <span className={styles.TotalZakazi}>4 290 руб.</span>
        </div>
        <div>
          <div className={styles.HistoryZakaziNameSum}>
            <div>
              {HistoryOrdersPages.map((item) => (
                <div className={styles.rowImgText}>
                  <img src={item.img} alt="" />
                  <div className={styles.HistoryRowOrder}>
                    <div className={styles.OrderTitle}>{item.title}</div>
                    <div className={styles.OrderPrice}>{item.price} руб.</div>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.ImagesBasket}>
              <img
                className={styles.HistoryOfOrdersBasket}
                src={Basket}
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
      <hr
        style={{
          border: "2px solid #D9D9D9",
          margin: "30px 0",
        }}
      />
    </div>
  );
};

export default HistoryOfOrders;
