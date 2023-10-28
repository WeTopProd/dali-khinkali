import React, { useEffect, useState } from "react";
import styles from "./MainHall.module.css";
import "../../assets/general-styles/styles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import reserveBackgroundRight from "../../assets/images/menu__hull.png";
import { Button, Container, TextField } from "@mui/material";
import Regsuccessfully from "./regsuccessfully/Regsuccessfully";
import { banquetHullApi } from "../../api/banquetApi";

const MainReserve = () => {
  const [successCard, setSuccessCard] = useState(false);
  //! предупреждение для поля если она не зопльнено
  const [validationMessage, setValidationMessage] = useState("");
  //! Молальное окно прошло успешно
  const [sucessCardReserveTable, setSucessCardReserveTable] = useState(false);

  //! ///////////////////////////////////

  //! ///////////////////////////////////
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsCount, setGuestsCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [optional, setOptional] = useState("");

  const handler = {
    name: (e) => {
      setName(e.target.value);
      console.log(name);
    },
    phone: (e) => {
      setPhone(e.target.value);
      console.log(phone);
    },
    optional: (e) => {
      setOptional(e.target.value);
      console.log(optional);
    },
    time: (e) => {
      setTime(`${e["$d"]}`.slice(15, 34));
      console.log(`${e["$d"]}`.slice(15, 34));
    },
    date: (e) => {
      setDate(`${e["$d"]}`.slice(0, 15));
      console.log(`${e["$d"]}`.slice(4, 15));
    },
    guestsCount: (e) => {
      setGuestsCount(e.target.value);
      console.log(guestsCount);
    },
  };

  const BanquetHallPreOrder = (e) => {
    if (false) {
      setValidationMessage("Это обязательное поле");

      return;
    } else {
      // BanquetHallPreOrder(true);

      const token = localStorage.getItem("token");
      const data = {
        date: date,
        count_people: guestsCountArr,
        event: "Событие",
        hall: "Зал",
        first_name: name,
        email_user: "---",
        phone: phone,
        additional_services: optional,
      };
      banquetHullApi(token, data)
        .then((data) => {
          setSuccessCard(true);
          setSucessCardReserveTable(true);
        })
        .then(() => {
          setTimeout(() => {
            setSucessCardReserveTable(false);
            setValidationMessage(false);
            // window.location.reload();
          }, 2500);
        })
        .catch((err) => alert(err));
    }
  };
  const guestsCountArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  return (
    <>
      <div>
        <div className={styles.backgroundBodyReserve}>
          <h3 className="title__pages_all">Банкетный зал</h3>
          <Container>
            <div className={styles.RowHull}>
              <div className="container__reserve">
                {/* Дата__и__время */}
                <div className="reserve__title__subtitle">
                  <div className="reserve__subtitle__left__hull">
                    Дата / Время *
                  </div>
                  <div className={styles.InputRowError}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <DatePicker
                          // !Убрать border у data and time

                          slotProps={{ textField: { variant: "standard" } }}
                          sx={{
                            width: "94%",
                            svg: { color: "#fff" },
                            input: { color: "#fff" },
                            label: {
                              color: "#fff",
                              fontSize:
                                "calc(15px + 11 * ((100vw - 320px) / (1920 - 320)));",
                              fontFamily: "Lato",
                              marginLeft: "6px",
                            },
                          }}
                          label="Выбрать дату"
                          variant="standard"
                          onChange={handler.date}
                        />

                        <TimePicker
                          // !Убрать border у data and time
                          slotProps={{ textField: { variant: "standard" } }}
                          sx={{
                            width: "100%",
                            svg: { color: "#fff" },
                            input: { color: "#fff" },
                            label: {
                              color: "#fff",
                              fontSize:
                                "calc(15px + 11 * ((100vw - 320px) / (1920 - 320)));",
                              fontFamily: "Lato",
                              marginLeft: "6px",
                            },
                          }}
                          label="Выбрать время"
                          ampm={false}
                          onChange={handler.time}
                        />
                      </DemoContainer>
                    </LocalizationProvider>
                    {validationMessage && (
                      <div style={{ color: "red" }}>{validationMessage}</div>
                    )}
                  </div>
                </div>

                {/* Имя *  */}
                <div className="reserve__title__subtitle">
                  <div className="reserve__subtitle__left__hull">Имя *</div>
                  <div className={styles.InputRowError}>
                    <TextField
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "#fff",
                            width: "300px",
                            fontFamily: "Lato",
                          },
                        },
                      }}
                      // autoFocus
                      margin="dense"
                      id="date"
                      placeholder="Ваше Имя *"
                      color="black"
                      variant="standard"
                      onChange={handler.name}
                    />
                    {validationMessage && (
                      <div style={{ color: "red" }}>{validationMessage}</div>
                    )}
                  </div>
                </div>

                {/* Телефон *  */}
                <div className="reserve__title__subtitle">
                  <div className="reserve__subtitle__left__hull">Телефон *</div>
                  <div className={styles.InputRowError}>
                    <TextField
                      InputProps={{
                        sx: {
                          "& input": {
                            color: "#fff",
                            width: "300px",
                            fontFamily: "Lato",
                          },
                        },
                      }}
                      // autoFocus
                      margin="dense"
                      id="date"
                      placeholder="Ваш Телефон *"
                      color="black"
                      variant="standard"
                      onChange={handler.phone}
                    />
                    {validationMessage && (
                      <div style={{ color: "red" }}>{validationMessage}</div>
                    )}
                  </div>
                </div>

                {/* Число гостей   */}
                <div className="reserve__title__subtitle">
                  <div className={styles.SelectReserveSelectRow}>
                    <div className="reserve__subtitle__left__hull">
                      Число гостей *
                    </div>
                    <div className={styles.InputRowError}>
                      <select
                        aria-invalid="false"
                        required
                        className={styles.ReserveOption}
                        onChange={handler.guestsCount}
                      >
                        <option hidden disabled selected>
                          1 - 30
                        </option>
                        {guestsCountArr.map((el) => {
                          return <option value={el}>{`${el}`}</option>;
                        })}
                      </select>
                      {validationMessage && (
                        <div style={{ color: "red" }}>{validationMessage}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* По желанию  */}
                <div className="reserve__title__subtitle">
                  <div className="reserve__subtitle__left__hull">
                    Комментарий
                  </div>
                  <TextField
                    InputProps={{
                      sx: {
                        "& input": {
                          color: "#fff",
                          width: "300px",
                          fontFamily: "Lato",
                        },
                      },
                    }}
                    // autoFocus
                    margin="dense"
                    id="date"
                    placeholder="По желанию"
                    color="black"
                    variant="standard"
                    onChange={handler.optional}
                  />
                </div>

                {/* Button__Bron */}

                <div className="reserve__buttton">
                  <span id="/home#kalyan"></span>
                  {sucessCardReserveTable ? (
                    <Regsuccessfully />
                  ) : (
                    <Button
                      className="reserve__order__button"
                      style={{
                        borderRadius: "20px",
                      }}
                      onClick={BanquetHallPreOrder}
                    >
                      Предзаказ
                    </Button>
                  )}
                </div>
              </div>

              {/* Hull__Background__Right */}
              <div className={styles.backgroundHull}>
                <img src={reserveBackgroundRight} alt="Images" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MainReserve;
