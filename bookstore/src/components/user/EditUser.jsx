import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";

const EditUser = () => {

    const navigate = useNavigate();
    const [storeData, setStoreData] = useState([])

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(5, "firstName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your firstName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        lastName: Yup.string().min(5, "lastName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your lastName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        roleId: Yup.string().required('Please Enter Role Id')
    });

    const onFormSubmit = async (values, id) => {
        const getData = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
            "roleId": values.roleId
        }
        try {
            const url = await axios.get(`https://book-e-sell-node-api.vercel.app/api/user/byId?id=${id}`, getData);
            let res = await fetch(url);
            let parsedData = await res.json();
            setStoreData(parsedData.result)
            console.log(storeData);
            if (res.status === 200) {
                console.log(res.data.id);
                console.log(getData);
                toast.success('User updated Succesfully..!!', {
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
            navigate("/login")
        }
        catch (err) {
            toast.error('Email id already exist..!!', {
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
    }


    return (
        <>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', roleId: 0 }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Please Write an Email Address';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >
                {({ errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <div className="container">
                        <h1
                            style={{
                                margin: '35px 0px 17px',
                                textAlign: 'center',
                                fontWeight: 700
                            }}
                        >
                            Edit User
                        </h1>
                        <div
                            style={{
                                height: '2px',
                                width: '17%',
                                margin: "10px auto 50px",
                                backgroundColor: 'red',
                            }}
                        >
                        </div>

                        <form onSubmit={handleSubmit} className='row d-flex align-items-center justify-content-center'>

                            {/* firstName Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="FirstName"
                                    id="firstName"
                                    name="firstName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.firstName && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.firstName}
                                    </span>
                                )}
                            </div>

                            {/* lastName Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="LastName"
                                    id="lastName"
                                    name="lastName"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.lastName && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.lastName}
                                    </span>
                                )}
                            </div>

                            {/* Email field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="email"
                                    label="Email"
                                    id="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.email}
                                    </span>
                                )}
                            </div>

                            {/* Role Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="RoleId"
                                    id="roleId"
                                    name="roleId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.roleId && touched.roleId && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.roleId}
                                    </span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <Button variant="contained" type="submit" color='success' style={{
                                    margin: '28px 30px'
                                }}>
                                    Save
                                </Button>
                                <Button variant="contained" type="submit" color='error' onClick={() => navigate("/category")} style={{
                                    margin: '28px 0px'
                                }}>
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default EditUser