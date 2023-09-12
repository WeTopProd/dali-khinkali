import React, {useEffect, useState} from "react";
import styles from './MainDelivery.module.css';
import mainDeliveryImg from '../../assets/images/main-delivery.png';
import mainDeliveryPhoneImg from '../../assets/images/main-delivery-phone.png';
import {Container, Grid} from "@mui/material";


const MainDelivery = () => {
    return (
        <>
            <Container sx={{my:10}}>
                <div style={{width:'100%', height:'600px', background:`url(${mainDeliveryImg})`, borderRadius:'20px', filter: 'drop-shadow(0px 4px 100px #000)' }} >

                    <Grid container spacing={2}>
                        <Grid item xs={4} container justifyContent="end">
                            <img className={styles.deliveryPhone} src={mainDeliveryPhoneImg} alt=""/>
                        </Grid>
                        <Grid item xs={8}>
                           textsdasd
                        </Grid>
                    </Grid>

                </div>
            </Container>
        </>
    );
};

export default MainDelivery;