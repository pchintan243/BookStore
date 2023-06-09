import React, { useContext } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material';
import loginContext from '../../context/loginContext';
import { toast } from 'react-toastify';
import { Button } from '@mui/material';

const Navbar = () => {
  const isLogin = useContext(loginContext)
  const valueChange = () => {
    isLogin.setLogin(false)
    toast.success('Logout Succesfully..!!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  const NavChange = () => {
    // If user is logged in then it shows Logout button, otherwise it shows register or login button
    if (isLogin.login) {
      return (
        <>
          <li><Link className='line mt-1 text-secondary'>|</Link></li>

          <li>
            <Link to="/update" className='linkTag color-red' style={{
              margin: 4,
              fontWeight: "600",
            }}
            >
              Update Profile
            </Link>
          </li>

          <li><Link className='line mt-1 text-secondary'>|</Link></li>

          <li className='linkTag color-red' onClick={valueChange}>
            <Link to="/login" className='linkTag color-red' style={{
              fontWeight: "600",
              margin: 4,
            }}
            >
              Logout
            </Link>
          </li>
        </>
      )
    }
    else {
      return (
        <>
          <li><Link to="/login" className='linkTag color-red'>Login</Link></li>
          <li><Link className='line'>|</Link></li>
          <li><Link to="/signup" className='linkTag color-red'>SignUp</Link></li>
        </>
      )
    }
  }
  return (
    <>
      <nav className="header">
        <div>
          <img src='https://bookstore-sooty.vercel.app/static/media/site-logo.005b78aa01d0b4eadda3fa91c02202c5.svg' className="d-block w-50 h-100 ms-5" alt="logo" />
        </div>
        <ul className="main-nav">
          <li>
            <Link to="/bookpage" className='linkTag color-red' style={{
              margin: 4,
              fontWeight: "600",
            }}
            >
              Book
            </Link>
          </li>

          <li><Link className='line mt-1 text-secondary'>|</Link></li>
          <li>
            <Link to="/category" className='linkTag color-red' style={{
              margin: 4,
              fontWeight: "600",
            }}
            >
              Category
            </Link>
          </li>

          <li><Link className='line mt-1 text-secondary'>|</Link></li>
          <li>
            <Link to="/user" className='linkTag color-red' style={{
              margin: 4,
              fontWeight: "600",
            }}
            >
              User
            </Link>
          </li>
          <NavChange />

          <li className='cart-li'>
            <Link to="/cart" className='color-red'>
              <ShoppingCart className='color-red' />
              <span>0</span>
              <span className='cartTag'>Cart</span>
            </Link>
          </li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar