import React from "react";
import DeliveryBacground from "../../assets/img/delivery.png";
import DeliveryMobile from "../../assets/img/delivery-mobile.png";
import DeliveryCard from "../../assets/img/car.png";
import DeliveryLogo from "../../assets/img/Logo.png";
import { Container, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "../../assets/general-styles/styles.css";
import Styles from "./Deliver.module.css";

export default function Delivery() {
  return (
    <>
      <h3 className="title__pages_all">Доставка</h3>
      <Container
        maxWidth="lg"
        alignItems="center"
        sx={{ display: "flex", mt: 12, pl: 3, pr: 3 }}
        marginTop="-30px"
      >
        <div
          style={{
            background: `no-repeat center url(${DeliveryBacground}) #353339`,
            backgroundSize: "auto 100%",
            boxShadow: "0 0 76px 0px black",
            width: "100%",
            height: "100%",
            borderRadius: "20px",
            margin: "0 auto",
            position: "relative",
          }}
          sx={{
            pt: 4,
          }}
        >
          <Grid
            container
            justifyContent="center"
            marginTop="-100px"
            padding="50px 0"
          >
            {/* Img Delivery */}
            <Grid p={4} container item xs={12} lg={3} justifyContent="center">
              <img
                alignItems="center"
                justifyContent="center"
                src={DeliveryMobile}
                alt=""
                style={{
                  minWidth: "344px",
                  // height: "550.12px",
                  zIndex: "2",
                  filter: "drophadow(0px 4px 100px #000)",
                }}
              />
            </Grid>

            <Grid container item xs={12} lg={7} className={Styles.boXbtnText}>
              {/* Text Delivery */}
              <Typography
                variant="h3"
                className={Styles.titleDelivery}
                alignItems={"start"}
                justifyContent={"center"}
                p={4}
                sx={{
                  color: "#fff",
                  fontFamily: "Lato",
                  fontWeigh: "600",
                  paddingTop: "80px",
                }}
              >
                Закажи и следи за курьером в режиме Онлайн
              </Typography>
              {/* button */}
              <div className={Styles.buttonDelivery}>
                <Button
                  variant="contained"
                  sx={{
                    pl: 4,
                    pr: 4,
                    pt: 1.5,
                    pb: 1.5,

                    borderRadius: "10px",
                    zIndex: "1",
                    background: "#F69049",
                    "&:hover": {
                      background: "black",
                    },
                  }}
                >
                  Оформить заказ ДОСТАВКУ
                </Button>
              </div>
            </Grid>

            {/* background Car */}
            <Grid
              container
              justifyContent={"flex-end"}
              position="absolute"
              top="100px"
              left="90px"
            >
              <img
                className={Styles.carHover}
                src={DeliveryCard}
                alt=""
                style={{
                  boxShadow: "15px 0px 25px 10px rgba(#000)",
                }}
              />
            </Grid>

            {/* logo */}
            <Grid
              container
              justifyContent={"flex-end"}
              position="absolute"
              right="50px"
              bottom="30px"
            >
              <img className={Styles.logoDeliver} src={DeliveryLogo} alt="" />
            </Grid>
          </Grid>
        </div>
      </Container>
      <span id="/home#hall"></span>
    </>
  );
}
