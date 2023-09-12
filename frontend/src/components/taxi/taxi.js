import React from "react";
import "./taxi.css";
import ImageTaxi from "../../assets/img/taxi.jpg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BackDecorTaxi from "../../assets/img/taxi-decor.png";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

function Taxi() {
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
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="taxi" id="taxi">
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
                Такси Дали-Хинкали поможет решить вашу проблему
              </p>
              <Button
                className="taxi__order-button"
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "18px",
                  borderRadius: "20px",
                  fontSize: "16px",
                  width: '350px',
                }}
                onClick={handleOpen}
              >
                предзаказ
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img
        className="taxi__backgroundDecor"
        src={BackDecorTaxi}
        alt="decor"
      ></img>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form className="taxi__form" action="#" method="post">
          <div className="taxi__form-body">
            <h2 className="taxi__form-title">Бронирование такси</h2>

            <div className="taxi__form-field">
              <div className="taxi__form-labels">
              <label className="taxi__form-label" for="date-select">
                Дата
              </label>{" "}
              /{" "}
              <label className="taxi__form-label" for="time-select">
                Время
              </label>
              </div>
              <div className="taxi__form-select-inputs">
                <select
                  className="taxi__form-select"
                  name="date"
                  id="date-select"
                  required
                >
                  <option selected disabled></option>
                  <option>11 Мая</option>
                  <option>12 апреля</option>
                </select>{" "}
              
                <select
                  className="taxi__form-select"
                  name="time"
                  id="time-select"
                  required
                >
                  <option selected disabled></option>
                  <option>20:00</option>
                  <option>21:00</option>
                </select>{" "}

              </div>
            </div>

             <div className="taxi__form-field">
              <label className="taxi__form-label" for="name">
                Имя
              </label>

              <input
                className="taxi__form-input"
                id="name"
                type="text"
                name="name"
                required
              ></input>
            </div>
            <div className="taxi__form-field">
              <label className="taxi__form-label" for="phone">
                Телефон
              </label>
              <input
                className="taxi__form-input"
                id="phone"
                type="tel"
                name="phone"
                required
              ></input>
            </div>
            <div className="taxi__form-field">
              <label className="taxi__form-label" for="address">
                Адрес
              </label>
              <input
                className="taxi__form-input"
                id="address"
                type="text"
                name="address"
                required
              ></input>
            </div> 
            <Button
              className="taxi__order-button"
              type="submit"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "14px",
                borderRadius: "20px",
                fontSize: "16px",
                width: '350px',
              }}
              onClick={handleOpen}
            >
              предзаказ
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default Taxi;
