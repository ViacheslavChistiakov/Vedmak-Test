import { Button, Container } from '@mui/material'
import React from 'react'



const Footer: React.FC = () => {
  return (
    <footer className="footer">
    <Container sx={{display:"flex", justifyContent:"space-beetwen", width: "100%", height: "88px", margin:"auto"}}>
      <div className="logo-image">
          <img src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="logo" />
      </div>
      </Container>
      <a href="/" className="poloticy">Политика обработки <br/> персональных данных</a>
      <div className="social">
          <a href="/" className='link-social'><img src={`${process.env.PUBLIC_URL}/images/inst.svg`} alt="" /></a>
          <a href="/" className='link-social'><img src={`${process.env.PUBLIC_URL}/images/Facebook.svg`} alt="" /></a>
          <a href="/" className='link-social'><img src={`${process.env.PUBLIC_URL}/images/VK.svg`} alt="" /></a>
      </div>
        </footer>
  )
};

export default Footer;
