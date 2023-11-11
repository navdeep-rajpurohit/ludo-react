import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

function Register(){
    return <div id='register-page'>
        <Typography variant={"h6"}>Welcome to Ludo, let's play</Typography> <br/>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
        <Typography variant={"h6"}>Register here</Typography> <br/>
        <TextField fullWidth={true} id="outlined-basic" label="Name" variant="outlined" /> <br/> <br/>
        <TextField fullWidth={true} id="outlined-basic" label="Email" variant="outlined" /> <br/> <br/>
        <TextField fullWidth={true} id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
        <TextField fullWidth={true} id="outlined-basic" label="Re-password" variant="outlined" /><br/><br/>
        <Button variant="contained">Signup</Button>
        </Card>
    </div>
}

export default Register;