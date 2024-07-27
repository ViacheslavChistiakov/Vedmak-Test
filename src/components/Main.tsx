import { Button } from '@mui/material';
import React from 'react'

const Main: React.FC = () => {
  return (
    <div className="main">
    <div className="description">
         <h1 className="desc-title">Сериал Ведьмак</h1>
           <p className="desc-info">
           Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации, идет навстречу своей судьбе в неспокойном мире, где люди часто оказываются куда коварнее чудовищ.
           </p>
        <Button variant="contained" sx={{
                    backgroundColor: "#EC3F3F",
                    position: "realative", width:"222px",
                    xs: "100%", 
                    sm: "50%",  
                    md: "30%",  
                    lg: "222px",
                    height:"48px", 
                    top: "10%",
                    right: "20%", 
        }}>Смотреть сериал</Button>
     </div> 
</div>
  )
}

export default Main;
