import React from "react";
import styles from "../UserModal.module.css";
import Close from "../../../../assets/img/X_close.png";
export const CloseModal = ({ setPersonalModal }) => {
  return (
    <div>
      <img
        onClick={() => setPersonalModal("PersonalInfo")}
        className={styles.iconClose}
        src={Close}
        alt=""
      />
    </div>
  );
};
