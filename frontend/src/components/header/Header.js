import styles from './Header.module.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../../assets/images/logo.png';

import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


import {Link, NavLink, useNavigate} from 'react-router-dom';
import { Button, Grid, Modal, TextField } from '@mui/material';
import HeaderAuth from './headerAuth/HeaderAuth';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
    //   right: -3,
    //   top: 13,
    //   border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
      color:'inherit'
    },
  }));


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400,
    bgcolor: '#242424',
    borderRadius: '50px',
    // border: '2px solid #000',
    boxShadow: 24,
    color: '#fff',
    p: '80px 70px',
    // p: 4,
  };

const pages = [
    {'name':'Главная', 'url':'/'},
    {'name':'Меню ', 'url':'/menu'},
    {'name':'Резерв стола', 'url':'#table-reserve'},
    {'name':'Доставка', 'url':'#delivery'},
    {'name':'Банкеты', 'url':'#hall'},
    {'name':'КАЛЬЯН', 'url':'#kalyan'},
    {'name':'такси', 'url':'#taxi'},
    {'name':'Контакты', 'url':'#contacts'},
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {


    function handleClickScroll(url){

        console.log(url.slice(1));

        const element = document.getElementById(url.slice(1));
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };


    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (url) => {
        handleClickScroll(url)
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpenSign(false)
    setOpen(true)
  }
  const handleClose = () => setOpen(false);

  const [openSign, setOpenSign] = React.useState(false);
  const handleOpenSign = () => {
    setOpen(false)
    setOpenSign(true)
    };
  const handleCloseSign = () => setOpenSign(false);

    return (
        <AppBar className={styles.header} position="static" style={{background: '#F69049'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<div className='logo'>*/}
                    {/*    <img src={logo} alt="logo"  />*/}
                    {/*</div>*/}



                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <NavLink to={page.url} key={page.name} onClick={()=>handleCloseNavMenu(page.url)}>
                                     <Typography textAlign="center">{page.name}</Typography>
                                </NavLink>
                            ))}
                        </Menu>
                    </Box>
                    {/*<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                    <Box ml={3} sx={{ flexGrow: 1, gap:'2vw', display: { xs: 'none', md: 'flex' } }} style={{padding: '50px 0'}}>
                        {pages.map((page) => (
                            <NavLink to={page.url}
                                     className={({ isActive }) => (isActive ? 'active' : '')}
                                     key={page.name}
                                    //  onClick={handleCloseNavMenu}
                                    onClick={()=>handleClickScroll(page.url)}
                            >
                                {page.name}
                            </NavLink>
                        ))}



                        
                    </Box>
                   

                    {/* <Box sx={{ flexGrow: 0 }}> */}
                    {/* <ShoppingCartIcon sx={{ display: { xs: 'flex' }, mr: 1 }} /> */}
                    <IconButton color='inherit' aria-label="cart">
                        <StyledBadge badgeContent={4} color={`info`} anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}>
                            <ShoppingCartIcon />
                        </StyledBadge>
                    </IconButton>
                    {/* </Box> */}
                    <HeaderAuth/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;