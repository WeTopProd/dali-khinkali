import styles from "./Garnish.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function Garnish({ basketItems, setBasketItems }) {
  const [usableGarnish, setusableGarnish] = useState([]);

  useEffect(() => {
    categoriesApi.getGarnish().then((data) => {
      setusableGarnish(
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
          <h1 className="titleCard">Гарниры</h1>
          <div className={styles.containerCardSalats}>
            {usableGarnish.map((elem) => (
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
