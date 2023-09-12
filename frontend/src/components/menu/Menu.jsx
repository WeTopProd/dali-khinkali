import React, { useEffect, useState } from "react";
import "../../assets/general-styles/styles.css";
import styles from "./Menu.module.css";

const Pages = [
  { name: "Салаты", url: "../../pages/salats/Salats" },
  { name: "Закуски", url: "Zakuski.jsx" },
  { name: "Пивные закуски", url: "../../pivniy-zakuski/Pivniy-zakuski" },
  { name: "Супы", url: "/" },
  { name: "Гарниры", url: "/" },
  { name: "Горячие блюда", url: "/" },
  { name: "Хачапури", url: "/" },
  { name: "Осетинские пироги", url: "/" },
  { name: "Блюда на мангале", url: "/" },
  { name: "Соусы", url: "/" },
  { name: "Хлеб", url: "/" },
  { name: "Десерты", url: "/" },
  { name: "Напитки", url: "/" },
];

export default function Menu() {
  const [category, setCategory] = useState("salats");
  useEffect(() => {
    document.title = `Вы нажали ${category} раз`;
  });

  const handleGet = (url) => {
    console.log(url);
  };

  return (
    <>
      <div className="_container">
        <div className={styles.navLink}>
          {Pages.map((page) => (
            <button
              key={page.name}
              onClick={() => handleGet(page.url)}
              className={styles.linkMenu}
            >
              {page.name}
            </button>
          ))}
        </div>
        <hr style={{ border: "3px solid black", margin: "45px 0 0 0" }} />
      </div>
    </>
  );
}
