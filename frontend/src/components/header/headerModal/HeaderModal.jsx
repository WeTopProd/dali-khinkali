import React, { useEffect, useState } from "react";
import styles from "./HeaderModal.module.css";
import { NavLink } from "react-router-dom";
import Close from "../../../assets/img/X_close.png";
import BackIcon from "../../../assets/img/iconBack.png";

function HeaderModal({ pages, handleCklick, handleClickScroll }) {
  const [menuDrop, setMenuDrop] = useState(false);
  const menuDropControl = () => {
    setMenuDrop((prev) => !prev);
  };
  const backFromMenu = () => {
    setMenuDrop(false);
  };
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
      <div className={styles.NavItemBox}>
        {menuDrop && (
          <div>
            {Pages.map((item) => (
              <NavLink key={item.name} to={item.url}>
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      {/*  */}
    </div>
  );
}

export default HeaderModal;
