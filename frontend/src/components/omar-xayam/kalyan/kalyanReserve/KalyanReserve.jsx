import React, { useState } from "react";
import stylesKalyan from "./KalyanReserve.module.css";
//
import styles from "./MainReserve.module.css";
import "../../../../assets/general-styles/styles.css";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { Button, Container, TextField } from "@mui/material";
import Zal from "./zal/Zal";
import Veranda from "./veranda/Veranda";
import Regsuccessfully from "./regsuccessfully/Regsuccessfully";
import dayjs from "dayjs";

export const KalyanReserve = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [showTableNumber, setShowTableNumber] = useState(false);
  //! предупреждение для поля если она не зопльнено
  const [validationMessage, setValidationMessage] = useState("");
  const [errors, setErrors] = useState({});

  //! Молальное окно прошло успешно
  const [sucessCardReserveTable, setSucessCardReserveTable] = useState(false);

  const handlerReserveTable = () => {
    let errorMessages = {};
    const maxGuests = place === "Зал" ? 26 : 50;

    if (!place.trim()) {
      errorMessages = { ...errorMessages, place: "обязательное поле" };
    }
    if (!name.trim()) {
      errorMessages = { ...errorMessages, name: "обязательное поле" };
    }
    if (!phone.trim()) {
      errorMessages = { ...errorMessages, phone: "обязательное поле" };
    }
    if (!date) {
      errorMessages = { ...errorMessages, date: "обязательное поле" };
    }
    if (!time) {
      errorMessages = {
        ...errorMessages,
        time: "Некоректное время: Заведение работает с 11:00 до 3:00",
      };
    }

    if (Number(guestsCount) <= 0 || Number(guestsCount) > maxGuests) {
      errorMessages = {
        ...errorMessages,
        guestsCount: `Введите корректное число гостей (не более ${maxGuests})`,
      };
    }

    if (Object.keys(errorMessages).length > 0) {
      setErrors(errorMessages);
      return;
    }

    setSucessCardReserveTable(true);
    setTimeout(() => {
      setSucessCardReserveTable(false);
      setErrors({});
    }, 4000);
  };

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guestsCount, setGuestsCount] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [optional, setOptional] = useState("");
  const [place, setPlace] = useState("");
  const [placeLimit, setPlaceLimit] = useState("");

  const handler = {
    name: (e) => {
      setName(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    optional: (e) => {
      setOptional(e.target.value);
    },
    time: (timeValue) => {
      if (timeValue && timeValue["$d"]) {
        const time = dayjs(timeValue["$d"]);
        const elevenAM = dayjs().hour(11).minute(0);
        const threeAM = dayjs().hour(3).minute(0);

        if (time.isBefore(elevenAM) && time.isAfter(threeAM)) {
          alert("Некоректное время: Заведение работает с 11:00 до 3:00");
        } else {
          setTime(`${timeValue["$d"]}`.slice(15, 34));
        }
      }
    },

    date: (e) => {
      if (e && e["$d"]) {
        setDate(`${e["$d"]}`.slice(0, 15));
        console.log(`${e["$d"]}`.slice(4, 15));
      } else {
      }
    },

    guestsCount: (e) => {
      const enteredGuestsCount = Number(e.target.value);
      const maxGuests = placeLimit === "Зал" ? 26 : 50;

      if (enteredGuestsCount > maxGuests) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          guestsCount: `Максимальное число гостей составляет ${maxGuests}`,
        }));
        setGuestsCount(maxGuests);
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, guestsCount: undefined }));
        setGuestsCount(enteredGuestsCount);
      }
    },

    place: (e) => {
      const selectedOption = e.target.value;
      setPlace(selectedOption);
      setPlaceLimit(selectedOption);
      const maxGuests = placeLimit === "Зал" ? 26 : 50;

      setGuestsCount((prevCount) => Math.min(prevCount, maxGuests));

      setShowTableNumber(
        e.target.value === "Зал" || e.target.value === "Веранда"
      );

      if (e.target.value === "Зал") {
        setIsModalOpen(true);
      } else if (e.target.value === "Веранда") {
        setIsModalOpen(true);
      } else {
        setIsModalOpen(false);
      }
    },
    placeZal: (num) => {
      setPlace(num);
    },
    placeVeranda: (num) => {
      setPlace(num);
    },
  };
  return (
    <>
      <div className={stylesKalyan.KalyanReservePages}>
        <div className={stylesKalyan.KalyanReserveContainer}>
          <h3>Почувствуй нашу атмосферу </h3>
        </div>
        <div className={stylesKalyan.KalyanReserveVideo}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DQWMvj3_hJg?si=JvBLi9PZ07s2soQx"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className={styles.backgroundBodyReserve}>
          <h3 className="title__pages_all">Бронь стола</h3>

          <Container className={styles.ContainerCenter}>
            <div className="container__reserve reserve">
              {/* Зал__и__веранда */}

              <div className="reserve__title__subtitle">
                <div className={styles.SelectReserveSelectRow}>
                  <div className="reserve__subtitle__left">Зал / Веранда *</div>
                  <div className={styles.InputRowError}>
                    <div>
                      <select
                        aria-invalid="false"
                        className={styles.ReserveOption}
                        onChange={handler.place}
                        onClick={handler.place}
                      >
                        <option hidden disabled selected>
                          Выбрать
                        </option>
                        <option value="Зал">Зал</option>
                        <option value="Веранда">Веранда</option>
                      </select>
                      {showTableNumber && (
                        <span className={styles.spanReserve}>
                          {" Стол №:"} {place.indexOf("Table") && `${place}`}
                        </span>
                      )}
                    </div>
                    {errors.place && (
                      <div style={{ color: "red" }}>{errors.place}</div>
                    )}
                  </div>
                </div>
              </div>
              {isModalOpen ? (
                place === "Зал" ? (
                  <Zal closeModal={closeModal} handler={handler.placeZal} />
                ) : (
                  <Veranda
                    closeModal={closeModal}
                    handler={handler.placeVeranda}
                  />
                )
              ) : null}

              {/* Дата__и__время */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Дата / Время *</div>

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["TimePicker"]}>
                    <div
                      className={styles.InputRowError}
                      style={{ margin: "0 45px 0 0" }}
                    >
                      <DatePicker
                        // !Убрать border у data and time
                        disablePast
                        slotProps={{ textField: { variant: "standard" } }}
                        sx={{
                          maxWidth: "94%",
                          svg: { color: "#fff" },
                          input: { color: "#fff" },
                          label: {
                            color: "#fff",
                            fontSize:
                              "calc(15px + 12 * ((100vw - 320px) / (1920 - 320)))",
                            fontFamily: "Lato",
                            marginLeft: "6px",
                          },
                        }}
                        label="Выбрать дату"
                        variant="standard"
                        onChange={handler.date}
                      />
                      {errors.date && (
                        <div style={{ color: "red" }}>{errors.date}</div>
                      )}
                    </div>

                    <div className={styles.InputRowError}>
                      <TimePicker
                        // !Убрать border у data and time
                        slotProps={{ textField: { variant: "standard" } }}
                        sx={{
                          width: "50%",
                          svg: { color: "#fff" },
                          input: { color: "#fff" },
                          label: {
                            color: "#fff",
                            fontSize:
                              "calc(15px + 12 * ((100vw - 320px) / (1920 - 320)))",
                            fontFamily: "Lato",
                            marginLeft: "6px",
                          },
                        }}
                        label="Выбрать время"
                        ampm={false}
                        onChange={handler.time}
                      />
                      {errors.time && (
                        <div style={{ color: "red" }}>{errors.time}</div>
                      )}
                    </div>
                  </DemoContainer>
                </LocalizationProvider>
              </div>

              {/* Имя *  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Имя *</div>
                <div className={styles.InputRowError}>
                  <TextField
                    InputProps={{
                      sx: {
                        "& input": {
                          color: "#fff",
                          width: "479px",
                          fontFamily: "Lato",
                        },
                      },
                    }}
                    required
                    margin="dense"
                    id="date"
                    placeholder="Ваше имя"
                    color="black"
                    variant="standard"
                    value={name}
                    onChange={handler.name}
                  />
                  {errors.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
                </div>
              </div>

              {/* Телефон *  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Телефон *</div>
                <div className={styles.InputRowError}>
                  <TextField
                    InputProps={{
                      sx: {
                        "& input": {
                          color: "#fff",
                          width: "479px",
                          fontFamily: "Lato",
                        },
                      },
                    }}
                    required
                    // autoFocus
                    margin="dense"
                    id="date"
                    placeholder="Ваш телефон"
                    type="number"
                    color="black"
                    variant="standard"
                    value={phone}
                    onChange={handler.phone}
                  />
                  {errors.phone && (
                    <div style={{ color: "red" }}>{errors.phone}</div>
                  )}
                </div>
              </div>

              {/* Число гостей   */}
              <div className="reserve__title__subtitle">
                <div className={styles.SelectReserveSelectRow}>
                  <div className="reserve__subtitle__left">Число гостей *</div>
                  <div className={styles.InputRowError}>
                    <input
                      className={styles.ReserveOption}
                      onChange={handler.guestsCount}
                      type="number"
                      placeholder="Число гостей"
                      required
                      max={placeLimit == "Зал" ? 26 : 50}
                    />

                    {errors.guestsCount && (
                      <div style={{ color: "red" }}>{errors.guestsCount}</div>
                    )}
                  </div>
                </div>
              </div>

              {/* По желанию  */}
              <div className="reserve__title__subtitle">
                <div className="reserve__subtitle__left">Комментарий</div>
                <TextField
                  InputProps={{
                    sx: {
                      "& input": {
                        color: "#fff",
                        width: "479px",
                        fontFamily: "Lato",
                      },
                    },
                  }}
                  margin="dense"
                  id="date"
                  placeholder="По желанию"
                  color="black"
                  variant="standard"
                  value={optional}
                  onChange={handler.optional}
                />
              </div>

              {/* Button__Bron */}
              <div className="reserve__buttton">
                <span id="/home#delivery"></span>
                {sucessCardReserveTable ? (
                  <Regsuccessfully />
                ) : (
                  <Button
                    className="reserve__order__button"
                    style={{
                      borderRadius: "20px",
                    }}
                    onClick={() => {
                      handlerReserveTable(true);
                    }}
                  >
                    Забронировать
                  </Button>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};
