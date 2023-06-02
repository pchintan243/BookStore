import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { Formik } from 'formik';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as Yup from "yup";

const AddBook = () => {

    const [categories, setCategories] = useState([]);


    const initialValues = {
        name: "",
        price: "",
        categoryId: 5,
        description: "",
        base64image: "",
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Book Name is required"),
        description: Yup.string().required("Description is required"),
        categoryId: Yup.number()
            .min(1, "Category is required")
            .required("Category is required"),
        price: Yup.number().required("Price is required"),
        base64image: Yup.string().required("Image is required"),
    });

    function fileValidation() {
        var fileInput = document.getElementById('file');

        var filePath = fileInput.value;

        // Allowing file type
        var allowedExtensions =
            /(\.jpg|\.jpeg|\.png)$/i;

        if (!allowedExtensions.exec(filePath)) {
            alert('Invalid file type');
            fileInput.value = '';
            return false;
        }
        else {
            // Image preview
            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    document.getElementById(
                        'imagePreview').innerHTML =
                        '<img src="' + e.target.result
                        + '"/>';
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }
    }

    const onSubmit = async () => {
        try {
            await axios.post('https://book-e-sell-node-api.vercel.app/api/book');
            toast.success('Book Added Succesfully..!!', {
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
            toast.error('error', {
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
    console.log("l", categories)

    const getCategory = async () => {
        try {
            const url = await axios.get('https://book-e-sell-node-api.vercel.app/api/category/all');
            let res = await fetch(url);
            let parsedData = await res.json();
            setCategories(parsedData.result)
            // console.log(categories);
        }
        catch (err) {
            toast.error('error', {
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

    useEffect(() => {
        getCategory();
    }, []);
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
                            Add Book
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

                            {/* Bookname Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="text"
                                    label="BookName"
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

                            {/* Price Field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <TextField
                                    variant="outlined"
                                    type="number"
                                    label="Price"
                                    id="price"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.price && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.price}
                                    </span>
                                )}
                            </div>

                            {/* Category field */}
                            <div className='d-flex flex-column m-4 col-md-5 position-relative'>
                                <FormControl>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        name="categoryId"
                                        id="demo-simple-select"
                                        label="Category"
                                        onChange={handleChange}
                                        value={values.categoryId}
                                    >
                                        {categories.map((value) => (
                                            <MenuItem value={value.id}>
                                                {value.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                {errors.categoryId && touched.categoryId && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.categoryId}
                                    </span>
                                )}
                            </div>

                            {/* Description field */}
                            <div className='d-flex flex-column m-4 col-md-11 position-relative' style={{
                                width: "62.3rem"
                            }}>
                                <TextField
                                    id="description"
                                    name="description"
                                    label="Description *"
                                    variant="outlined"
                                    value={values.description}
                                    multiline
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                {errors.description && touched.description && (
                                    <span className='p-1 fw-bold text-danger'
                                        style={{
                                            position: 'absolute',
                                            top: '100%',
                                            fontSize: '15px'
                                        }}
                                    >
                                        {errors.description}
                                    </span>
                                )
                                }
                            </div>

                            {/* Submit Button */}
                            <div>
                                <Button variant="contained" type="submit" color='error' className='' style={{
                                    margin: '28px 90px'
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

export default AddBook