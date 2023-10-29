import React, { useEffect, useState } from "react";
import Icon from "../../../../assets/img/zakazi.png";
import Basket from "../../../../assets/img/basket__icon.png";
import { CloseModal } from "../CloseМodal/CloseModal";
import Images from "../../../../assets/img/salat.png";

// !styles
import styles from "../UserModal.module.css";
import { userApi } from "../../../../api/userApi";
import HistoryOrderItem from "./HistoryOrderItem";

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

  const [orderHistory, setOrderHistory] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    userApi.orderHistory(token).then((data) => setOrderHistory(data));
    console.log(orderHistory);


  }, [orderHistory.length]);

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
      {/* <HistoryOrderItem HistoryOrdersPages={HistoryOrdersPages} /> */}
      {/* <label>LOL</label> */}
      {orderHistory.map((el) => (
        <HistoryOrderItem
          HistoryOrdersPages={el.items}
          total_price={el.total_price}
          order_date={el.order_date}
        />
      ))}
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
