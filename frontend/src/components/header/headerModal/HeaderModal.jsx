import React, { useEffect, useState } from "react";
import styles from "./HeaderModal.module.css";
import { NavLink } from "react-router-dom";
import Close from "../../../assets/img/X_close.png";
import BackIcon from "../../../assets/img/iconBack.png";
import Salat from "../../../pages/menu/salat/Salat";
import Beverage from "../../../pages/menu/beverages/Beverages";
import Snacks from "../../../pages/menu/snacks/Snacks";
import Soups from "../../../pages/menu/soups/Soups";
import Garnish from "../../../pages/menu/garnish/Garnish";
import Bekery from "../../../pages/menu/bakery/Bakery";
import HotDishes from "../../../pages/menu/hotDishes/HotDishes";
import DishesOnTheGrill from "../../../pages/menu/dishesOnTheGrill/DishesOnTheGrill";
import Sauces from "../../../pages/menu/sauces/Sauces";
import Bread from "../../../pages/menu/bread/Bread";
import Dessert from "../../../pages/menu/dessert/Dessert";

const Pages = [
  { name: "Салаты", url: "" },
  { name: "Закуски", url: "" },
  { name: "Супы", url: "" },
  { name: "Гарниры", url: "" },
  { name: "Выпечка", url: "" },
  { name: "Горячие блюда", url: "" },
  { name: "Блюда на мангале", url: "" },
  { name: "Соусы", url: "" },
  { name: "Хлеб", url: "" },
  { name: "Десерты", url: "" },
  { name: "Напитки", url: "" },
];
function HeaderModal({
  pages,
  handleCklick,
  handleClickScroll,
  basketItems,
  setBasketItems,
}) {
  const [menuDrop, setMenuDrop] = useState(false);
  const menuDropControl = () => {
    setMenuDrop((prev) => !prev);
  };
  const backFromMenu = () => {
    setMenuDrop(false);
  };

  const [cardProducts, setCardProducts] = useState("Салаты");

  const renderSwitch = (param) => {
    switch (param) {
      case "Салаты":
        return (
          <Salat basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Закуски":
        return (
          <Snacks basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Супы":
        return (
          <Soups basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Гарниры":
        return (
          <Garnish basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Выпечка":
        return (
          <Bekery basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Горячие блюда":
        return (
          <HotDishes
            basketItems={basketItems}
            setBasketItems={setBasketItems}
          />
        );
      case "Блюда на мангале":
        return (
          <DishesOnTheGrill
            basketItems={basketItems}
            setBasketItems={setBasketItems}
          />
        );
      case "Соусы":
        return (
          <Sauces basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Хлеб":
        return (
          <Bread basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Десерты":
        return (
          <Dessert basketItems={basketItems} setBasketItems={setBasketItems} />
        );
      case "Напитки":
        return (
          <Beverage basketItems={basketItems} setBasketItems={setBasketItems} />
        );

      default:
        return "Такого блюда нет";
    }
  };
  return (
    <div className={styles.toggleNavBar}>
      <img
        onClick={handleCklick}
        src={Close}
        alt=""
        className={styles.CloseIcon}
      />
      {menuDrop && (
        <span onClick={backFromMenu}>
          <img className={styles.backIconToggle} src={BackIcon} alt="" />
        </span>
      )}
      {!menuDrop && (
        <div className={styles.NavItemBox}>
          {pages.map((elem, idx) => {
            if (elem.url == "/menu") {
              return (
                <>
                  <NavLink
                    to={elem.url}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    key={idx}
                    onClick={() => {
                      menuDropControl();
                      handleClickScroll(elem.url);
                    }}
                  >
                    {elem.name}
                  </NavLink>
                </>
              );
            } else {
              return (
                <>
                  <NavLink
                    key={idx}
                    to={elem.url}
                    onClick={() => {
                      handleClickScroll(elem.url);
                    }}
                  >
                    {elem.name}
                  </NavLink>
                </>
              );
            }
          })}
        </div>
      )}
      <div>
        {menuDrop && (
          <div className={styles.NavItemBox}>
            {Pages.map((item) => (
              <button
                onClick={() => setCardProducts(item.name)}
                key={item.name}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
        {renderSwitch(cardProducts)}
      </div>
    </div>
  );
}

export default HeaderModal;
