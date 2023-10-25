import React, { useState } from "react";
import "../../assets/general-styles/styles.css";
import styles from "./Menu.module.css";
import Salat from "./salat/Salat";
import Beverage from "./beverages/Beverages";
import Snacks from "./snacks/Snacks";
import Soups from "./soups/Soups";
import Garnish from "./garnish/Garnish";
import Bekery from "./bakery/Bakery";
import HotDishes from "./hotDishes/HotDishes";
import DishesOnTheGrill from "./dishesOnTheGrill/DishesOnTheGrill";
import Sauces from "./sauces/Sauces";
import Bread from "./bread/Bread";
import Dessert from "./dessert/Dessert";

const Pages = [
  { name: "Салаты", url: "" },
  { name: "Закуски", url: "" },
  { name: "Супы", url: "/" },
  { name: "Гарниры", url: "/" },
  { name: "Выпечка", url: "/" },
  { name: "Горячие блюда", url: "/" },
  { name: "Блюда на мангале", url: "/" },
  { name: "Соусы", url: "/" },
  { name: "Хлеб", url: "/" },
  { name: "Десерты", url: "/" },
  { name: "Напитки", url: "/" },
];

const Menu = ({ basketItems, setBasketItems }) => {
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
    <div className="_container">
      <div className={styles.bannerContainer}>
        <div className={styles.navLink}>
          {Pages.map((page) => (
            <button
              onClick={() => setCardProducts(page.name)}
              key={page.name}
              className={styles.linkMenu}
            >
              {page.name}
            </button>
          ))}
        </div>
        <hr style={{ border: "3px solid black", margin: "5px 0 0 0" }} />
        {renderSwitch(cardProducts)}
      </div>
    </div>
  );
};

export default Menu;
