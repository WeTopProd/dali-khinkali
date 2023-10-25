import React, { useEffect, useState } from "react";
import styles from "./HeaderAuth.module.css";
import { IMaskInput } from "react-imask";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import "../../../assets/general-styles/styles.css";

import { Alert, Button, Grid, Menu, Modal, TextField } from "@mui/material";

import { AccountCircle } from "@mui/icons-material";
import API from "../../../api";

//! import modals

import { PersonalInfo } from "../UserModal/PersonalInfo";
import MyDetails from "../UserModal/MyDetails/MyDetails";
import HistoryOfOrders from "../UserModal/MyOrders/HistoryOfOrders";
import MyAddresses from "../UserModal/MyAddresses/MyAddresses";
import Loged from "./authComponents/Loged";
import LogReg from "./authComponents/LogReg";
import { userApi } from "../../../api/userApi";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    padding: "0 4px",
    color: "inherit",
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "#242424",
  borderRadius: "50px",
  boxShadow: 24,
  color: "#fff",
  p: "80px 70px",
};

const styleSuccess = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  bgcolor: "rgba(36, 36, 36, 0.7)",
  borderRadius: "50px",
  border: "none",
  boxShadow: 24,
  color: "#fff",
  p: "80px 70px",
};

const ModalUser = {
  position: "relative",
};

const StyleModalUserInfo = {
  position: "absolute",
  top: "0",
  right: "0",
};

const HeaderAuth = () => {
  const [token, setToken] = useState(
    sessionStorage["auth_token"]
      ? sessionStorage.getItem("auth_token")
      : // .slice(1, sessionStorage.getItem("auth_token").length - 1)
        null
  );

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [signInError, setSignInError] = useState([]);

  const [succes, setSuccess] = useState(false);
  const handleSuccessClose = () => {
    setSuccess(true);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpenSign(false);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSignInError([]);
  };

  const [openSign, setOpenSign] = useState(false);
  const handleOpenSign = () => {
    handleClose();
    setOpenSign(true);
  };
  const handleCloseSign = () => setOpenSign(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  const handleSignIn = async () => {
    let userData = { password, email };

    try {
      const response = await API.post("auth/token/login/", userData);
      setToken(response.data.auth_token);
      setSignInError([]);
      sessionStorage.setItem("auth_token", response.data.auth_token);

      const data = await response.data["auth_token"];
      localStorage.setItem("token", data);
    } catch (error) {
      setSignInError(error.response.data);
      console.log(error.response.data);
    }
  };

  const handleSignUp = async () => {
    let userData = {
      phone,
      first_name,
      last_name,
      email,
      password,
      re_password,
    };

    try {
      const response = await API.post("users/", userData);
      // setToken(response.data);
      setSignInError([]);
      console.log(response.data.auth_token, "00000000");
      handleCloseSign();

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setToken(response.data.auth_token);
        sessionStorage.setItem("auth_token", response.data.auth_token);
      }, 5000);
    } catch (error) {
      setSignInError(error.response.data);
      console.log(error);
    }
  };

  {
    /* PersonalInfo МyDetails MyAddresses AddAddresses EditMyAddresses HistoryOfOrders */
  }

  const [personalModal, setPersonalModal] = useState("PersonalInfo");

  const [userInfo, setUserInfo] = useState({
    phone: "",
    first_name: false,
    last_name: "",
    id: "",
    email: "",
  });

  const [useEffectStopper, setUseEffectStopper] = useState(0);

  // UserInfo Get Request
  useEffect(() => {
    // console.log(token, "token 203");
    token &&
      userApi
        .get(token)
        .then((data) => !userInfo.first_name && setUserInfo(data))
        .then(() => {
          !userInfo.first_name && setUseEffectStopper((prev) => prev + 1);
        });
    return () => {};
  }, [token, useEffectStopper]);

  return (
    <>
      {token ? (
        <Loged
          handleMenu={handleMenu}
          ModalUser={ModalUser}
          AccountCircle={AccountCircle}
          Menu={Menu}
          StyleModalUserInfo={StyleModalUserInfo}
          anchorEl={anchorEl}
          handleCloseAnchor={handleCloseAnchor}
          personalModal={personalModal}
          PersonalInfo={PersonalInfo}
          setPersonalModal={setPersonalModal}
          MyDetails={MyDetails}
          MyAddresses={MyAddresses}
          HistoryOfOrders={HistoryOfOrders}
          userInfo={userInfo}
        />
      ) : (
        <LogReg
          phone={phone}
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setEmail={setEmail}
          signInError={signInError}
          setPassword={setPassword}
          handleOpenSign={handleOpenSign}
          handleSignIn={handleSignIn}
          openSign={openSign}
          handleCloseSign={handleCloseSign}
          setPhone={setPhone}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setRePassword={setRePassword}
          handleSignUp={handleSignUp}
          succes={succes}
          styleSuccess={styleSuccess}
          handleSuccessClose={handleSuccessClose}
          style={style}
          Button={Button}
        />
      )}
    </>
  );
};

export default HeaderAuth;
