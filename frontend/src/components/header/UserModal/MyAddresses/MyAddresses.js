import { useState, useEffect } from "react";
import Map from "../../../../assets/img/map.png";
import Edit from "../../../../assets/img/edit.png";
import Plus from "../../../../assets/img/plus.png";
import FormAddAddres from "./FormAddAddresses";
import EditMyAddAddres from "./EditMyAddresses";
import { CloseModal } from "../CloseМodal/CloseModal";
// !styles
import styles from "../UserModal.module.css";
import { userApi } from "../../../../api/userApi";

function MyAddresses({ setPersonalModal }) {
  // ФУНКЦИЯ ДЛЯ FormEditAddres
  const [isFormEditAddres, setIsFormEditAddres] = useState(false);

  const togglerForEdits = () => {
    setIsFormEditAddres(false);
  };

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

  const [address, setAdress] = useState({
    delivery_address: "",
    intercom: "",
    floor: 0,
    comment: "",
  });

  const adressHandler = (adress, intercom, floor, comment) => {
    setAdress({
      delivery_address: adress,
      intercom: intercom,
      floor: floor,
      comment: comment,
    });
  };
  const [userId, setUserId] = useState(0);
  const token = localStorage.getItem("token");
  useEffect(() => {
    userId == 0 && userApi.get(token).then((data) => setUserId(data.id));

    userId != 0 &&
      userApi
        .getAdress(token, userId)
        .then((data) =>
          setAdress({
            delivery_address: data.delivery_address,
            intercom: data.intercom,
            floor: data.floor,
            comment: data.comment,
          })
        )
        .then(() => {
          console.log(userId, address, "--------------");
        });
  }, [userId, address.delivery_address.length]);

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
        <div className={styles.textAddress}>
          {" "}
          <b>Adress: </b>
          {address.delivery_address}
          <br /> <b>Этаж: </b>
          {address.intercom}
          <br />
          <b>Домофон: </b> {address.floor}
          <br />
          <b>Комментарий: </b>
          {address.comment}
        </div>
        <img src={Edit} alt="" />
      </div>
      {/* <div className={styles.AddAddress} onClick={toggleFormVisibility}>
        <img src={Plus} />
        <div className={styles.textAddress}>Добавить новый адрес</div>
      </div> */}
      {/* FORM */}
      {/* {isFormVisible && <FormAddAddres />} */}
      {/* FORM EDIT */}
      {isFormEditAddres && (
        <EditMyAddAddres
          userId={userId}
          addressP={address.delivery_address}
          floorP={address.floor}
          intercomP={address.intercom}
          commentP={address.comment}
          toggler={togglerForEdits}
          handlerSet={adressHandler}
        />
      )}
    </div>
  );
}

export default MyAddresses;
