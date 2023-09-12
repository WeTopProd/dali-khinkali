import React from 'react';
import './footer.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Icon from '@mui/material/Icon';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PlaceIcon from '@mui/icons-material/Place';
import MonseratRegular from '../../assets/fonts/Montserrat-Regular.woff2';
import MonseratBold from '../../assets/fonts/Montserrat-Bold.woff2';
import LatoSemiBold from '../../assets/fonts/latosemibold.woff2';
import LatoRegular from '../../assets/fonts/latoregular.woff2';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import FooterLogo from '../../assets/img/footer-logo.png'
import Image1 from '../../assets/img/image-1.png'
import Image2 from '../../assets/img/image-2.png'
import Image3 from '../../assets/img/image-3.png'
import Image4 from '../../assets/img/image-4.png'
import Image5 from '../../assets/img/image-5.png'
import Image6 from '../../assets/img/image-6.png'
import Image7 from '../../assets/img/image-7.png'
import Image8 from '../../assets/img/image-8.png'
import Image9 from '../../assets/img/image-9.png'
import Image10 from '../../assets/img/image-10.png'
import Image11 from '../../assets/img/image-11.png'
import Image12 from '../../assets/img/image-12.png'

function Footer() {

    const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12]

    // const theme = createTheme({
    //     typography: {
    //         latosemibold: {
    //             fontSize: '1.615rem',
    //             fontWeight: 600,
    //             lineHeight: 'normal',
    //         },
    //         iconswidth: {
    //             width: 18,
    //             height: 18,
    //         }
    //     }
    // });


    return (
            <footer className='footer' id='contacts'>
                <div className='footer__wrapper wrapper'>
                    <div className='footer__body'>
                        <a className='footer__logo'
                            href='#'
                        >
                            <img src={FooterLogo} className='footer__logo-image' alt='footer-logo'></img>
                        </a>

                        <div className='footer__columns'>
                            <div className='footer__column-contacts'>
                                <div className='footer__column-title'>
                                    Контакты
                                </div>
                                <div className='footer__column-workingMode'>
                                    <div className='footer__column-workingMode-icon contacts-icon'><AccessTimeIcon fontSize='medium' /></div>
                                    Режим работы: <br />

                                    ВС-ЧТ C 11:00 до 1:00 <br />
                                    ПТ-СБ C 11:00 до 3:00

                                </div>
                                <div className='footer__column-address lato-semibold'><div className='footer__column-address-icon contacts-icon'><PlaceIcon fontSize='medium' /></div> ул. Ленина, 36А, Орехово-Зуево, Московская обл.</div>
                               <a className='footer__column-phone lato-semibold' href='tel:+79680915551'><div className='footer__column-phone-icon contacts-icon'><PhoneEnabledIcon fontSize='medium' /></div> +7 (968) 091-55-51 </a>
                            </div>
                            <div className='footer__column-projects'>
                                <div className='footer__column-title'>
                                    Наши проекты
                                </div>
                                <div className='footer__column-projects-items'>
                        
                                    <Grid container direction="row" rowSpacing= {{ xs: 5, md: 3 }} spacing={{ xs: 3 }} >
                                        {images.map((image, index) => (
                                            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                                <div className='footer__column-projects-item'><img src={image} className='footer__column-projects-item-image' alt='item-logo'></img></div>
                                            </Grid>
                                        ))}
                                    </Grid>


                                </div>
                            </div>
                        </div>
                        <div className='footer__copy'>
                            <div className='footer__copy-item'>ИП Авалян. В .Г <br />
                                ИНН: 502807103555
                            </div>
                            <div className='footer__copy-center'>
                                <div className='footer__copy-center-item'>©Все права защищены</div>
                                <div className='footer__copy-center-item'>Политика конфиденциальности</div>
                                <div className='footer__copy-center-item'>Не явялякется публичной офертой</div>
                            </div>
                            <div className='footer__copy-item'>Сделано WeTop digital agency 2023</div>
                        </div>
                    </div>
                </div>
            </footer>
    );
}

export default Footer;
