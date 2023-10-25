import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { NavLink } from "react-router-dom";
import styles from "./Banner.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Banner = (props) => {
  return (
    <div className={styles.bannerContainer}>
      <div
        className={styles.banner}
        style={{
          background: `linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ), url(${props.background}) center no-repeat `,
          backgroundSize: "cover",
        }}
      >
        <NavLink to={props.url}>{props.title}</NavLink>
      </div>
    </div>
  );
};

export default Banner;
