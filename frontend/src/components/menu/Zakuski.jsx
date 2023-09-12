import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Salats from "./Salat-data";
import styles from "./Menu.module.css";
import "../../assets/general-styles/styles.css";

export default function Salat() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    document.title = `Вы нажали ${category} раз`;
  });
  return (
    <>
      <div className="_container">
        <h1 className={styles.salatTitle}>Закуски</h1>
        <div className={styles.SalatBlockRow}>
          {Salats.map((elem) => (
            <div key={elem.id} className={styles.boxCardSalats}>
              <div className={styles.BlockCard}>
                <img src={elem.src} alt="" />
                <div className="SubTitle">{elem.subtitle}</div>
                {/* <div className={styles.BoxWeightSubTitle}>
                  <div className="title">{item.title}</div>
                  <span className="weight">{item.weight}</span>
                </div> */}
                <div className="btns">
                  <p className="price">{elem.price}</p>
                  <Link className="btn" to="/">
                    + В корзину
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
