import React from 'react'
import "./navbar.css"
import {
  Link
} from 'react-router-dom'
import { Avatar } from '@mui/material'

const Navbar = () => {

  return (
    <>
      <nav className="header">
        <h1 className="logo">BookStore</h1>
        <ul className="main-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>
        <Avatar sx={{ bgcolor: "blue", cursor: "pointer" }}>CP</Avatar>
      </nav>
    </>
  )
}

export default Navbar