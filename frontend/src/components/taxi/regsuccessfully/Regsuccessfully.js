import React from "react";
import styles from "./Regsuccessfully.module.css";
import IconSuccess from "../../../assets/img/goodIcon.png";

function Regsuccessfully() {
  return (
    <div>
      <div className={styles.backgroundRegSuccess}>
        <div className={styles.RegSuccessBox}>
          <img src={IconSuccess} alt="" />
          <p>такси забронированно</p>
          <span>
            Администратор свяжется с вами для
            <br /> подтверждения.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Regsuccessfully;
