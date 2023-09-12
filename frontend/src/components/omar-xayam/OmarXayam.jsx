import React from "react";
import "../../assets/general-styles/styles.css";
import Styles from "./OmarXayam.module.css";
import Button from "@mui/material/Button";

export default function Omar() {
  return (
    <>
      <div className={Styles.PagesOmar} id="kalyan">
        <div className={Styles.BlockOmarTitles}>
          <h1 className={Styles.OmarTitle}>омар хайям</h1>
          <p className={Styles.OmarSubTitle}>Вдохновение в каждом дымке</p>
        </div>
        <div className={Styles.OmarBtn}>
          <Button
            style={{
              background: "#f69049",
              padding: "10px 55px",
            }}
            variant="contained"
          >
            КАЛЬЯННАЯ КАРТА
          </Button>
        </div>
      </div>
    </>
  );
}
