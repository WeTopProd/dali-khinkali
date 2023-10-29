import React, { useState, useEffect } from "react";
import "./taxi.css";
import ImageTaxi from "../../assets/img/taxi.jpg";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers";
import "../../assets/general-styles/styles.css";
import Regsuccessfully from "./regsuccessfully/Regsuccessfully";
import { reserveApi } from "../../api/reserveApi";

function Taxi() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setErro] = useState("");

  //! Молальное окно прошло успешно
  const [sucessCardReserveTable, setSucessCardReserveTable] = useState(false);

  const handler = {
    name: (e) => {
      setName(e.target.value);
    },
    phone: (e) => {
      setPhone(e.target.value);
    },
    address: (e) => {
      setAddress(e.target.value);
    },
    time: (e) => {
      setTime(`${e["$d"]}`.slice(15, 34));
    },
    date: (e) => {
      setDate(`${e["$d"]}`.slice(0, 15));
      console.log(`${e["$d"]}`.slice(4, 15));
    },
    submit:()=>{
      const token = localStorage.getItem('token')
      const data = {
        date: date,
        time: time,
        first_name: name,
        phone: phone,
        address: address,
      };

      reserveApi.taxi(token,data).then((data)=>{
handlerReserveTable(true);
      }).catch((err)=>alert(err.message))
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handlerReserveTable = () => {
    if (!time) {
      setErro("Выберите дату и время");
    } else {
      setSucessCardReserveTable(true);
      setTimeout(() => {
        setOpen(false);
        setSucessCardReserveTable(false);
      }, 4000);
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="taxi">
      <div className="taxi__wrapper wrapper">
        <div className="taxi__body">
          <h2 className="taxi__title">Такси до дома</h2>
          <div className="taxi__content">
            <div className="taxi__image-block">
              <img className="taxi__image" src={ImageTaxi} alt="taxi"></img>
            </div>
            <div className="taxi__order-block">
              <p className="taxi__order-info">
                Проблема добраться домой в позднее время? <br />
                Услуга " такси Дали-Хинкали " поможет решить Вашу проблему
              </p>
              <Button
                className="taxi__order-button"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "18px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "93%",
                }}
                onClick={handleOpen}
              >
                предзаказ
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="taxi__form">
          <div className="taxi__form-body">
            <h2 className="taxi__form-title">Бронирование такси</h2>

            <div className="form__data__center">
              <div>
                <div className="taxi__form-field">
                  <div></div>
                  <div className="taxi__form-labels">
                    <label className="taxi__form-label" for="date-select">
                      Дата
                    </label>
                    /
                    <label className="taxi__form-label" for="time-select">
                      Время *
                    </label>
                  </div>

                  <div className="taxi__form-select-inputs">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={["TimePicker"]}>
                        <div>
                          <div className="rowError">
                            <DatePicker
                              // !Убрать border у data and time
                              disablePast
                              slotProps={{ textField: { variant: "standard" } }}
                              sx={{
                                margin: "0 42px 0 0",
                                width: "40% !important",
                                height: "5% !important",
                                padding: "0 !important",
                                svg: { color: "#000" },
                                input: {
                                  color: "#000",
                                  height: "15px",
                                  width: "100px",
                                },
                                right: "0px !important",
                                padding: "0px !important",
                                label: {
                                  color: "black",
                                  // fontSize:
                                  //   "calc(15px + 11 * ((100vw - 320px) / (1920 - 320)));",
                                  fontFamily: "Lato",
                                },
                              }}
                              label="Выбрать дату"
                              onChange={handler.date}
                            />
                            <TimePicker
                              // !Убрать border у data and time
                              slotProps={{ textField: { variant: "standard" } }}
                              sx={{
                                // width: "50% !important",
                                svg: { color: "#000" },

                                input: {
                                  color: "#000",
                                  height: "15px",
                                  width: "120px",
                                },
                                label: {
                                  color: "black",
                                  // fontSize:
                                  //   "calc(15px + 11 * ((100vw - 320px) / (1920 - 320)));",
                                  fontFamily: "Lato",
                                  marginLeft: "6px",
                                  marginTop: "0 !important",
                                },
                              }}
                              label="Выбрать время"
                              ampm={false}
                              onChange={handler.time}
                            />
                          </div>
                          {error && (
                            <div style={{ color: "red", textAlign: "left" }}>
                              {error}
                            </div>
                          )}
                        </div>
                      </DemoContainer>
                    </LocalizationProvider>
                  </div>
                </div>

                <div className="taxi__form-field">
                  <label className="taxi__form-label" for="name">
                    Имя *
                  </label>

                  <input
                    className="taxi__form-input"
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={name}
                    onChange={handler.name}
                  ></input>
                </div>
                <div className="taxi__form-field">
                  <label className="taxi__form-label" for="phone">
                    Телефон *
                  </label>
                  <input
                    className="taxi__form-input"
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    value={phone}
                    onChange={handler.phone}
                  ></input>
                </div>
                <div className="taxi__form-field">
                  <label className="taxi__form-label" for="address">
                    Адрес *
                  </label>
                  <input
                    className="taxi__form-input"
                    id="address"
                    type="text"
                    name="address"
                    required
                    value={address}
                    onChange={handler.address}
                  />
                </div>
              </div>
            </div>
            {sucessCardReserveTable ? (
              <Regsuccessfully />
            ) : (
              <button
                className="taxi__order-button"
                style={{
                  color: "white",
                  backgroundColor: "#ff6900",
                  padding: "15px 65px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: "60%",
                }}
                onClick={() => handler.submit()}
              >
                предзаказ
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Taxi;
