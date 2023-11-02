import React from "react";
import { useRef } from "react";
import styles from "./Kalyan.module.css";
import LogoKalyan from "../../../assets/img/kalyan/KalyanKarta.png";
import PhoneIcon from "../../../assets/img/kalyan/phoneNavKalyan.svg";
import TimeIcon from "../../../assets/img/kalyan/timeKalyanWork.svg";
import Footer from "../../footer/footer";
import { Link } from "react-router-dom";
// COMPONENTS
import { KalyanMenu } from "./menu/menu";
import { KalyanMenuPrice } from "./kalyanMenuPrice/KalyanMenuPrice";
import { KalyanReserve } from "./kalyanReserve/KalyanReserve";

export const HeaderKalyan = () => {
  const reserveRef = useRef(null);

  const scrollToReserve = () => {
    if (reserveRef.current) {
      reserveRef.current.scrollIntoView({ behavior: "smooth" });
      const yOffset = 300;
      const y =
        reserveRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.KalyanContainer}>
      <div className={styles.PagesKalyan}>
        <div className={styles.KalyanNav}>
          <div className={styles.KalyanLogo}>
            <img src={LogoKalyan} alt="" />
          </div>
          <div className={styles.RowKalyanRightNav}>
            <div className={styles.KalyanRightNavPhone}>
              <img src={PhoneIcon} alt="" />
              <div className={styles.NavRightKalyan}>+7 (968) 091-55-51</div>
            </div>
            <div className={styles.KalyanRightNavTime}>
              <img src={TimeIcon} alt="" />
              <div>
                <div className={styles.NavRightKalyan}>ВС-ЧТ: 11:00 - 1:00</div>
                <div className={styles.NavRightKalyan}>ПТ-СБ: 11:00 - 3:00</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.containerHeader}>
          <div className={styles.KalyanHeader}>
            <div className={styles.HeaderTitle}>кальянная</div>
            <div className={styles.HeaderSubTitle}>омар хайям</div>
            <span></span>
            <p className={styles.HeaderText}>
              Качество и атмосфера вашего отдыха
            </p>
          </div>

          <div className={styles.boxBtnsHeader}>
            <Link className={styles.buttonMenu} to="/menu">
              Посмотреть меню
            </Link>
            <button className={styles.buttonRight} onClick={scrollToReserve}>
              Забронировать столик
            </button>
          </div>
        </div>
      </div>
      <KalyanMenu />
      <KalyanMenuPrice />
      <div ref={reserveRef}>
        <KalyanReserve />
      </div>

      <Footer />
    </div>
  );
};
