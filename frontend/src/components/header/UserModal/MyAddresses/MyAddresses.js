import { useState } from "react";
import Map from "../../../../assets/img/map.png";
import Edit from "../../../../assets/img/edit.png";
import Plus from "../../../../assets/img/plus.png";
import FormAddAddres from "./FormAddAddresses";
import EditMyAddAddres from "./EditMyAddresses";
import { CloseModal } from "../CloseМodal/CloseModal";
// !styles
import styles from "../UserModal.module.css";

function MyAddresses({ setPersonalModal }) {
  // ФУНКЦИЯ ДЛЯ FormEditAddres
  const [isFormEditAddres, setIsFormEditAddres] = useState(false);

  const toggleEditFormVisibility = () => {
    setIsFormEditAddres(!isFormEditAddres);
    setIsFormVisible(false);
  };

  // ФУНКЦИЯ ДЛЯ FormAddAddres
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
    setIsFormEditAddres(false);
  };

  return (
    <div className={styles.MyDetails}>
      <div className={styles.myDetailsRow}>
        <div className={styles.iconBurgerTextRow}>
          <img className={styles.iconBurger} src={Map} alt="" />
          <h3>Мои адреса</h3>
        </div>
        <div className={styles.iconClose}>
          <CloseModal setPersonalModal={setPersonalModal} />
        </div>
      </div>
      <div className={styles.editAddress} onClick={toggleEditFormVisibility}>
        <div className={styles.textAddress}>! поля для добавление адреса</div>
        <img src={Edit} alt="" />
      </div>
      <div className={styles.AddAddress} onClick={toggleFormVisibility}>
        <img src={Plus} />
        <div className={styles.textAddress}>Добавить новый адрес</div>
      </div>
      {/* FORM */}
      {isFormVisible && <FormAddAddres />}
      {/* FORM EDIT */}
      {isFormEditAddres && <EditMyAddAddres />}
    </div>
  );
}

export default MyAddresses;
