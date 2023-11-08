import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Icon from "@mui/material/Icon";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import PlaceIcon from "@mui/icons-material/Place";
import MonseratRegular from "../../assets/fonts/Montserrat-Regular.woff2";
import MonseratBold from "../../assets/fonts/Montserrat-Bold.woff2";
import LatoSemiBold from "../../assets/fonts/latosemibold.woff2";
import LatoRegular from "../../assets/fonts/latoregular.woff2";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// IMPORT IMAGE
import FooterLogo from "../../assets/img/footer-logo.png";
import Image1 from "../../assets/img/image-1.png";
import Image2 from "../../assets/img/image-2.png";
import Image3 from "../../assets/img/image-3.png";
import Image4 from "../../assets/img/image-4.png";
import Image5 from "../../assets/img/image-5.png";
import Image6 from "../../assets/img/image-6.png";
import Image7 from "../../assets/img/image-7.png";
import Image8 from "../../assets/img/tyteda.png";
import Image9 from "../../assets/img/poyu.png";
import Image10 from "../../assets/img/image-10.png";
import Image11 from "../../assets/img/image-11.png";
import Image12 from "../../assets/img/image-12.png";
import Image13 from "../../assets/img/image-9.png";
import PeyKiperr from "../../assets/img/PeyKiper.svg";

function Footer() {
  const images = [
    { src: Image1, link: "https://frantsuz-club.ru/" },
    { src: Image2, link: "https://comicadze.ru/" },
    { src: Image3, link: "https://corp-pitanie.https//tyteda.ru/api/" },
    { src: Image4, link: "#" },
    { src: Image5, link: "https://xn--80aamqmn7eb2e.xn--p1ai/" },
    { src: Image6, link: "#" },
    { src: Image7, link: "https://pominki-dostavka.ru/" },
    { src: Image8, link: "https://tyteda.ru/" },
    { src: Image9, link: "https://poyuvsegda.ru" },
    { src: Image10, link: "#" },
    { src: Image11, link: "https://reiting.moscow/" },
    { src: Image12, link: "https://frantsuz.ru/" },
    { src: Image13, link: "https://wetop.ru/" },
  ];

  return (
    <footer className="footer" id="/home#contacts">
      <div className="footer__wrapper wrapper">
        <div className="footer__body">
          <a className="footer__logo" href="#">
            <img
              src={FooterLogo}
              className="footer__logo-image"
              alt="footer-logo"
            />
            <img className="PeyKiperImages" src={PeyKiperr} alt="" />
          </a>

          <div className="footer__columns">
            <div className="footer__column-contacts">
              <div className="footer__column-title">Контакты</div>
              <div className="footer__column-workingMode">
                <div className="footer__column-workingMode-icon contacts-icon">
                  <AccessTimeIcon fontSize="medium" />
                </div>
                Режим работы: <br />
                ВС-ЧТ C 11:00 до 1:00 <br />
                ПТ-СБ C 11:00 до 3:00
              </div>
              <div className="footer__column-address lato-semibold">
                <div className="footer__column-address-icon contacts-icon">
                  <PlaceIcon fontSize="medium" />
                </div>{" "}
                ул. Ленина, 36А Орехово-Зуево, Московская обл.
              </div>
              <a
                className="footer__column-phone lato-semibold"
                href="tel:+79680915551"
              >
                <div className="footer__column-phone-icon contacts-icon">
                  <PhoneEnabledIcon fontSize="medium" />
                </div>{" "}
                +7 (968) 091-55-51{" "}
              </a>
            </div>
            <div className="footer__column-projects">
              <div className="footer__column-title">Наши проекты</div>
              <div className="footer__column-projects-items">
                <Grid
                  container
                  direction="row"
                  rowSpacing={{ xs: 5, md: 3 }}
                  spacing={{ xs: 3 }}
                >
                  {images.map((imageData, index) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                      <div className="footer__column-projects-item">
                        <Link to={imageData.link}>
                          <img
                            src={imageData.src}
                            className="footer__column-projects-item-image"
                            alt="item-logo"
                          />
                        </Link>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
          <div className="footer__copy">
            <div className="footer__copy-item">
              ИП Авалян. В .Г <br />
              ИНН: 502807103555
            </div>
            <div className="footer__copy-center">
              <div className="footer__copy-center-item">
                © Все права защищены
              </div>
              <div className="footer__copy-item">
                Сделано WeTop digital agency 2023
              </div>
              <Link
                to="/PrivacyPolicy#privacyPolicy"
                className="footer__copy-center-item__Link"
              >
                Политика конфиденциальности
              </Link>
              <div className="footer__copy-center-item">
                Не явяляется публичной офертой
              </div>
            </div>
            
          </div>
          <div className="forPay">
            <Link className="footer__copy-center-item__Link" to={"/vozvrat"}>
              Возврат
            </Link>
            <Link className="footer__copy-center-item__Link" to={"/payRull"}>
              правила оплаты
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
