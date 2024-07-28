import React from 'react'
import '../App.css';
import '../style/app.scss'
import { Box, Button, Checkbox, Container, FormControl, Input, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import Footer from '../components/Footer';


const SecondPage: React.FC = () => {

    
  const [city, setCity] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event: { target: { value: any; }; }) => {
    setCity(event.target.value);
  };
  
  const handleFileChange = (event: any) => {
    setSelectedFile(event.target.files[0]);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



  return (
    <div className="form-page">
    <Container sx={{display:"flex", justifyContent:"space-beetwen", width: "130px", height: "44px", position: "relative",  right: "35%", marginTop: "20px" }}>
<img src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="logo" />
    </Container>
      <div className="title-form">
                    <h1 className="title-form-wrap">Оставьте заявку</h1>
      </div>
      <div className="input-form">
      <FormControl fullWidth sx={{backgroundColor: "#FFFFFF1A"}}>
<InputLabel id="demo-simple-select-label" sx={{color:"#FFFFFF"}}>Выберете город</InputLabel>
<Select
labelId="demo-simple-select-label"
id="demo-simple-select"
value={city}
label="Выберете город"
onChange={handleChange}
>
<MenuItem value={10}>Москва</MenuItem>
<MenuItem value={20}>Санкт-Петербург</MenuItem>
<MenuItem value={30}>Нижний Новгород</MenuItem>
</Select>
</FormControl>
<TextField id="filled-basic" label="Имя" variant="filled" sx={{width: "100%", color: "#FFFFFF", opacity: "40%", backgroundColor: "#FFFFFF1A",  marginTop: "30px"}}/>
<div className="coupl-inputs">
<TextField id="filled-basic" label="Email" variant="filled" sx={{width: "231px", color: "#FFFFFF", opacity: "40%", backgroundColor: "#FFFFFF1A"}}/>
<TextField id="filled-basic" label="+7 (___) __-__-___" variant="filled"  sx={{width: "231px", color: "#FFFFFF", opacity: "40%", backgroundColor: "#FFFFFF1A"}}/>
</div>
<TextField
id="outlined-textarea"
label="Оставьте пометку к заказу"
placeholder="Placeholder"
multiline
rows={5}
sx={{width: "100%", height: "150px", color: "#FFFFFF", opacity: "40%", backgroundColor: "#FFFFFF1A",  marginTop: "30px"}}
/>

<Input
type="file"
onChange={handleFileChange}
id="file-upload"
sx={{display: "none"}}
/>
<label htmlFor="file-upload">
<div className="wrap-upload">
<p className="wrap-upload-inf">Прикрепите файл</p>
<Box
component="img"
src={`${process.env.PUBLIC_URL}/images/select.png`}
alt="Upload Button"
sx={{
  width: '24px',
  height: '24px',
  position: 'relative',
  top: '24%',
  right: '5%',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}}
/>
</div>
</label>
<div className="check-box">
<Checkbox {...label} defaultChecked  size="large"/>
<p className="check-box-info">Даю согласие на обработку своих персональных данных</p>
</div>
      </div>
      <div className="button-submit">
<Button variant="contained" sx={{
backgroundColor: "#EC3F3F",
position: "sticky", width:"100%",
xs: "100%", 
sm: "50%",  
md: "30%",  
lg: "222px",
height:"100%", 
top: "20px", 
marginLeft: "auto",
'&:hover': {
  backgroundColor: "#FF1E1E80"
}  
}}>Оставить заявку</Button>
      </div>
<div className="some-info">
  <div className="hot-line">
      <p className="description-ht">Наша горячая линия</p>
      <h1 className="number-ht">8 800 38 23 112</h1>
  </div>
  <div className="main-office">
  <p className="description-office">Главный офис</p>
  <h1 className="number-office">г. Москва, Садовническая ул., 80</h1>
</div>
<div className="time-work">
<p className="description-work">Часы работы</p>
<h1 className="work-time">Пн-Пт с 10:00 до 22:00</h1>
</div>
</div>

<Footer />
</div>
  )
}

export default SecondPage;
