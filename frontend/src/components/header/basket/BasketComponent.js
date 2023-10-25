import React, { useEffect, useState } from "react";
import Basket from "../../../assets/img/basket__icon.png";
import Delete from "../../../assets/img/deleteBasket.png";
import styles from "../Header.module.css";
import BasketItemComponent from "./BasketItemComponent";
import Close from "../../../assets/img/X_close.png";
import axios from "axios";
const BasketComponent = ({
  closeModal,
  product,
  basketItems,
  setBasketItems,
}) => {
  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const overAllPriceCalc = () => {
    var overAll = 0;
    for (let i = 0; i < basketItems.length; i++) {
      overAll +=
        Number(basketItems[i].goods.price) * Number(basketItems[i].count);
    }
    return overAll;
  };

  const [overAllPrice, setOverAllPrice] = useState(0);

  useEffect(() => {
    setOverAllPrice(overAllPriceCalc());
  }, [basketItems]);

  const token = sessionStorage.getItem("auth_token");

  const [deleted, setDeleted] = useState(false);
  async function deleteFromBasket() {
    if (deleted) return;

    const token = await sessionStorage.getItem("auth_token");

    const allGoods = basketItems;
    await Promise.all(
      allGoods.map(async (good) => {
        return axios
          .delete(
            `http://127.0.0.1:8000/api/goods/${good.goods.id}/shopping_cart/`,
            {
              headers: {
                authorization: `Token ${token}`,
              },
            }
          )
          .catch((error) => {
            console.error("There was an error!", error);
          });
      })
    ).then(() => setBasketItems([]));
  }
  return (
    <div>
      <div className={styles.modal} onClick={handleModalClick}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <span className={styles.close} onClick={closeModal}>
            <img src={Close} alt="Close" />
          </span>
          <div className={styles.modalBasketRow}>
            <div className={styles.modalBasketTextRow}>
              <img
                className={styles.basketIcon}
                src={Basket}
                alt="Basket"
                onClick={deleteFromBasket}
              />
              <p>Корзина</p>
            </div>
            <img
              className={styles.imgModalDelete}
              src={Delete}
              onClick={deleteFromBasket}
              alt="Delete"
            />
          </div>
          <span
            style={{
              background: "#D9D9D9",
              width: "100%",
              height: "2px",
              display: "block",
              margin: "0 0 22px 0",
            }}
          ></span>
        </div>

        {basketItems.length > 0 &&
          !deleted &&
          basketItems.map((product, index) => (
            <BasketItemComponent
              product={product}
              key={index}
              setBasketItems={setBasketItems}
              basketItems={basketItems}
            />
          ))}
        <div className={styles.BoxDeliveryBasket}>
          <div>Доставка</div>
          <span>0 руб.</span>
        </div>
        <span
          style={{
            background: "#D9D9D9",
            width: "100%",
            height: "2px",
            display: "block",
            margin: "25px 0 27px 0",
          }}
        ></span>
        <div className={styles.sumBasket}>
          <div className={styles.sumBasketTotal}>Итого:</div>
          <span className={styles.sumBasketTotal}>{overAllPrice} руб.</span>
        </div>
        <div className={styles.buttonBasketOrder}>
          <button className={styles.basketOrder}>Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;
