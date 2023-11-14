import React from "react";
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useState } from "react";

function Register(){
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const addUser = () => {fetch('http://localhost:3000/signup', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            username: username,
            password: password
        }),
        headers: {
            "Content-type": "application/json"
        }
    })
    .then((res) => {
        console.log(res);
        res.json()
        .then((data) => {
            localStorage.setItem('token', data.token);
            window.location = '/';
        })})
    }

    return <div id='register-page'>
        <Typography variant={"h6"}>Welcome to Ludo, let's play</Typography> <br/>
        <Card variant="outlined" style={{width: 400, padding: 20}}>
        <Typography variant={"h6"}>Register here</Typography> <br/>
        <TextField fullWidth={true} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" /> <br/> <br/>
        <TextField fullWidth={true} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Email" variant="outlined" /> <br/> <br/>
        <TextField fullWidth={true} type="Password" onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="Password" variant="outlined" /><br/><br/>
        <TextField fullWidth={true} type="Password" id="outlined-basic" label="Re-password" variant="outlined" /><br/><br/>
        <Button variant="contained" onClick={addUser}>Signup</Button>
        </Card>
    </div>
}


export default Register;