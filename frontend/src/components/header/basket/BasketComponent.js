import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Basket from "../../../assets/img/basket__icon.png";
import Delete from "../../../assets/img/deleteBasket.png";
import styles from "../Header.module.css";
import BasketItemComponent from "./BasketItemComponent";
import Close from "../../../assets/img/X_close.png";
import axios from "axios";
import { userApi } from "../../../api/userApi";
import IconBadket from "../../../assets/img/KorzinfPusto.png";
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
            `http://dali-khinkali.ru/api/goods/${good.goods.id}/shopping_cart/`,
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
    )
      .then(() => setBasketItems([]))
      .catch(() => null);
  }
  const [description, setDescription] = useState("");
  const [goodsid, setGoodsid] = useState([]);
  const [countGoods, setCountGoods] = useState([]);
  const [priceGoods, setPriceGoods] = useState([]);
  const [finalPrice, setFinalPrice] = useState("");

  useEffect(() => {
    setDescription(basketItems.map((item) => item.goods.title));
    setGoodsid(basketItems.map((el) => el.goods.id));
    setCountGoods(basketItems.map((item) => item.count));
    setPriceGoods(basketItems.map((item) => item.price * item.count));
    // setFinalPrice(priceGoods.reduce((prev, price) => prev + price, 0));
    let countGoods = basketItems.map((item) => item.price * item.count);
    setPriceGoods(countGoods);
    let totalprice = priceGoods.reduce((prev, price) => prev + price, 0);
    setFinalPrice(totalprice);
  }, [basketItems]);

  const CreateOrder = () => {
    axios
      .request({
        url: `http://dali-khinkali.ru/api/send-order/`,
        method: "POST",
        headers: {
          authorization: `Token ${token}`,
          "content-type": "application/json",
        },
        data: {
          description: `${description}`,
          goods_id: goodsid,
          count_goods: countGoods,
          price_goods: priceGoods,
          final_price: `${finalPrice}`,
        },
      })
      .then((response) => {
        axios
          .request({
            url: `http://dali-khinkali.ru/api/payment/`,
            method: "POST",
            headers: {
              authorization: `Token ${token}`,
              "content-type": "application/json",
            },
            data: {
              service_name: `${description}`,
              num_order: goodsid,
              price: `${finalPrice}`,
            },
          })
          .then((response) => {
            console.log(response, "url");
            const redirectUrl = response.data.success;
            if (redirectUrl) {
              window.location.href = redirectUrl;
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const route = useRou
  const sendToBasket = () => {
    window.location.href = "/Basket";
  };
  //////////// Молальное окно прошло успешно
  // const [sucessCardReserveTable, setSucessCardReserveTable] = useState(false);

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
        {basketItems.length == 0 ? (
          <div className={styles.BasketEmpty}>
            <img src={IconBadket} alt="" />
            Корзина пуста
            <br />
            <p style={{ fontSize: "20px" }}>
              Перейдите в меню что бы добавить блюда в корзину
              <br />
              <Link
                style={{
                  border: "1px solid black",
                  padding: "5px",
                  borderRadius: "10px",
                  margin: "15px auto",
                  width: "100px",
                  display: "block",
                  background: "black",
                }}
                to="/menu"
              >
                меню
              </Link>
            </p>
          </div>
        ) : null}
        <div className={styles.BoxDeliveryBasket}>
          <div>Доставка</div>
          <span>200 руб.</span>
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
          <span className={styles.sumBasketTotal}>
            {overAllPrice + 200} руб.
          </span>
        </div>
        <div className={styles.buttonBasketOrder}>
          <button className={styles.basketOrder} onClick={sendToBasket}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketComponent;
