import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { ErrorSharp, Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from "yup";
import YupPassword from 'yup-password';
import Main from '../Main';
YupPassword(Yup);

const Signup = () => {
    const [user, setUser] = useState([])

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            // console.log("Details", res.data);
            setUser(res.data)
        })
    }, [])

    const validationSchema = Yup.object().shape({
        Password: Yup.string()
            .required('Please Enter the Password')
            .min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
            .minLowercase(1, 'password must contain at least 1 lower case letter')
            .minUppercase(1, 'password must contain at least 1 upper case letter')
            .minNumbers(1, 'password must contain at least 1 number')
            .minSymbols(1, 'password must contain at least 1 special character'),

        ConfirmPassword: Yup.string()
            .required('Please Enter the Password Again')
            .oneOf([Yup.ref('Password'), null], 'Passwords are not matching..!!'),

        Firstname: Yup.string().min(5, "FirstName must be more than 4 Character")
            .required("Please Enter Your Firstname")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        Lastname: Yup.string().min(5, "LastName must be more than 4 Character")
            .required("Please Enter Your Lastname")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        Role: Yup.string().required("Please Select the Role")
    });
    const onFormSubmit = async (values) => {
        console.log(values);

        // API
        const getData = {
            "Firstname": values.Firstname,
            "Lastname": values.Lastname,
            "Email": values.Email,
            "Password": values.Password,
            "ConfirmPassword": values.ConfirmPassword,
            "Role": values.Role
        }

        const res = await axios.post("https://jsonplaceholder.typicode.com/posts", getData)
        if (res.status === 201) {
            console.log(res.data.id);
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

        axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
            if (res.status === 200) {
                console.log(res.data.id);
                toast.success('Data Deleted Succesfully..!!', {
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
        })
    }
    return (
        <>
            <Main />
            <Formik
                initialValues={{ Firstname: '', Lastname: '', Email: '', Password: '', ConfirmPassword: '', 'Role': '' }}
                validate={values => {
                    const errors = {};
                    if (!values.Email) {
                        errors.Email = 'Please Write an Email Address';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
                    ) {
                        errors.Email = 'Invalid email address';
                    }
                    return errors;
                }}
                validationSchema={validationSchema}
                onSubmit={onFormSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                    <div className="container">
                        <h2 style={{
                            marginLeft: "69px",
                            fontSize: '20px',
                            fontWeight: 600
                        }}>
                            Personal Information
                        </h2>

                        <hr style={{
                            margin: "20px 70px",
                            width: "87.3%",
                            borderWidth: 2,
                            color: '#808080b0'
                        }} />

                        <h6 style={{
                            marginLeft: "69px",
                            color: 'grey',
                            fontWeight: 300
                        }}>
                            Please enter the following information to create your account.
                        </h6>
                        <form onSubmit={handleSubmit} className='row d-flex align-items-center justify-content-center'>

                            {/* Firstname Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Firstname"
                                    id="firstname"
                                    name="Firstname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.Firstname && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.Firstname}
                                    </span>
                                )}
                            </div>

                            {/* Lastname Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="Lastname"
                                    id="lastname"
                                    name="Lastname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.Lastname && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.Lastname}
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
                                    name="Email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.Email && touched.Email && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.Email}
                                    </span>
                                )}
                            </div>

                            {/* Role field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Role"
                                        name="Role"
                                        defaultValue=""
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    >
                                        <MenuItem value='Buyer'>Buyer</MenuItem>
                                        <MenuItem value='Seller'>Seller</MenuItem>
                                    </Select>
                                </FormControl>
                                {touched.Role && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.Role}
                                    </span>
                                )}
                            </div>

                            <h2 style={{
                                width: '90%',
                                marginLeft: "30px",
                                marginTop: "30px",
                                fontSize: '20px',
                                fontWeight: 600
                            }}>
                                Login Information
                            </h2>

                            <hr style={{
                                margin: "5px 35px",
                                width: "85.3%",
                                borderWidth: 2,
                                color: '#808080b0'
                            }} />

                            {/* Password field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type={showPassword ? "text" : "password"}
                                    label='Password'
                                    name='Password'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                                {errors.Password && touched.Password && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.Password}
                                    </span>
                                )}
                            </div>

                            {/* ConfirmPassword field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type={"password"}
                                    label='Confirm Password'
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
                            <div className="col-12">
                                <Button variant="contained" type="submit" color='error' className='' style={{
                                    margin: '8px 70px'
                                }}>
                                    Register
                                </Button>
                            </div>
                        </form>
                    </div >
                )}
            </Formik >
        </>
    )
}

export default Signup