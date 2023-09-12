import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHall.module.css";
import hallBackground from "../../assets/images/main-hall.png";
import hallImg from "../../assets/images/main-hall-img.png";
import {
    Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const MainHall = () => {
  // onst [age, setAge] = useState('Выбрать');
  const [host, setHost] = useState("1-8");
  const [value, setValue] = useState(null);

  // const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  const handleChangeHost = (event) => {
    setHost(event.target.value);
  };

  return (
    <>
      <div id="hall"
        style={{
          background: `no-repeat  left top url(${hallBackground})`,
          height: "100%",
          backgroundSize: "85% 100%",
        }}
      >
        <Typography sx={{ pt: 10 }} align="center" variant="h3" component="h3">
          Банкетный зал
        </Typography>
        <Grid
          container
          alignItems="center"
          rowSpacing={9}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item lg={6}>
            <Grid
              container
              alignItems="center"
              sx={{ mt: 3 }}
              rowSpacing={9}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Дата / Время</Typography>
              </Grid>
              <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <DatePicker label="Выбрать дату" variant="standard" />
                    <TimePicker label="Выбрать время" ampm={false} />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Имя</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="date"
                  // helperText="Выбрать дату"
                  placeholder="Ваше имя"
                  color="black"
                  // type="date"
                  variant="standard"
                  style={{ color: "#fff" }}
                  inputProps={{
                    style: { color: "white", fontSize: "2rem" },
                  }}

                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Телефон</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="date"
                  // helperText="Выбрать дату"
                  placeholder="Ваш телефон"
                  color="black"
                  // type="date"
                  variant="standard"
                  style={{ color: "#fff" }}
                  inputProps={{
                    style: { color: "white", fontSize: "2rem" },
                  }}

                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                />
              </Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Число гостей</Typography>
              </Grid>
              <Grid item xs={6}>
                <FormControl variant="standard" sx={{ minWidth: 120 }}>
                  {/* <InputLabel id="demo-simple-select-standard-label">Выбрать</InputLabel> */}
                  <Select
                    // labelId="demo-simple-select-standard-label"
                    // id="demo-simple-select-standard"
                    // label="Выбрать"
                    value={host}
                    defaultValue="1-8"
                    onChange={handleChangeHost}
                    className={styles.select}
                    color="black"
                    style={{
                      fontSize: "2rem",
                      background: "transparent",
                      color: "#fff",
                      "&:after": { borderBottom: "4px solid black" },
                    }}
                  >
                    <MenuItem
                      disabled
                      style={{ display: "none" }}
                      value={"1-8"}
                    >
                      1-8
                    </MenuItem>
                    <MenuItem value={"1"}>1</MenuItem>
                    <MenuItem value={"2"}>2</MenuItem>
                    <MenuItem value={"3"}>3</MenuItem>
                    <MenuItem value={"4"}>4</MenuItem>
                    <MenuItem value={"5"}>5</MenuItem>
                    <MenuItem value={"6"}>6</MenuItem>
                    <MenuItem value={"7"}>7</MenuItem>
                    <MenuItem value={"8"}>8</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={2}></Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">Коментарии</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="date"
                  // helperText="Выбрать дату"
                  placeholder="По желанию"
                  color="black"
                  // type="date"
                  variant="standard"
                  inputProps={{
                    style: { color: "white", fontSize: "2rem" },
                  }}
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
                />
              </Grid>


              <Grid item xs={12}>

              <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{m:8}}
                            style={{color:'#fff'}}
                            >                       
                                <Button size="large" variant="contained" color='black'>Забронировать</Button> 
                        </Grid>

              </Grid>
              
            </Grid>

           

          </Grid>
          <Grid item lg={12}>
            <div style={{height:'700px', background: `url(${hallImg}), 50% / cover no-repeat`, borderRadius:'20px' }} >

            </div>
            
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default MainHall;
