import React, { useState } from "react";
import axios from "axios";
import styles from "./Garnish.module.css";
import "../../../assets/general-styles/styles.css";

const Card = ({ elem, basketItems, setBasketItems }) => {
  const [add, setAdd] = useState(false);
  const token = localStorage.getItem("token");

  function addToCart() {
    const token = sessionStorage.getItem("auth_token");

    const res = axios
      .post(
        `https://dali-khinkali.ru/api/goods/${Number(elem.id)}/shopping_cart/`,
        null,
        {
          headers: {
            authorization: `Token ${token}`,
          },
        }
      )
      .then((data) => {
        console.log(data);
        setBasketItems([
          ...basketItems,
          { goods: { ...elem, ...elem.all }, count: 1 },
        ]);
      })
      .catch((err) => console.log(err));

    setAdd(true);
  }

  return (
    <div className="CardContainer">
      <div className={styles.cardSalat} key={elem.id}>
        <div className="ImgField imgBeverage">
          <img className="image hoverBeverage" src={elem.src} alt="" />
        </div>
        <div className="cardTitle">{elem.title}</div>
        <div className={styles.BoxWeightSubTitle}>
          <div className="title">{elem.subtitle}</div>
          <span className="weight">{elem.weight}г</span>
        </div>
        <div className="btns">
          <p className="price">{elem.price} руб.</p>
          {add ? (
            <p className="goodCardAdd">✅ В корзине</p>
          ) : (
            <button
              className="btn"
              onClick={() =>
                token.length > 5
                  ? addToCart()
                  : alert("Пожалуйста зарегистрируйтесь!!")
              }
            >
              + В корзину
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
