import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function Appbar(){
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


    useEffect(() => {
      fetch('http://localhost:3000/me', {
         method: "GET",
         headers: {
            "Authorization": "Bearer " + localStorage.getItem('token')
         },
      })
      .then((res) => {
         res.json()
         .then((data) => {
            if(data.username) {
               setUsername(data.username);
            }
         })
      })}, [])

   if(username) {
    return <div id='appbar-parent'>
       <div id={'logo-main'}>
        <div id={'logo'} onClick={()=> {navigate('./')}}>
         <div>
            <div id={'first'}></div>
            <div id={'second'}></div>
         </div>
         <div> 
            <div id={'third'}></div>
            <div id={'fourth'}></div>
         </div>
        </div>
        <Typography id={'logo-name'} variant={"h6"}> Ludo</Typography>
       </div>
       <div id='appbar-buttons'>
       <Avatar sx={{ bgcolor: deepPurple[500]}}         aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>N</Avatar>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        >
        <MenuItem onClick={() => {navigate('/profile')}}>Profile</MenuItem>
        <MenuItem onClick={() => {localStorage.setItem('token', null); window.location = '/'}}>Logout</MenuItem>
        </Menu>
       </div>
    </div>
   }
   else {
      return <div id='appbar-parent'>
      <div id={'logo-main'}>
       <div id={'logo'} onClick={()=> {navigate('./')}}>
        <div>
           <div id={'first'}></div>
           <div id={'second'}></div>
        </div>
        <div> 
           <div id={'third'}></div>
           <div id={'fourth'}></div>
        </div>
       </div>
       <Typography id={'logo-name'} variant={"h6"}> Ludo</Typography>
      </div>
      <div id='appbar-buttons'>
       <Button variant={"outlined"} onClick={() => {navigate('/login')}}>Login</Button>
       <Button variant={"outlined"} onClick={() => {navigate('/register')}}>Register</Button>
      </div>
   </div>
   }
}

export default Appbar;