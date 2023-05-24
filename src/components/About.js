import React from 'react'
import Button from '@mui/material/Button';

const About = () => {

    const handleClick = () => {

    }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center m-5">
                <p className='fw-bolder h1 mx-3'>
                    You are in About Page
                </p>
                <Button variant="contained" onClick={handleClick}>Click Me!!</Button>
            </div>
        </>
    )
}

export default About