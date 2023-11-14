import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState } from "react";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const verifyUser = () => {fetch('http://localhost:3000/login', {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    }).then((res) => {
        res.json().then((data) => {
            localStorage.setItem('token', data.token);
            window.location = '/';
        })
    })
}

    return <div id='login-page'>
        <Typography variant={"h6"}>Welcome to Ludo, let's play</Typography> <br/>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
        <Typography variant={"h6"}>Login here</Typography> <br/>
        <TextField fullWidth={true} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /> <br/> <br/>
        <TextField fullWidth={true} onChange={(e) => setPassword(e.target.value)} id="outlined-basic" type="Password" label="Password" variant="outlined" /><br/><br/>
        <Button variant="contained" onClick={verifyUser}>Signin</Button>
        </Card>
    </div>
}

export default Login;