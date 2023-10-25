import TimeBackgroundLunch from "../../../assets/img/TimeBackgroundLunch.png";
import styles from "./Business-lunch.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function Businesslunch({basketItems, setBasketItems}) {
  const [usableBL, setUseableBL] = useState([]);

  useEffect(() => {
    categoriesApi.getBuisnessLunch().then((data) => {
      setUseableBL(
        data.map((el) => {
          return {
            id: el.id,
            src: el.images[0]?.images,
            title: el.title,
            subtitle: el.description,
            weight: el.weight,
            price: el.price,
            all: { ...el },
          };
        })
      );
    });
  }, []);

  return (
    <>
      <div
        className={styles.containerBackground}
        style={{
          background: `center no-repeat url(${TimeBackgroundLunch}) #51413a`,
          backgroundSize: "cover",
        }}
      >
        <div className={styles.ContainerLunchTitle}>
          <div className={styles.LunchTime}>
            Ежедневно
            <br />с 12:00 до 16:00
          </div>
        </div>
      </div>
      <div className="_container">
        <div className={styles.content}>
          <div className={styles.containerCardSalats}>
            {usableBL.map((elem) => (
              <Card
                elem={elem}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              key={elem.id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
