import React, { useState, useEffect } from "react";
// !styles
import styles from "../UserModal.module.css";

function EditMyAddresses() {
  // address floor intercom comment
  const [address, setAddress] = useState("");
  const [floor, setFloor] = useState("");
  const [intercom, setIntercom] = useState("");
  const [comment, setComment] = useState("");

  const handler = {
    address: (e) => {
      setAddress(e.target.value);
    },
    floor: (e) => {
      setFloor(e.target.value);
    },
    intercom: (e) => {
      setIntercom(e.target.value);
    },
    comment: (e) => {
      setComment(e.target.value);
    },
  };

  return (
    <div className={styles.EditMyAddresses}>
      <form action="#" method="POST">
        <div className={styles.AddAddress}>
          <input
            className={styles.inputAddAddress}
            type="text"
            placeholder="Введите адрес"
            value={address}
            onChange={handler.address}
          />
        </div>
        <div className={styles.inputRowAddress}>
          <input
            className={styles.inputAddAddress}
            type="text"
            placeholder="Этаж"
            value={floor}
            onChange={handler.floor}
          />
          <input
            className={styles.inputAddAddress}
            type="text"
            placeholder="Домофон"
            value={intercom}
            onChange={handler.intercom}
          />
        </div>
        <div className={styles.AddAddress}>
          <input
            className={styles.inputAddAddress}
            type="text"
            placeholder="Комментарий"
            value={comment}
            onChange={handler.comment}
          />
        </div>
      </form>
      <div className={styles.btnCenter}>
        <button className={styles.MyDetailsButton} type="submit">
          Сохранить изменения
        </button>
      </div>
    </div>
  );
}

export default EditMyAddresses;
