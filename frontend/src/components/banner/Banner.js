import React, {useEffect, useState} from "react";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container";
import {NavLink} from "react-router-dom";
import styles from './Banner.module.css';





const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Banner = (props) => {
    return (
        <>
            <div className={styles.banner} style={{background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), lightgray -73px -1157.179px / 109.402% 640% url(' + props.background + ')'}}>
                <NavLink to={'ss'}>{props.title}</NavLink>
            </div>
        </>
    );
};

export default Banner;