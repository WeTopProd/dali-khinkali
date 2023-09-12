import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router, Routes, Route, NavLink} from "react-router-dom";
import Main from "./pages/main/Main";
import Kalyan from "./pages/kalyan/Kalyan";
import Menu from "./pages/menu/Menu";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    info: {
      // light: blue[300],
      main: '#C59D5F',

    },
    black: {
      // light: blue[300],
      main: '#000',

    },
    white: {
      // light: blue[300],
      main: '#fff',

  },
  },
  typography: {
    // "fontFamily": `'BebasNeuePro', "Helvetica", "Arial", sans-serif`,
    // "fontFamily": `'Helvetica Neue', "Arial", sans-serif`,
    // font-family: "Helvetica Neue", Arial, sans-serif;
    // "fontSize": '1.2rem',
    // "fontWeightLight": 300,
    // "fontWeightRegular": 500,
    // "fontWeightMedium": 400,
    // "fontWeightBold": 500

  subtitle1: {
      fontSize: '2rem',
  },
},
});


const pages = [{'component':<Main/>, 'url':'/'}, {'component':<Menu/>, 'url':'/menu'},{'component':<Kalyan/>, 'url':'/kalyan'},];

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">


        <Router>
            <Header/>

            <Routes>
                {pages.map((page) => (
                    <Route key={page.url} path={page.url} element={page.component} />
                ))}


                {/*<Route path='/menu' element={<Dishes/>} />*/}
                {/*<Route path='/kalyan' element={<Basket/>} />*/}
                {/*<Route path="*" element={<Navigate to="/" replace />}/>*/}
            </Routes>
        </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
