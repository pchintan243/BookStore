import React from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from "yup";
import YupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';
YupPassword(Yup);

const UpdateProfile = () => {
    const navigate = useNavigate();

    const initialValueState = {
        email: "",
        firstName: "",
        lastName: "",
        newPassword: "",
        confirmPassword: ""
    }

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string()
            .required('Please Enter the Password')
            .min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
            .minLowercase(1, 'password must contain at least 1 lower case letter')
            .minUppercase(1, 'password must contain at least 1 upper case letter')
            .minNumbers(1, 'password must contain at least 1 number')
            .minSymbols(1, 'password must contain at least 1 special character'),

        ConfirmPassword: Yup.string()
            .required('Please Enter the Password Again')
            .oneOf([Yup.ref('password'), null], 'Passwords are not matching..!!'),

        firstName: Yup.string().min(5, "firstName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your firstName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        lastName: Yup.string().min(5, "lastName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your lastName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    });


    const check = async () => {
        const res = await axios.get('https://book-e-sell-node-api.vercel.app/api/user')
    }


    const onFormSubmit = async (values) => {
        const getData = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.newPassword,
            "roleId": values.roleId
        }
        try {
            const url = 'https://book-e-sell-node-api.vercel.app/api/user'

            const res = await axios.put("https://book-e-sell-node-api.vercel.app/api/user", getData);
            console.log("res", res);
            if (res.status === 200) {
                toast.success('Data created Succesfully..!!', {
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
                initialValues={initialValueState}
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
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <div className="container">
                        <h1 style={{
                            margin: '35px 0px 17px',
                            textAlign: 'center'
                        }}>Update Profile</h1>
                        <div style={{
                            height: '2px',
                            width: '17%',
                            margin: "10px auto 50px",
                            backgroundColor: 'red',
                        }}></div>
                        <form onSubmit={handleSubmit} className='row d-flex align-items-center justify-content-center'>

                            {/* firstName Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="FirstName"
                                    id="firstName"
                                    name="firstName"
                                    value={values.firstName}
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

                            {/* Password field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type={"password"}
                                    label='NewPassword'
                                    name='newPassword'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.newPassword && touched.newPassword && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.newPassword}
                                    </span>
                                )}
                            </div>

                            {/* ConfirmPassword field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type={"password"}
                                    label='ConfirmPassword'
                                    name='ConfirmPassword'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.ConfirmPassword && touched.ConfirmPassword && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.ConfirmPassword}
                                    </span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <Button variant="contained" type="submit" color='success' className='' style={{
                                    margin: '28px 90px',
                                    marginRight: "20px"
                                }}>
                                    Save
                                </Button>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    color="error"
                                    disableElevation
                                    onClick={() => {
                                        navigate("/");
                                    }}
                                >
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

export default UpdateProfile