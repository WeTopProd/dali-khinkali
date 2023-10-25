import React from "react";
import styles from "./Zal.module.css";
import Stol_6 from "../../../assets/img/ZalStol__6.png";
import Stol_3 from "../../../assets/img/ZalStol__3.png";
import Stol_1 from "../../../assets/img/ZalStol__1.png";
import Stol_5 from "../../../assets/img/ZalStol__5.png";
import Stol_4 from "../../../assets/img/ZalStol__4.png";
// STYLE
import "../../../assets/general-styles/styles.css";

export default function Zal({ closeModal, handler }) {
  const inHandler = {
    t1: () => {
      handler("1");
      closeModal();
    },
    t2: () => {
      handler("2");
      closeModal();
    },
    t3: () => {
      handler("3");
      closeModal();
    },
    t4: () => {
      handler("4");
      closeModal();
    },
    t5: () => {
      handler("5");
      closeModal();
    },
    t6: () => {
      handler("6");
      closeModal();
    },
  };

  return (
    <div className={styles.PagesModalZal}>
      <div className={styles.containerHull}>
        <div className={styles.containerColumn}>
          <div className={styles.containerRow}>
            <div
              className={styles.reserv__N6 + " " + styles.reserv}
              onClick={() => inHandler["t6"]()}
            >
              <p className={styles.reservText}>Стол №6</p>
              <img src={Stol_6} alt="" />
            </div>

            <div
              className={styles.reserv__N3 + " " + styles.reserv}
              onClick={() => inHandler["t3"]()}
            >
              <p className={styles.reservText}>Стол №3</p>
              <img src={Stol_3} alt="" />
            </div>
            {/* Stol N2 */}
            <div
              className={styles.reserv + " " + styles.reserv__N2}
              onClick={() => inHandler["t2"]()}
            >
              <p className={styles.reservText}>Стол №2</p>
              <img src={Stol_3} alt="" />
            </div>
          </div>

          {/* Stols N5 N4 */}
          <div className={styles.Stols_5_4__row}>
            <div
              className={styles.reserv__N5 + " " + styles.reserv}
              onClick={() => inHandler["t5"]()}
            >
              <p className={styles.reservText}>Стол №5</p>
              <img src={Stol_5} alt="" />
            </div>

            <div
              className={styles.reserv__N4 + " " + styles.reserv}
              onClick={() => inHandler["t4"]()}
            >
              <p className={styles.reservText}>Стол №4</p>
              <img src={Stol_4} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.ContainerStol__1}>
          <div
            className={styles.reserv__N1 + " " + styles.reserv}
            onClick={() => inHandler["t1"]()}
          >
            <p className={styles.reservText}>Стол №1</p>
            <img src={Stol_1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
