import styles from "./DishesOnTheGrill.module.css";
import "../../../assets/general-styles/styles.css";
import Footer from "../../../components/footer/footer";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../../api/categories";

export default function DishesOnTheGrill({ basketItems, setBasketItems }) {
  const [usableDishesOnTheGrill, setusableDishesOnTheGrill] = useState([]);

  useEffect(() => {
    categoriesApi.getDishesOnTheGrill().then((data) => {
      setusableDishesOnTheGrill(
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
          <h1 className="titleCard">Блюда на мангале</h1>
          <div className={styles.containerCardSalats}>
            {usableDishesOnTheGrill.map((elem) => (
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
