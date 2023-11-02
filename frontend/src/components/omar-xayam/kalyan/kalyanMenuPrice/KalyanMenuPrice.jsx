import React from "react";
import styles from "./KalyanMenuPrice.module.css";

export const KalyanMenuPrice = () => {
  const scrollToSecondComponent = () => {
    const secondComponent = document.getElementById("second-component");

    if (secondComponent) {
      const yOffset =
        secondComponent.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: yOffset + -220,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.KalyanMenuPriceContainer}>
      <div className={styles.BoxKalyanPrice}>
        <div className={styles.SubBoxKalyanPrice}>
          <p>Классика</p>
          <span>табак</span>
          <span>ADALIA</span>
          <span>AL FHAKER</span>
          <span>SHERBETLI</span>
          <span>900 руб</span>
        </div>
        <div className={styles.KalyanPremium + " " + styles.SubBoxKalyanPrice}>
          <p>Премиум</p>
          <span>табак</span>
          <span>MUST HAVE</span>
          <span>LUNA</span>
          <span>DAILY HOOKAN</span>
          <span>1200 руб</span>
        </div>
        <div className={styles.KalyanElintniy + " " + styles.SubBoxKalyanPrice}>
          <p>Элитный</p>
          <span>табак</span>
          <span>DARK SIDE</span>
          <span>TANGERS</span>
          <span>FUMARY</span>
          <span>1500 руб</span>
        </div>
      </div>
      <div className={styles.BtnBoxKalyanPrice}>
        <button
          className={styles.buttonKalyanPrice}
          onClick={() => {
            scrollToSecondComponent();
          }}
        >
          забронировать столик
        </button>
      </div>
    </div>
  );
};
