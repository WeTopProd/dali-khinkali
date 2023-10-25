import styles from "./Bread.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function Bread({ basketItems, setBasketItems }) {
  const [usableBread, setusableBread] = useState([]);

  useEffect(() => {
    categoriesApi.getBread().then((data) => {
      setusableBread(
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
          <h1 className="titleCard">Хлеб</h1>
          <div className={styles.containerCardSalats}>
            {usableBread.map((elem) => (
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
