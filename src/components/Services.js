import React from 'react'
import { useNavigate } from 'react-router-dom'

const Services = () => {
    const navigate = useNavigate();
    const changePage = () => {
        alert("Navigate to Home Page")
        navigate("/")
    }
    return (
        <>
            <div className="container m-5">
                <h4 className='fw-bold'>If we click on the button then it navigate to home page..!!!</h4>
                <button className='btn btn-danger' onClick={changePage}>Click me!!</button>
            </div>
        </>
    )
}

export default Services