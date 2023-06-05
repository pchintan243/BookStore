import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, FormControl, InputLabel, TextField } from '@mui/material';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


const AddCategory = () => {

    const navigate = useNavigate();

    const initialValues = {
        name: ""
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Category Name is required"),
    });


    const onSubmit = async (values) => {

        const getData = {
            "name": values.name
        }
        try {
            await axios.post('https://book-e-sell-node-api.vercel.app/api/category', getData);

            navigate("/category")
            toast.success('Category Added Succesfully..!!', {
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
        catch (err) {
            toast.error('Error getting while category add..!!', {
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
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                    <div className="container">
                        <h1
                            style={{
                                margin: '35px 0px 17px',
                                textAlign: 'center',
                                fontWeight: 700
                            }}
                        >
                            Add Category
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

                        <form onSubmit={handleSubmit}>
                            {/* Category Field */}
                            <div className='d-flex flex-column ms-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    label="Category Name"
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.name && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.name}
                                    </span>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className='m-0'>
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

export default AddCategory