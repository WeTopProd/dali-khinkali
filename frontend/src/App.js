import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import Menu from "./pages/menu/Menu";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Drinks from "./pages/menu/beverages/Beverages";
import Lunch from "./pages/menu/business-lunch/Business-lunch";
import MenuBanner from "./pages/menu/Menu";
import AddServicesBanner from "./pages//menu/additionalServices/AdditionalServices";
import { PrivacyPolicy } from "./components/footer/privacyPolicy/PrivacyPolicy";
import Delivery from "./components/delivery/Delivery";
import { HeaderKalyan } from "./components/omar-xayam/kalyan/HeaderKalyan";

function App() {
  const [add, setAdd] = useState(false);
  const [basketItems, setBasketItems] = useState([]);

  function setBasketItemsFunction(perremenay) {
    setBasketItems(perremenay);
  }
  const token = sessionStorage.getItem("auth_token");
  async function addToCart(id, token) {
    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/goods/${id}/shopping_cart/`,
        null,
        {
          headers: {
            authorization: `Token ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }

    setAdd(true);
  }

  const theme = createTheme({
    palette: {
      info: {
        main: "#C59D5F",
      },
      black: {
        main: "#000",
      },
      white: {
        main: "#fff",
      },
    },
    typography: {
      subtitle1: {
        fontSize: "2rem",
      },
    },
  });

  const pages = [
    { component: <HeaderKalyan />, url: "/kalyan" },
    {
      component: (
        <Delivery
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/menu",
    },
    {
      component: (
        <Main
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/home",
    },
    {
      component: (
        <Menu
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/menu/",
    },
    {
      component: (
        <MenuBanner
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/main-menu",
    },
    {
      component: (
        <Lunch
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/business-lunch",
    },
    {
      component: (
        <Drinks
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/drinks",
    },
    {
      component: (
        <AddServicesBanner
          basketItems={basketItems}
          setBasketItems={setBasketItemsFunction}
        />
      ),
      url: "/additionalServices",
    },
    { component: <PrivacyPolicy />, url: "/privacyPolicy" },
  ];
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Header
            basketItems={basketItems}
            setBasketItems={setBasketItemsFunction}
          />
          <Routes>
            {pages.map((page) => (
              <Route key={page.url} path={page.url} element={page.component} />
            ))}
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
