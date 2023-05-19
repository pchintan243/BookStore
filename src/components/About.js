import React from 'react'
import Button from '@mui/material/Button';

const About = () => {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center">
                <p className='fw-bolder h1'>
                    You are in About Page
                </p>
                <Button variant="contained">Click Me!!</Button>
            </div>
        </>
    )
}

export default About