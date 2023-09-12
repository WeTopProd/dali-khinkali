import React, {useEffect, useState} from "react";

import styles from './MainReserve.module.css';

import reserveBackground from '../../assets/images/main-reserve.png';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from "@mui/x-date-pickers";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';


const MainReserve = () => {  

    const [age, setAge] = useState('Выбрать');
    const [host, setHost] = useState('1-8');
    const [value, setValue] = useState(null);

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const handleChangeHost = (event) => {
        setHost(event.target.value);
      };



    return (
        <>
            <div id='table-reserve'>
            <div style={{background:`no-repeat  right top url(${reserveBackground})`, height:'100%', backgroundSize:'85% 100%' }}>
                <Typography sx={{pt:10}} align="center" variant="h3" component="h3">Резерв стола</Typography>

                <Container>

                <Grid container alignItems="center" sx={{mt:3}} rowSpacing={9} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={3}>  
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' >Зал / Веранда</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <FormControl variant="standard" sx={{minWidth: 120 }}>
                        {/* <InputLabel id="demo-simple-select-standard-label">Выбрать</InputLabel> */}
                        <Select
                            // labelId="demo-simple-select-standard-label"
                            // id="demo-simple-select-standard"
                            // label="Выбрать"
                            value={age}
                            defaultValue="Выбрать"
                            onChange={handleChange}
                            className={styles.select}
                            color="black"
                            style={{fontSize:'2rem', background:'transparent', color:'#fff', '&:after':{borderBottom:'4px solid black'}}}
                        >
                        <MenuItem disabled style={{display:'none'}} value={'Выбрать'}>Выбрать</MenuItem>
                        <MenuItem value={'Зал'}>Зал</MenuItem>
                        <MenuItem value={'Веранда'}>Веранда</MenuItem>
                        </Select>
                    </FormControl>
                    </Grid>

                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' >Дата / Время</Typography>
                    </Grid>
                    <Grid item xs={6}>

                    <LocalizationProvider dateAdapter={AdapterDayjs}>

                        <DemoContainer components={['TimePicker']}>
                            <DatePicker label="Выбрать дату" 
                            variant="standard"                             
                            />
                            <TimePicker label="Выбрать время" ampm={false} />
                        </DemoContainer>
                    </LocalizationProvider>


                    {/* <TextField
                        autoFocus
                        margin="dense"
                        id="date"
                        // helperText="Выбрать дату"
                        type="date"
                        variant="standard"
                        style={{color:'#fff'}}
                        inputProps={{
                            style:{color:'white', fontSize:'2rem'}
                        }}
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                    />
                        <TextField
                        autoFocus
                        margin="dense"
                        sx={{ml:3}}
                        id="time"
                        // helperText="Выбрать время"
                        placeholder="Ваше имя"
                        type="time"
                        variant="standard"
                        inputProps={{
                            style:{color:'white', fontSize:'2rem'}
                        }}
                        // value={date}
                        // onChange={(e) => setDate(e.target.value)}
                    /> */}
                    </Grid>


                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' >Имя</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="date"
                            // helperText="Выбрать дату"
                            placeholder="Ваше имя"
                            color="black"
                            // type="date"
                            variant="standard"
                            style={{color:'#fff'}}
                            inputProps={{
                                style:{color:'white', fontSize:'2rem'}
                            }}

                            // value={date}
                            // onChange={(e) => setDate(e.target.value)}
                        />
                    </Grid>

                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' >Число гостей</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    {/* <TextField
                            id="standard-select-currency"
                            select
                            // label="Select"
                            defaultValue="EUR"
                            // helperText="Please select your currency"
                            variant="standard"
                            style={{minWidth:'200px', fontSize:'2rem', background:'transparent', color:'#fff', '&:after':{borderBottom:'4px solid black'}}}
                            inputProps={{
                                style:{color:'white', fontSize:'2rem'}
                            }}
                            color="black"
                            placeholder="sdadas"
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                    </TextField>     */}

                    <FormControl variant="standard" sx={{minWidth: 120 }}>
                        {/* <InputLabel id="demo-simple-select-standard-label">Выбрать</InputLabel> */}
                        <Select
                            // labelId="demo-simple-select-standard-label"
                            // id="demo-simple-select-standard"
                            // label="Выбрать"
                            value={host}
                            defaultValue="1-8"
                            onChange={handleChangeHost}
                            className={styles.select}
                            color="black"
                            style={{fontSize:'2rem', background:'transparent', color:'#fff', '&:after':{borderBottom:'4px solid black'}}}
                        >
                        <MenuItem disabled style={{display:'none'}} value={'1-8'}>1-8</MenuItem>
                        <MenuItem value={'1'}>1</MenuItem>
                        <MenuItem value={'2'}>2</MenuItem>
                        <MenuItem value={'3'}>3</MenuItem>
                        <MenuItem value={'4'}>4</MenuItem>
                        <MenuItem value={'5'}>5</MenuItem>
                        <MenuItem value={'6'}>6</MenuItem>
                        <MenuItem value={'7'}>7</MenuItem>
                        <MenuItem value={'8'}>8</MenuItem>
                        </Select>
                    </FormControl>




                    </Grid>


                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle1' >Пожелания</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    <TextField
                            autoFocus
                            margin="dense"
                            id="date"
                            // helperText="Выбрать дату"
                            placeholder="По желанию"
                            color="black"
                            // type="date"
                            variant="standard"
                            inputProps={{
                                style:{color:'white', fontSize:'2rem'}
                            }}
                            // value={date}
                            // onChange={(e) => setDate(e.target.value)}
                        />
                    </Grid>



                
                        <Grid
                            container
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{m:8}}
                            style={{color:'#fff'}}
                            >
                                <Button size="large" variant="contained" color='black'>Забронировать</Button> 
                        </Grid>

                    






                    

                </Grid>

                <Grid sx={{m:15}}>

                </Grid>

                <Typography id="delivery" sx={{pt:5}} align="center" variant="h3" component="h3">Доставка</Typography>
                </Container>
            </div> 
            </div>
        </>
    );
};

export default MainReserve;