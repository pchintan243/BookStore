import React from 'react'
import Search from './Search'

const Main = () => {
    return (
        <>
            {/* Search Functionality */}
            <Search />

            {/* Navbar page show */}
            <nav className='d-flex align-items-center justify-content-center navbar navbar-expand-lg navbar-light bg-light'>
                <ul className='d-flex align-items-center justify-content-center'>
                    <li className='m-1 my-3'>
                        <a href="/" className='nav-link' style={{ fontSize: 18 }}>Home</a>
                    </li>
                    <li className='m-1 my-3'>&#62;</li>
                    <li className='m-1 my-3 text-danger fw-bold'>
                        <a href="/" className='nav-link' style={{ fontSize: 18 }}>Sign Up</a>
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