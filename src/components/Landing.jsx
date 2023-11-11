import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Landing(){
    const navigate = useNavigate();
    return <div>
        <br/><br/>
        <Typography variant={"h2"}>Play Ludo online!</Typography><br/><br/>
        <div id={'play-button'}> 
            <Button size={'large'} onClick={() => navigate('./solo')} variant="contained" color="success">Play Solo</Button>
            <Button size={'large'} variant="contained" color="success">Play Multiplayer</Button>
       </div>
    </div>
}

export default Landing;