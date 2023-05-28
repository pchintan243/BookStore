import React, { useState } from 'react'
import "./navbar.css"
import {
  Link
} from 'react-router-dom'
// import { Avatar } from '@mui/material'
// import { Popover } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
import { ShoppingCart } from '@mui/icons-material';

const Navbar = () => {
  // eslint-disable-next-line
  const [open, setOpen] = useState(false)
  // eslint-disable-next-line
  const [anchorEl, setAnchorEl] = useState(null);

  // const handleClick = (event) => {
  //   console.log(212);
  //   setAnchorEl(event.currentTarget);
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };

  // const onHomePage = () => {
  //   Navigate("/")
  // }

  return (
    <>

      <nav className="header">
        <div>
          <img src='https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg' className="d-block w-50 h-100 ms-5" alt="logo" />
        </div>
        <ul className="main-nav">
          <li><Link to="/login" className='linkTag color-red'>Login</Link></li>
          <li><Link className='line'>|</Link></li>
          <li><Link to="/signup" className='linkTag color-red'>SignUp</Link></li>
          <li className='cart-li'>
            <Link to="/cart" className='color-red'>
              <ShoppingCart />
              <span>0</span>
              <span className='cartTag'>Cart</span>
            </Link>
          </li>
        </ul>
        {/* <div onClick={handleClick}>
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
          <div
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h6
              style={{
                fontWeight: 'bolder'
              }}
            >
              Chintan Patel
            </h6>
            <LogoutIcon style={{ cursor: "pointer" }} onClick={onHomePage} />
          </div>
        </Popover> */}
      </nav>
    </>
  )
}

export default Navbar