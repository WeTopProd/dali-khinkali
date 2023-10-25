import React, { useState, useEffect } from "react";
import Burger from "../../../../assets/img/burger.png";
import styles from "../UserModal.module.css";
import { CloseModal } from "../CloseМodal/CloseModal";
import { userApi } from "../../../../api/userApi";

function MyDetails({ IMaskInput, setPersonalModal, userInfo }) {
  // first_name phobe email
  const [first_name, setFirst_name] = useState(userInfo.first_name);
  const [last_name, setLast_name] = useState(userInfo.last_name);
  const [phone, setPhone] = useState(userInfo.phone);
  const [email, setEmail] = useState(userInfo.email);

  const [token, setToken] = useState(sessionStorage.getItem("auth_token"));

  const handler = {
    first_name: (e) => {
      setFirst_name(e.target.value);
    },
    last_name: (e) => {
      setLast_name(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    email: (e) => {
      setEmail(e.target.value);
    },
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { first_name, last_name, phone, email };

    userApi.patch(token, data);
  };

  return (
    <>
      <div className={styles.MyDetails}>
        <div className={styles.myDetailsRow}>
          <div className={styles.iconBurgerTextRow}>
            <img className={styles.iconBurger} src={Burger} alt="" />
            <h3>Мои данные</h3>
          </div>
          <div className={styles.iconClose}>
            <CloseModal setPersonalModal={setPersonalModal} />
          </div>
        </div>
        <form className={styles.nameEmailTelColumn} action="#" method="POST">
          <div className={styles.inputRow}>
            <label className={styles.myDetailsLabel} htmlFor="first_name">
              Имя *
            </label>
            <input
              type="text"
              placeholder="Имя *"
              id="first_name"
              value={first_name}
              onChange={handler.first_name}
            />
          </div>
          {/*  */}

          <div className={styles.inputRow}>
            <label className={styles.myDetailsLabel} htmlFor="LastName">
              Фамилия
            </label>
            <input
              type="text"
              placeholder="Фамилия"
              id="LastName"
              value={last_name}
              onChange={handler.last_name}
            />
          </div>
          {/*  */}
          <div className={styles.inputRow}>
            <label className={styles.myDetailsLabel} htmlFor="tel">
              Телефон *
            </label>

            <IMaskInput
              className={styles.input}
              mask="+7(#00) 000-00-00"
              definitions={{
                "#": /[1-9]/,
              }}
              placeholder="Телефон *"
              sx={{ mt: 2, "& fieldset": { border: "none" } }}
              value={phone}
              onChange={handler.phone}
            />
          </div>
          <div className={styles.inputRow}>
            <label className={styles.myDetailsLabel} htmlFor="email">
              Почта
            </label>
            <input
              type="email"
              placeholder="Почта"
              id="email"
              value={email}
              onChange={handler.email}
            />
          </div>
        </form>
        <div className={styles.btnCenter}>
          <button
            className={styles.MyDetailsButton}
            type="submit"
            onClick={onSubmit}
          >
            Сохранить
          </button>
        </div>
      </div>
    </>
  );
}

export default MyDetails;
