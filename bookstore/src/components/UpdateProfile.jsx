import React, { useContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import { Button, TextField } from '@mui/material';
import * as Yup from "yup";
import YupPassword from 'yup-password';
import { useNavigate } from 'react-router-dom';
import {
    AuthContext,
    useAuthContext,
} from "../context/auth";
YupPassword(Yup);

const UpdateProfile = () => {
    const navigate = useNavigate();
    const authContext = useAuthContext();
    const { user } = useContext(AuthContext);
    const [updatePassword, setUpdatePassword] = useState(false);

    const initialValueState = {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        newPassword: "",
        confirmPassword: ""
    }

    const validationSchema = Yup.object().shape({
        newPassword: Yup.string().min(5, "Minimum 5 charactor is required"),
        confirmPassword: updatePassword
            ? Yup.string()
                .required("Must required")
                .oneOf([Yup.ref("newPassword")], "Passwords is not match")
            : Yup.string().oneOf([Yup.ref("newPassword")], "Passwords is not match"),

        firstName: Yup.string().min(5, "firstName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your firstName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),

        lastName: Yup.string().min(5, "lastName must be more than 4 Character")
            .max(8, "Limit exist")
            .required("Please Enter Your lastName")
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    });

    const onFormSubmit = async (values) => {

        try {
            const password = values.newPassword ? values.newPassword : user.password;
            delete values.confirmPassword;
            delete values.newPassword;
            const data = Object.assign(user, { ...values, password });

            const res = await axios.put("https://book-e-sell-node-api.vercel.app/api/user", data);
            if (res) {
                authContext.setUser(res);
                navigate("/booklist");
            }
            console.log("res", res);
            if (res.status === 200) {
                toast.success('Profile Updated Succesfully..!!', {
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
            navigate("/booklist")
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
                                    value={values.lastName}
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
                                    value={values.email}
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
                                    value={values.newPassword}
                                    onChange={(e) => {
                                        e.target.value !== ""
                                            ? setUpdatePassword(true)
                                            : setUpdatePassword(false);
                                        handleChange(e);
                                    }}
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
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.confirmPassword}
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