import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
// import Images
import bannerFist from "../../assets/images/main-banner-1.jpeg";
import bannerSecond from "../../assets/images/main-banner-2.jpeg";
import bannerThird from "../../assets/images/main-banner-3.jpeg";
import addServicesBanner from "../../assets/img/addServicesBanner.jpeg";
// import styles
import styles from "./Main.module.css";
// import components
import Banner from "../../components/banner/Banner";
import MainReserve from "../../components/mainReserve/MainReserve";
import MainHall from "../../components/mainHall/MainHall";
import Footer from "../../components/footer/footer";
import Taxi from "../../components/taxi/taxi";
import Delivery from "../../components/delivery/Delivery";
import Omar from "../../components/omar-xayam/OmarXayam";
import CustomSlider from "../../components/sub-menu/Sub-menu";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Main = ({basketItems,setBasketItems}) => {
  return (
    <div id="/home#homePages">
      <br />
      <Container maxWidth="xl" className={styles.bannerContainer}>
        <Banner
          url={"/main-menu"}
          background={bannerFist}
          title="Основное меню"
        />
        <Banner url={"/drinks"} background={bannerSecond} title="Напитки" />
        <Banner
          url={"/business-lunch"}
          background={bannerThird}
          title="Бизнес ланч"
        />
        <Banner
          url={"/additionalServices"}
          background={addServicesBanner}
          title="Доп услуги"
        />
      </Container>

      <CustomSlider setBasketItems={setBasketItems} basketItems={basketItems} />

      <MainReserve />

      <Delivery />

      <MainHall />

      <Omar />

      <Taxi />

      <Footer />
    </div>
  );
};

export default Main;
