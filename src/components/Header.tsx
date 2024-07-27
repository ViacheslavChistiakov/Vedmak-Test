import { Button, Container } from '@mui/material'
import React from 'react'



const Header: React.FC = () => {
  return (
    <header className="header">
    <Container sx={{display:"flex", justifyContent:"space-beetwen", width: "100%", height: "88px"}}>
        <div className="logo-image">
            <img src={`${process.env.PUBLIC_URL}/images/header-logo.svg`} alt="logo" />
        </div>
        <Button variant="contained" sx={{
          backgroundColor: "#EC3F3F26",
           position: "sticky", width:"222px",
           xs: "100%", 
           sm: "50%",  
           md: "30%",  
           lg: "222px",
            height:"48px", 
            top: "20px", 
              marginLeft: "auto",
              '&:hover': {
                backgroundColor: "#FF1E1E80"
              }  
          }}>Подключить подписку</Button>
    </Container>
</header>
  )
};

export default Header;
