import React, { useContext } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { ShoppingCart } from '@mui/icons-material';
import loginContext from '../../context/loginContext';

const Navbar = () => {
  const isLogin = useContext(loginContext)
  const valueChange = () => {
    isLogin.setLogin(false)
  }

  const NavChange = () => {
    // If user is logged in then it shows Logout button, otherwise it shows register or login button
    if (isLogin.login) {
      return (
        <li><Link to="/login" className='linkTag color-red' onClick={valueChange}>Logout</Link></li>
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