import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import Main from '../components/main/Main'
import * as Yup from "yup";
import { Formik } from 'formik';
import { Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const validationSchema = Yup.object().shape({
        Email: Yup.string().required('Please Enter an Email Address'),
        Password: Yup.string().required('Please Enter the Password')
    });

    const onFormSubmit = async (values) => {
        console.log(values);

        // API
        const getData = {
            "Email": values.Email,
            "Password": values.Password
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
            <div className='container d-flex mt-20'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    width: "50%"
                }}>
                    <div>
                        <h2 style={{
                            fontWeight: 'bolder',
                            marginBottom: 16,
                            fontSize: 25
                        }}>
                            New Customers
                        </h2>
                        <hr style={{
                            margin: "15px 0px",
                            width: "60%",
                            borderWidth: 2,
                            color: '#808080b0'
                        }} />
                        <p style={{
                            color: 'grey'
                        }}>
                            Registration is free and easy.
                        </p>
                        <ul style={{
                            listStyleType: 'disc',
                            fontSize:'1.1rem'
                        }}>
                            <li>Faster checkout</li>
                            <li>Save multiple shipping addresses</li>
                            <li>View and track orders and more</li>
                        </ul>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <a href="/signup">
                            <Button variant="contained" type="submit" color='error' className='' style={{

                            }}>
                                CREATE A NEW ACCOUNT
                            </Button>
                        </a>
                    </div>
                </div>

                <div style={{ width: "50%" }}>
                    <Formik
                        initialValues={{ Email: '', Password: '' }}
                        validationSchema={validationSchema}
                        onSubmit={onFormSubmit}
                    >
                        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                            <div className="container">
                                <h2 style={{
                                    marginLeft: "25px",
                                    fontSize: '20px',
                                    fontWeight: 600
                                }}>
                                    Personal Information
                                </h2>

                                <hr style={{
                                    margin: "20px 26px",
                                    width: "60%",
                                    borderWidth: 2,
                                    color: '#808080b0'
                                }} />

                                <h6 style={{
                                    marginLeft: "25px",
                                    color: 'grey',
                                    fontWeight: 300
                                }}>
                                    If you have an account with us, please log in.
                                </h6>
                                <form onSubmit={handleSubmit} className=''>

                                    {/* Email field */}
                                    <div className='d-flex flex-column m-4 my-5 col-md-8 position-relative'>
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

                                    {/* Password field */}
                                    <div className='d-flex flex-column m-4 my-5 col-md-8 position-relative'>
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


                                    {/* Submit Button */}
                                    <div className="col-12">
                                        <Button variant="contained" type="submit" color='error' className=''
                                            style={{
                                                margin: '0px 27px'
                                            }}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Login