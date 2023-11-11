import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState } from "react";

function Solo(){
    return <div id={'game-main'}>
        {//<Typography variant={"h4"}>Welcome to the game</Typography>
        }
        <div id={'game'}>
            <div><div id={'red'}></div>
            <div id={'blue'}></div>
            </div>
            <div>
            <div id={'green'}></div>
            <div id={'yellow'}></div>    
            </div>
        </div>
    </div>
}

export default Solo;