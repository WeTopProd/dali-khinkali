import React, { useEffect, useState } from "react";
import basketApi from "../../../api/basketItemsApi";
import styles from "../Header.module.css";

const BasketItemComponent = ({ product, setBasketItems, basketItems }) => {
  const [productCounts, setProductCounts] = useState(product.count);
  const token = sessionStorage.getItem("auth_token");
  const increaseCount = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  const decreaseCount = (productId) => {
    if (productCounts[productId] > 1) {
      setProductCounts((prevCounts) => ({
        ...prevCounts,
        [productId]: prevCounts[productId] - 1,
      }));
    }
  };

  useEffect(() => {
    console.log(product, basketItems, setBasketItems);
  }, []);

  const [deleted, setDeleted] = useState(false);

  const handler = {
    delete: () => {
      basketApi
        .delete(product.goods.id, token)
        .then((data) => {
          // setDeleted(true)
        })
        .then(() => {
          setBasketItems(basketItems.filter((item) => item != product));
        });
    },
    increase: () => {
      // API
      basketApi
        .countPatch(product.goods.id, token, productCounts + 1)
        .then((data) => {
          setProductCounts((prev) => Number(prev) + 1);
        })
        .then(() => {
          const newBasket = basketItems.map((el) => {
            if (el.goods.id == product.goods.id) {
              return { ...el, count: el.count + 1 };
            } else {
              return { ...el };
            }
          });
          console.log(newBasket);
          setBasketItems(newBasket);
        })
        .catch((err) => console.log(err));
    },
    decrease: () => {
      // productCounts > 1;

      if (productCounts > 1) {
        basketApi
          .countPatch(product.goods.id, token, productCounts - 1)
          .then((data) => {
            setProductCounts((prev) => Number(prev) - 1);
          })
          .then(() => {
            const newBasket = basketItems.map((el) => {
              if (el.goods.id == product.goods.id) {
                return { ...el, count: el.count - 1 };
              } else {
                return { ...el };
              }
            });
            console.log(newBasket);
            setBasketItems(newBasket);
          })
          .catch((err) => console.log(err));
      } else {
        handler.delete();
      }
    },
  };
  const [img, setImg] = useState(product.goods.images[0].images);
  useEffect(() => {
    if (!product.goods.images[0].images.split("://").includes("http")) {
      setImg(`http://dali-khinkali${product.goods.images[0].images}`);

      console.log(img, "image");
    }
  }, [img]);

  return (
    <>
      {!deleted ? (
        <div key={product.goods.id}>
          <div className={styles.productTitlePriceRow}>
            <div className={styles.imgBasket}>
              <img src={`${img}`} alt="" />
              <div className={styles.titlePrice}>
                <p className={styles.price}>{product.goods.price} руб.</p>
                <div className={styles.cardTitle}>{product.goods.title}</div>
              </div>
            </div>
            <div className={styles.boxCounter}>
              <button className={styles.decrease} onClick={handler.decrease}>
                -
              </button>
              <span className={styles.countBasket}>{productCounts}</span>
              <button className={styles.increase} onClick={handler.increase}>
                +
              </button>
            </div>
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
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default BasketItemComponent;
