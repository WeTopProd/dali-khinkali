import React from "react";
import Typography from "@mui/material/Typography";
import InputMask from "react-input-mask";
import Box from "@mui/material/Box";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Alert, Button, Grid, Menu, Modal, TextField } from "@mui/material";
import styles from "../HeaderAuth.module.css";

const LogReg = ({
  handleOpen,
  handleClose,
  setEmail,
  signInError,
  setPassword,
  handleOpenSign,
  handleSignIn,
  openSign,
  handleCloseSign,
  setPhone,
  setFirstName,
  setLastName,
  setRePassword,
  handleSignUp,
  succes,
  styleSuccess,
  handleSuccessClose,
  style,
  open,
  Button,
  phone,
}) => (
  <>
    <Button size="large" onClick={handleOpen}>
      <Typography
        style={{
          color: "#fff",
          fontSize: "25px",
          fontSize: "calc(15px + 10 * ((100vw - 320px) / (1920 - 320)))",
          fontFamily: "Open Sans",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
        className={styles.btn}
      >
        Войти
      </Typography>
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
          placeholder="Почта или Телефон *"
          sx={{ "& fieldset": { border: "none" } }}
          onChange={(e) => setEmail(e.target.value)}
        />
        {signInError.email && (
          <Typography
            sx={{ pl: 3 }}
            variant="caption"
            color="red"
            display="block"
            gutterBottom
          >
            {signInError.email}
          </Typography>
        )}
        <TextField
          style={{
            background: "#fff",
            borderRadius: "50px",
            paddingLeft: "10px",
          }}
          type="password"
          fullWidth
          placeholder="Пароль"
          sx={{ mt: 2, "& fieldset": { border: "none" } }}
          onChange={(e) => setPassword(e.target.value)}
        />

        {signInError.password && (
          <Typography
            sx={{ pl: 3 }}
            variant="caption"
            color="red"
            display="block"
            gutterBottom
          >
            {signInError.password}
          </Typography>
        )}
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

        {signInError.non_field_errors &&
          signInError.non_field_errors.map((error, index) => (
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
                type="email"
                placeholder="Почта"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setEmail(e.target.value)}
              />
              {signInError.email && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.email}
                </Typography>
              )}
            </Grid>
            {/* //!Телефон * */}
            <Grid item xs={12} lg={6}>
              {/* <InputMask
                mask="+7(999)999-99-99"
                maskChar={null}
                className={styles.IMaskInputReg}
                value={phone}
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setPhone(e.target.value)}
              /> */}
              <TextField
                style={{
                  background: "#fff",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                }}
                fullWidth
                placeholder="Телефон *"
                type="phone"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              {signInError.phone && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.phone}
                </Typography>
              )}
            </Grid>

            {/* //!Имя * */}
            <Grid item xs={12} lg={6}>
              <TextField
                style={{
                  background: "#fff",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                }}
                fullWidth
                placeholder="Имя *"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {signInError.first_name && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.first_name}
                </Typography>
              )}
            </Grid>

            {/* //! Фамилия*/}
            <Grid item xs={12} lg={6}>
              <TextField
                style={{
                  background: "#fff",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                }}
                fullWidth
                type="text"
                placeholder="Фамилия"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setLastName(e.target.value)}
              />
              {signInError.last_name && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.last_name}
                </Typography>
              )}
            </Grid>

            {/* //!Пароль */}
            <Grid item xs={12} lg={6}>
              <TextField
                style={{
                  background: "#fff",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                }}
                fullWidth
                type="password"
                placeholder="Пароль"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setPassword(e.target.value)}
              />
              {signInError.password && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.password}
                </Typography>
              )}
            </Grid>

            {/* //!Повторить пароль */}
            <Grid item xs={12} lg={6}>
              <TextField
                style={{
                  background: "#fff",
                  borderRadius: "50px",
                  paddingLeft: "10px",
                }}
                fullWidth
                type="password"
                placeholder="Повторить пароль"
                sx={{ mt: 2, "& fieldset": { border: "none" } }}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {signInError.re_password && (
                <Typography
                  sx={{ pl: 3 }}
                  variant="caption"
                  color="red"
                  display="block"
                  gutterBottom
                >
                  {signInError.re_password}
                </Typography>
              )}
            </Grid>
          </Grid>

          {/* //!Есть аккаунт? */}
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

          {/* //!зарегистрироваться!*/}
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

    {/* //!Регистрация прошла успешно!*/}
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

export default LogReg;
