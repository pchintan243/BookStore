import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import * as Yup from "yup";
import YupPassword from 'yup-password';
import Main from '../main/Main';
YupPassword(Yup);

const Signup = () => {
    // eslint-disable-next-line
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
        password: Yup.string()
            .required('Please Enter the Password')
            .min(8, 'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special')
            .minLowercase(1, 'password must contain at least 1 lower case letter')
            .minUppercase(1, 'password must contain at least 1 upper case letter')
            .minNumbers(1, 'password must contain at least 1 number')
            .minSymbols(1, 'password must contain at least 1 special character'),

        // ConfirmPassword: Yup.string()
        //     .required('Please Enter the Password Again')
        //     .oneOf([Yup.ref('password'), null], 'Passwords are not matching..!!'),

        firstName: Yup.string().min(5, "firstName must be more than 4 Character")
            .required("Please Enter Your firstName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        lastName: Yup.string().min(5, "lastName must be more than 4 Character")
            .required("Please Enter Your lastName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

    });
    const onFormSubmit = async (values) => {
        const getData = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
            "roleId": values.roleId
        }
        try {
            const res = await axios.post("https://book-e-sell-node-api.vercel.app/api/user", getData);
            if (res.status === 200) {
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
        }
        catch (err) {
            console.log(err);
            toast("Error" + err);
        }
    }
    return (
        <>
            <Main />
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
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

                            {/* firstName Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="firstName"
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
                                    label="lastName"
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
                                    label="roleId"
                                    id="roleId"
                                    name="roleId"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>

                            {/* Role field */}
                            {/* <div className='d-flex flex-column m-4 col-md-5 position-relative'>
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
                            </div> */}



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
                                    name='password'
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
                                {errors.password && touched.password && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.password}
                                    </span>
                                )}
                            </div>

                            {/* ConfirmPassword field */}
                            {/* <div className='d-flex flex-column m-4 col-md-5 position-relative'>
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
                            </div> */}

                            {/* Submit Button */}
                            <div>
                                <Button variant="contained" type="submit" color='error' className='' style={{
                                    margin: '8px 90px'
                                }}>
                                    Register
                                </Button>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </>
    )
}

export default Signup