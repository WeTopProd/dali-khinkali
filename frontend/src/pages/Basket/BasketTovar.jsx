import b from "./Basket.module.scss";
import h from "./Header.module.scss";
import X from "./del.svg";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BasketTovar({
  setCountInfo,
  countInfo,
  removeBasket,
  setkarzinkaTovar,
  karzinkaTovar,
  ...info
}) {
  const [count, setCount] = useState(info.count || 1);

  const tokenTwo = localStorage.getItem("token");
  useEffect(() => {
    console.log(info, "------");
  }, []);
  const handleCountChange = async (newCount) => {
    try {
      if (newCount >= 1) {
        const updatedCartItem = {
          goods: info.goods.id,
          user: 1,
          count: newCount,
        };

        const response = await axios.patch(
          `https://tyteda.ru/api/goods/${info.id}/shopping_cart/`,
          updatedCartItem,
          {
            headers: {
              "content-type": "application/json",
              authorization: `Token ${tokenTwo}`,
            },
          }
        );

        if (response.status === 200) {
          setCount(newCount);

          // Обновляем массив countInfo
          const updatedCountInfo = countInfo.map((item) =>
            item.goods.id === info.goods.id
              ? { ...item, count: newCount }
              : item
          );
          setCountInfo(updatedCountInfo);

          // Обновляем массив karzinkaTovar
          const updatedKarzinkaTovar = karzinkaTovar.map((item) =>
            item.id === info.goods.id ? { ...item, count: newCount } : item
          );
          setkarzinkaTovar(updatedKarzinkaTovar);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Ничего не делать или выполнить альтернативные действия
      } else {
        // Обработка других ошибок
      }
    }
  };

  return (
    <div className={b.map__item}>
      <div className={b.map__item__flex}>
        {info &&
        info.goods.images &&
        info.goods.images[0] &&
        info.goods.images[0].images ? (
          <img
            src={`https://dali-khinkali.ru${info.goods.images[0].images}`}
            alt="img"
            className={h.nav__kar__item_info_img}
          />
        ) : (
          <p>No image available</p>
        )}

        <div className={b.map__item__info}>
          <p>{info.goods.title}</p>
          <p>{info.goods.price * count} руб.</p>
        </div>
      </div>

      <div className={h.nav__kar__item__fun}>
        <div
          className={h.nav__kar__item__fun__add}
          onClick={() => handleCountChange(count - 1)}
        >
          -
        </div>
        <h3>{count}</h3>
        <div
          className={h.nav__kar__item__fun__add}
          onClick={() => handleCountChange(count + 1)}
        >
          +
        </div>
        <img
          src={X}
          className={h.nav__danniy__header__exit}
          alt="exit"
          onClick={() => removeBasket(info.goods.id)}
        />
      </div>
    </div>
  );
}
