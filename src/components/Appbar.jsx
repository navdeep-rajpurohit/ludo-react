import React from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";



function Appbar(){
    const navigate = useNavigate();
    return <div id='appbar-parent'>
       <div><Typography variant={"h6"}>Play Ludo</Typography></div>
       <div id='appbar-buttons'>
        <Button variant={"outlined"} onClick={() => {navigate('/login')}}>Login</Button>
        <Button variant={"outlined"} onClick={() => {navigate('/register')}}>Register</Button>
       </div>
    </div>
}

export default Appbar;