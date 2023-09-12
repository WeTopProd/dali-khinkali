import React, { useEffect, useState } from "react";
import styles from "./HeaderAuth.module.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Alert, Button, Grid, Menu, MenuItem, Modal, TextField } from "@mui/material";
import axios from 'axios';
import { AccountCircle } from "@mui/icons-material";
import API from '../../../api';


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    //   right: -3,
    //   top: 13,
    //   border: `2px solid ${theme.palette.background.paper}`,
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
  // border: '2px solid #000',
  boxShadow: 24,
  color: "#fff",
  p: "80px 70px",
  // p: 4,
};

const styleSuccess = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 400,
    bgcolor: "rgba(36, 36, 36, 0.7)",
    borderRadius: "50px",
    border: 'none',
    boxShadow: 24,
    color: "#fff",
    p: "80px 70px",
    // p: 4,
  };

const HeaderAuth = () => {

    const [token, setToken] = useState(JSON.parse(sessionStorage.getItem("auth_token")));
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRePassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [signInError, setSignInError] = useState([]);

    const [succes, setSuccess] = useState(false);
    const handleSuccessClose = () => {
        setSuccess(false);
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
    setOpen(false)
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





//   useEffect(() => {
//     // axios.get(`${baseURL}/1`).then((response) => {
//     //   setPost(response.data);
//     // });
//     setSignInError([]);
//   }, [setSignInError]);

  const handleSignIn = async() =>{
    let userData = {password, email}

    try {
        const response = await API.post('auth/token/login/', userData);
        setToken(response.data);
        setSignInError([]);
        sessionStorage.setItem("auth_token", JSON.stringify(response.data.auth_token));
        console.log(response.data);
    } catch (error) {
        setSignInError(error.response.data);
        console.log(error.response.data)
    }
  }

  const handleSignUp = async() =>  {
    let userData = {phone, first_name, last_name, email, password, re_password}

    try {
        const response = await API.post('users/', userData);
        // setToken(response.data);
        setSignInError([]);
        console.log(response.data);
        handleCloseSign()

        setSuccess(true)
        setTimeout(() => {
            setSuccess(false);
            setToken(response.data)}, 5000);
      } catch (error) {
        setSignInError(error.response.data);
        console.log(error);
      }
  }

  if (token) return (<>
   <div>
        <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        >
        <AccountCircle />
        </IconButton>
        <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseAnchor}
        >
        <MenuItem onClick={handleCloseAnchor}>Profile</MenuItem>
        <MenuItem onClick={handleCloseAnchor}>My account</MenuItem>
        </Menu>
    </div>
  </>)


  return (
    <>
      <Button size="large" onClick={handleOpen}>
        <Typography className={styles.btn}>Войти</Typography>
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="uppercase"
            sx={{ mb: 4 }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Вход в личный кабинет
          </Typography>
          <TextField
            style={{
              background: "#fff",
              borderRadius: "50px",
              paddingLeft: "10px",
            }}
            fullWidth
            placeholder="Почта или телефон"
            sx={{ "& fieldset": { border: "none" } }}
            onChange={(e) => setEmail(e.target.value)}
          />
          {signInError.email && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.email}</Typography>}
          <TextField
            style={{
              background: "#fff",
              borderRadius: "50px",
              paddingLeft: "10px",
            }}
            fullWidth
            placeholder="Пароль"
            sx={{ mt: 2, "& fieldset": { border: "none" } }}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {signInError.password && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.password}</Typography>}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="flex-center"
            sx={{ mt: 2 }}
          >
            <Typography fontSize={"1.2rem"}>Еще нет аккаунта?</Typography>

            <Button size="large" onClick={handleOpenSign}>
              <Typography className={styles.btn}>Зарегистрируйтесь!</Typography>
            </Button>
          </Grid>

          {signInError.non_field_errors && signInError.non_field_errors.map((error, index) => (
                <Alert key={index} variant="filled" severity="error">
                {error}
                 </Alert> 
            ))}

             

          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <Button
            onClick={handleSignIn}
              style={{
                borderRadius: "30px",
                padding: "1rem 2.5rem",
              }}
              color="black"
              variant="contained"
            >
              войти
            </Button>
          </Grid>
        </Box>
      </Modal>
      <Modal
        open={openSign}
        onClose={handleCloseSign}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            align="center"
            sx={{ mb: 4 }}
            className="uppercase"
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Регистрация
          </Typography>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Почта"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {signInError.email && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.email}</Typography>}
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Телефон"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {signInError.phone && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.phone}</Typography>}
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Имя"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                {signInError.first_name && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.first_name}</Typography>}
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Фамилия"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setLastName(e.target.value)}
                />
                {signInError.last_name && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.last_name}</Typography>}
              </Grid>

              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Пароль"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {signInError.password && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.password}</Typography>}
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  style={{
                    background: "#fff",
                    borderRadius: "50px",
                    paddingLeft: "10px",
                  }}
                  fullWidth
                  placeholder="Повторить пароль"
                  sx={{ mt: 2, "& fieldset": { border: "none" } }}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                {signInError.re_password && <Typography sx={{pl:3}} variant="caption" color='red' display="block" gutterBottom>{signInError.re_password}</Typography>}
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-center"
              sx={{ mt: 2 }}
            >
              <Typography fontSize={"1.2rem"}>Есть аккаунт?</Typography>

              <Button size="large" onClick={handleOpen}>
                <Typography className={styles.btn}>Войдите!</Typography>
              </Button>
            </Grid>
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Button
                style={{
                  borderRadius: "30px",
                  padding: "1rem 2.5rem",
                  color: "#fff",
                }}
                color="black"
                variant="contained"
                onClick={handleSignUp}
              >
                зарегистрироваться
              </Button>
            </Grid>
          </Box>
        </Box>
      </Modal>






      <Modal
        open={succes}
        onClose={handleSuccessClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleSuccess}>
          <Typography
            className="uppercase"
            sx={{ mb: 4 }}
            id="modal-modal-title"
            variant="h4"
            component="h2"
          >
            Регистрация прошла успешно!
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default HeaderAuth;
