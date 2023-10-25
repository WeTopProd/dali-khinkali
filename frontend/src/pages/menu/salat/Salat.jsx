import styles from "./Salat.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";
import Card from "./Card";
export default function Salat({ basketItems, setBasketItems }) {
  const [usableSalads, setSalads] = useState([]);

  useEffect(() => {
    categoriesApi.getSalads().then((data) => {
      setSalads(
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
          <h1 className="titleCard">Салаты</h1>
          <div className={styles.containerCardSalats}>
            {usableSalads.map((elem) => (
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
