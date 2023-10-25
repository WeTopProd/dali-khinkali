import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import PrevCard from "./img/prew.svg";
import NextCard from "./img/next.svg";
import Card from "./Card";
import { useEffect, useState } from "react";
import { categoriesApi } from "../../api/categories";
import styles from "./CustomSlider.module.css";
import "../../assets/general-styles/styles.css";

const App = ({ basketItems, setBasketItems }) => {
  const [usableSlider, setSlider] = useState([]);

  useEffect(() => {
    categoriesApi.getSlider().then((data) => {
      setSlider(
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
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <div className="next">
        <img src={PrevCard} alt="" className="icon" />
      </div>
    ),
    prevArrow: (
      <div className="prew">
        <img src={NextCard} alt="" className="icon" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1, // тут меняем slidesToShow
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1430, // размер экрана 600
        settings: {
          slidesToShow: 2, // тут меняем slidesToShow
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // размер экрана 480
        settings: {
          slidesToShow: 1, // тут меняем slidesToShow
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="_container">
        <div className={styles.content}>
          <h1 className="titleCard"> Новинки в меню </h1>
          <div className={styles.container}>
            <Slider {...settings}>
              {usableSlider.map((elem) => (
                <Card
                  elem={elem}
                  settings={settings}
                  Slider={Slider}
                  setBasketItems={setBasketItems}
                  basketItems={basketItems}
                />
              ))}
            </Slider>
            <span id="/home#table-reserve"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
