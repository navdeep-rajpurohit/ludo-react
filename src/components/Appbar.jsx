import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Appbar(){
    const navigate = useNavigate();
    return <div id='appbar-parent'>
       <div id={'logo-main'}>
        <div id={'logo'}>
         <div>
            <div id={'first'}></div>
            <div id={'second'}></div>
         </div>
         <div> 
            <div id={'third'}></div>
            <div id={'fourth'}></div>
         </div>
         <Typography id={'logo-name'} variant={"h6"}> Ludo</Typography>
        </div>
       </div>
       <div id='appbar-buttons'>
        <Button variant={"outlined"} onClick={() => {navigate('/login')}}>Login</Button>
        <Button variant={"outlined"} onClick={() => {navigate('/register')}}>Register</Button>
       </div>
    </div>
}

export default Appbar;