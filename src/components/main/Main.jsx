import React from 'react'
import Search from '../Search'
import { Link } from 'react-router-dom'
import "./main.css"

const Main = () => {
    return (
        <>
            {/* Search Functionality */}
            <Search />

            {/* Navbar page show */}
            <nav className='d-flex align-items-center justify-content-center navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='d-flex align-items-center justify-content-center'>
                    <li className='m-1 my-3 li-tag'>
                        <Link to="/" className='nav-link' style={{ fontSize: 18 }}>Home</Link>
                    </li>
                    <li className='m-1 my-3 li-tag'>&#62;</li>
                    <li className='m-1 my-3 text-danger fw-bold li-tag'>
                        <Link to="/" className='nav-link' style={{ fontSize: 18 }}>Sign Up</Link>
                    </li>
                </ul>
            </nav>

            <h1 className='d-flex align-items-center justify-content-center fw-bolder mt-4'>Login or Create an Account</h1>

            <hr style={{
                margin: "10px auto 12px",
                color: "red",
                width: "20%",
                borderWidth: 2,
                marginBottom: '50px'
            }} />
            <div style={{
                height: '5px',
                width: '100px',
                margin: 'auto',
                backgroundColor: 'red'
            }}>

            </div>
        </>
    )
}

export default Main