import React from "react";
import styles from "./Vozvrat.module.css";
import { Container } from "@mui/material";

export const Vozvrat = () => {
  return (
    <>
      <h1 className={styles.DelTitle}>Возврат</h1>
      <Container
        maxWidth="lg"
        alignItems="center"
        sx={{ display: "flex", mt: 12, pl: 3, pr: 3 }}
        marginTop="-30px"
      >
        <div className={styles.FormVozvrat}>
          <form className={styles.FormVozvratformLeft}>
            <h3>Выберите дату заказа</h3>
            <p className={styles.FormVozvratInput}>
              <input type="date" />
            </p>
            <p className={styles.FormVozvratInput}>
              <input
                placeholder="Опишите с чем связан отказ от заказа"
                type="text"
              />
            </p>
            <p className={styles.FormVozvratInput}>
              <input
                placeholder="Напишите номер карты куда вернуть средства"
                type="text"
              />
            </p>
            <button className={styles.buttonVozvrat}>Отправить</button>
          </form>
          <div className={styles.FormVozvratformRight}>
            <p>
              Процедура возврата товара регламентируется статьей 26.1
              федерального закона «О защите прав потребителей».
            </p>
            <ul>
              <li>
                Потребитель вправе отказаться от товара в любое время до его
                передачи, а после передачи товара - в течение семи дней;
              </li>
              <li>
                При отказе потребителя от товара продавец должен возвратить ему
                денежную сумму, уплаченную потребителем по договору, за
                исключением расходов продавца на доставку от потребителя
                возвращенного товара, не позднее чем через десять дней со дня
                предъявления потребителем соответствующего требования;
              </li>
              <li>
                • Потребитель не вправе отказаться от товара надлежащего
                качества, имеющего индивидуально-определенные свойства, если
                указанный товар может быть использован исключительно
                приобретающим его человеком.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};
