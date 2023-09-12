import React, {useEffect, useState} from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import bannerFist from '../../assets/images/main-banner-1.jpeg';
import bannerSecond from '../../assets/images/main-banner-2.jpeg';
import bannerThird from '../../assets/images/main-banner-3.jpeg';
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";
import styles from './Main.module.css';
import Banner from "../../components/banner/Banner";
import { Typography } from "@mui/material";
import MainReserve from "../../components/mainReserve/MainReserve";
import MainDelivery from "../../components/mainDelivery/MainDelivery";
import MainHall from "../../components/mainHall/MainHall";
import Footer from "../../components/footer/footer";
import Taxi from "../../components/taxi/taxi";
import Delivery from "../../components/delivery/Delivery";
import { OndemandVideo } from "@mui/icons-material";
import Omar from "../../components/omar-xayam/OmarXayam";
import CustomSlider from "../../components/sub-menu/Sub-menu";





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Main = () => {

    return (
        <>

            <Container maxWidth="xl" className={styles.main}>

                <Banner url={'ss'} background={bannerFist} title='Основное меню' />

                <Banner url={'ss'} background={bannerSecond} title='Напитки' />

                <Banner url={'ss'} background={bannerThird} title='Бизнес ланч' />

            </Container>

            <CustomSlider/>


            <MainReserve />

            <Delivery />

            <MainHall />

            <Omar/>

            <Taxi/>

            <Footer/>

        </>
    );
};

export default Main;