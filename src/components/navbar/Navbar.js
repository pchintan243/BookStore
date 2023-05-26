import React, { useState } from 'react'
import "./navbar.css"
import {
  Link, useNavigate
} from 'react-router-dom'
import { Avatar } from '@mui/material'
import { Popover } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    console.log(212);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const onHomePage = () => {
    Navigate("/")
  }

  return (
    <>
      <nav className="header">
        <div>
          <img src={`${process.env.REACT_APP_LOGO}`} className="d-block w-50 h-100 ms-5" alt="logo" />
        </div>
        <ul className="main-nav m-0">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">SignUp</Link></li>
        </ul>
        <div onClick={handleClick}>
          <Avatar sx={{ bgcolor: "blue", cursor: "pointer" }}>CP</Avatar>
        </div>
        <Popover
          open={open}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <div style={{
            padding: 10,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <h6 style={{
              fontWeight: 'bolder'
            }}>Chintan Patel</h6>
            <LogoutIcon style={{ cursor: "pointer" }} onClick={onHomePage} />
          </div>
        </Popover>
      </nav>
    </>
  )
}

export default Navbar