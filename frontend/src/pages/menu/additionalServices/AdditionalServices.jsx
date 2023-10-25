import React, { useState } from "react";
import AddServices from "../../../assets/img/addServices.png";

import styles from "./AdditionalServices.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Regsuccessfully from "./regsuccessfully/Regsuccessfully";
import { addetionalServiseApi } from "../../../api/reserveApi";

export default function AdditionalServices() {
  const [successCard, setSuccessCard] = useState(false);

  const services = [
    { name: "Поросенок", price: 3000, id: 1 },
    { name: "Кролик", price: 1500, id: 2 },
    { name: "Гусь", price: 1500, id: 3 },
    { name: "Утка", price: 1500, id: 4 },
    { name: "Гусь", price: 1500, id: 5 },
  ];
  const [goods_id, setGoods_id] = useState([]);

  const [counters, setCounters] = useState(services.map(() => 0));

  const incrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index]++;
    setCounters(newCounters);

    setGoods_id((prev) => [...prev, services[index].id]);
  };
  const decrementCounter = (index) => {
    const newCounters = [...counters];
    newCounters[index] = newCounters[index] > 0 ? newCounters[index] - 1 : 0;
    setCounters(newCounters);

    const newCounters2 = [...counters];

    if ((newCounters2[index] = 0)) {
      setGoods_id(goods_id.filter((item) => item !== services[index].id));
    }
  };

  const getTotal = () => {
    return counters.reduce((total, counter, index) => {
      return total + counter * services[index].price;
    }, 0);
  };
  const [description, setDescription] = useState("");
  const createPreorder = (e) => {
    const isAnyServiceAdded = counters.some((count) => count > 0);
    if (!isAnyServiceAdded) {
      alert("Пожалуйста сначала добавьте услуги!!!");
      return;
    }
    const token = localStorage.getItem("token");
    const data = {
      description: "",
      goods_id: goods_id,
      count_goods: counters,
      price_goods: [],
      final_price: `${getTotal()}`,
    };
    addetionalServiseApi(token, data)
      .then((data) => setSuccessCard(true))
      .then(() => {
        setTimeout(() => {
          window.location.reload();
        }, 2500);
      })
      .catch((err) => alert(err));
  };

  const handleOrder = () => {
    setSuccessCard(true);

    setTimeout(() => {
      setCounters(services.map(() => 0));
      setSuccessCard(false);
    }, 2000);
  };

  return (
    <>
      <div
        className={styles.containerBackground}
        style={{
          background: `center no-repeat url(${AddServices}) #51413a`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ContainerLunchTitle}>
          <div className={styles.LunchTitle}>
            ПРИГОТОВЛЕНИЕ ПРАЗДНИЧНЫХ БЛЮД
          </div>
        </div>
      </div>

      <div className="_container">
        <div className={styles.subTitle}>
          <p>
            Наша услуга представляет собой идеальное решение для занятых людей,
            ценящих вкус и качество в каждом приеме пищи, но не имеющих
            достаточно времени на подготовку. Мы замаринуем и приготовим ваше
            мясо на мангале на вертеле с нежностью и вниманием к каждой детали.
            Наши повара - настоящие мастера своего дела!
          </p>
          <div>
            <ul className={styles.AddServicesSelect}>
              {services.map((service, index) => (
                <div className={styles.boxRow}>
                  <li key={index} className={styles.serviceNameBox}>
                    {service.name} - {service.price} руб
                  </li>
                  <li style={{ listStyle: "none" }}>
                    <button
                      className={styles.counterDecrement}
                      onClick={() => decrementCounter(index)}
                    >
                      -
                    </button>
                    {counters[index]}
                    <button
                      className={styles.counterIncrement}
                      onClick={() => incrementCounter(index)}
                    >
                      +
                    </button>
                  </li>
                </div>
              ))}
            </ul>

            <hr style={{ border: "1px solid black" }} />
            <div className={styles.totalAddServices}>
              Итог: {getTotal()} руб
            </div>
            <div className={styles.centerTextArea}>
              <textarea
                className={styles.textareaServices}
                name="addServices"
                cols="30"
                rows="10"
                placeholder="Комментарий к заказу"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              {successCard ? (
                <div>
                  <Regsuccessfully />
                </div>
              ) : (
                <button
                  className={styles.btnAddServies}
                  onClick={createPreorder}
                >
                  Оформить заказ
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
