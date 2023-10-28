import React from "react";
import styles from "./menu.module.css";
import ImagesKalyan from "../../../../assets/img/kalyan/ImagesKalyanMenu.png";

export const KalyanMenu = () => {
  return (
    <div className={styles.WhyChooseUsPages}>
      <h1 className={styles.KalyanTitle}>Почему нас выбирают?</h1>
      <div className={styles.WhyChooseUsPagesCenter}>
        <div className={styles.WhyChooseUsPagesLeft}>
          <p className={styles.WhyChooseUsPagesTextLeft}>
            Находимся в <span>самом центре</span>
            <br /> Орехово-зуево
          </p>
          <p>
            Два <span>больших</span> и<br /> комфортных зала
          </p>
        </div>

        <img src={ImagesKalyan} alt="" />

        <div className={styles.WhyChooseUsPagesRight}>
          <p className={styles.WhyChooseUsPagesTextRight}>
            Большая <span>парковка</span>
          </p>
          <p>
            Большой <span>выбор табака</span>
            <br /> и наполнений и
          </p>
        </div>
      </div>
      <p className={styles.SpansWhyChooseUsPagesLeft}>
        <div className={styles.SubMenuKalyan}>
          <span>Pole dance</span>&nbsp;и&nbsp;<span>Восточные</span>&nbsp;танцы
        </div>
        <div className={styles.KalyanMenuTitle}>МЕНЮ</div>
      </p>
    </div>
  );
};
