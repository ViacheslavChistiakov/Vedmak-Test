import React from 'react'
import '../App.css';
import '../style/app.scss';
import { Link } from 'react-router-dom';
import { setField, validateForm, submitForm } from '../store/FormSlice'
import { Box, Button, Checkbox, Container, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import Footer from '../components/Footer';
import { useAppDispatch, useAppSelector } from '../store/hooks';


const SecondPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { city, name, email, phone, note, selectedFile, agreed, isSubmitted, errors } = useAppSelector((state) => state.form);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setField({ field: 'city', value: event.target.value as string }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ field: 'selectedFile', value: event.target.files ? event.target.files[0] : null }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(validateForm());
    dispatch(submitForm());
  };

  const isFormValid = () => {
    return city && name && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email) && /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone) && agreed;
  };

  return (
    <div className={`form-page ${isFormValid() ? 'valid-form-page' : ''}`}>
      <Container component={Link} to="/Vedmak-Test" sx={{ display: "flex", justifyContent: "space-between", width: "130px", height: "44px", position: "relative", right: "35%", marginTop: "20px" }}>
        <img src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="logo" />
      </Container>
      {isSubmitted ? (
        <div className="success-message">
          <h1 className='success-message-title'>Заявка отправлена!</h1>
          <p className='success-message-info'>Мы получили вашу заявку. Наши специалисты<br /> свяжутся с вами в ближайшее время, чтобы<br /> уточнить все детали заказа.</p>
          <Button variant="contained"
            component={Link}
            to="/Vedmak-Test"
            sx={{
              backgroundColor: "#EC3F3F26",
              position: "relative", right: "44%", width: "222px",
              xs: "100%",
              sm: "50%",
              md: "30%",
              lg: "222px",
              height: "48px",
              top: "20px",
              marginLeft: "auto",
              '&:hover': {
                backgroundColor: "#FF1E1E80"
              }
            }}>Вернуться на главную</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="input-form">
          <div className="title-form">
            <h1 className="title-form-wrap">Оставьте заявку</h1>
          </div>
          <FormControl fullWidth sx={{ backgroundColor: "#FFFFFF1A" }}>
            <InputLabel id="demo-simple-select-label" sx={{ color: "#FFFFFF" }} required>Выберете город</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label={city ? '' : "Выберите город"}
              onChange={handleChange}
            >
              <MenuItem value="Москва">Москва</MenuItem>
              <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
              <MenuItem value="Нижний Новгород">Нижний Новгород</MenuItem>
            </Select>
            {errors.city && <p className="error">{errors.city}</p>}
          </FormControl>
          <TextField
            id="filled-basic"
            label="Имя"
            variant="filled"
            sx={{
              width: "100%",
              backgroundColor: "#FFFFFF1A",
              marginTop: "30px",
              '& .MuiInputBase-input': {
                color: name ? '#FFFFFF' : '#FFFFFF',
                opacity: name ? 1 : 0.4,
              },
              '& .MuiFormLabel-root': {
                color: name ? '#FFFFFF' : '#FFFFFF',
                opacity: name ? 1 : 0.4,
              }
            }}
            value={name}
            onChange={(e) => dispatch(setField({ field: 'name', value: e.target.value }))}
            error={!!errors.name}
            helperText={errors.name}
          />
          <div className="coupl-inputs">
            <TextField
              id="filled-basic"
              label="Email"
              variant="filled"
              sx={{
                width: "231px",
                backgroundColor: "#FFFFFF1A",
                '& .MuiInputBase-input': {
                  color: email ? '#FFFFFF' : '#FFFFFF',
                  opacity: email ? 1 : 0.4,
                },
                '& .MuiFormLabel-root': {
                  color: email ? '#FFFFFF' : '#FFFFFF1A',
                  opacity: email ? 1 : 0.4,
                }
              }}
              value={email}
              onChange={(e) => dispatch(setField({ field: 'email', value: e.target.value }))}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              id="filled-basic"
              label={phone ? '' : "+7 (___) ___-__-__"}
              variant="filled"
              sx={{
                width: "231px",
                backgroundColor: "#FFFFFF1A",
                '& .MuiInputBase-input': {
                  color: phone ? '#FFFFFF' : '#FFFFFF',
                  opacity: phone ? 1 : 0.4,
                },
                '& .MuiFormLabel-root': {
                  color: phone ? '#FFFFFF' : '#FFFFFF',
                  opacity: phone ? 1 : 0.4,
                }
              }}
              value={phone}
              onChange={(e) => dispatch(setField({ field: 'phone', value: e.target.value }))}
              error={!!errors.phone}
              helperText={errors.phone}
            />
          </div>
          <TextField
            id="outlined-textarea"
            label="Оставьте пометку к заказу"
            placeholder="Placeholder"
            multiline
            rows={5}
            sx={{
              width: "100%",
              height: "150px",
              backgroundColor: "#FFFFFF1A",
              marginTop: "30px",
              '& .MuiInputBase-input': {
                color: note ? '#FFFFFF' : '#FFFFFF',
                opacity: note ? 1 : 0.4,
              },
              '& .MuiFormLabel-root': {
                color: note ? '#FFFFFF' : '#FFFFFF',
                opacity: note ? 1 : 0.4,
              }
            }}
            value={note}
            onChange={(e) => dispatch(setField({ field: 'note', value: e.target.value }))}
            error={!!errors.note}
            helperText={errors.note}
          />
          <Input
            type="file"
            onChange={handleFileChange}
            id="file-upload"
            sx={{ display: "none" }}
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
            <Checkbox
              checked={agreed}
              onChange={(e) => dispatch(setField({ field: 'agreed', value: e.target.checked }))}
              size="large"
            />
            <p className="check-box-info">Даю согласие на обработку своих персональных данных</p>
          </div>
          {errors.agreed && <p className="error">{errors.agreed}</p>}
          <div className="button-submit">
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#EC3F3F",
                position: "sticky",
                width: "100%",
                xs: "100%",
                sm: "50%",
                md: "30%",
                lg: "222px",
                height: "100%",
                top: "20px",
                marginLeft: "auto",
                '&:hover': {
                  backgroundColor: "#FF1E1E80"
                }
              }}
            >
              Оставить заявку
            </Button>
          </div>
        </form>
      )}
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
  );
};

export default SecondPage;
