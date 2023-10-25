import styles from "./Snacks.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function Snacks({ basketItems, setBasketItems }) {
  const [usableSnacks, setusableSnacks] = useState([]);

  useEffect(() => {
    categoriesApi.getSnacks().then((data) => {
      setusableSnacks(
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
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard">Закуски</h1>
          <div className={styles.containerCardSalats}>
            {usableSnacks.map((elem) => (
              <Card
                elem={elem}
                basketItems={basketItems}
                setBasketItems={setBasketItems}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
