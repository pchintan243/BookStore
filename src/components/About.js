import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Popover } from '@mui/material';


const About = () => {

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

    return (
        <>
            <div className="d-flex justify-content-center align-items-center m-5">
                <p className='fw-bolder h1 mx-3'>
                    You are in About Page
                </p>
                <Button variant="contained" onClick={handleClick}>Click Me!!</Button>
            </div>
            <Popover
                open={open}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                The content of the Popover.
            </Popover>

        </>
    )
}

export default About