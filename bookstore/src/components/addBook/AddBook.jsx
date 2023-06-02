import React from 'react'
import { Formik } from 'formik';
import { Button, FormControl, Hidden, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import * as Yup from "yup";
import { Visibility } from '@mui/icons-material';

const AddBook = () => {

    const initialValues = {
        name: "",
        price: "",
        categoryId: 0,
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

    const onSubmit = () => {

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

                            {/* firstName Field */}
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

                            {/* lastName Field */}
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

                            {/* Email field */}
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
                                        <MenuItem value="Self improvements">Self improvements</MenuItem>
                                        <MenuItem value="Tourist place">Tourist place</MenuItem>
                                        <MenuItem value="Horror">Horror</MenuItem>
                                        <MenuItem value="IT">IT</MenuItem>
                                        <MenuItem value="Horror1234">Horror1234</MenuItem>
                                        <MenuItem value="Science & technology">Science & technology</MenuItem>
                                        <MenuItem value="Business">Business</MenuItem>
                                        <MenuItem value="Test category">Test category</MenuItem>
                                        <MenuItem value="New updated category">New updated catoegory</MenuItem>
                                        <MenuItem value="Love story">Love story</MenuItem>
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

                            {/* Role Field */}
                            <div div className='d-flex flex-column m-4 col-md-5 position-relative' >
                                <Button style={{
                                    backgroundColor: 'green',
                                }}>
                                    <input type="file" id="file" onchange={fileValidation} style={{
                                        backgroundColor: 'red',
                                        color:'yellow',
                                    }} />
                                    {/* Image preview */}
                                    <div id="imagePreview"></div>
                                </Button>
                                {
                                    errors.roleId && touched.roleId && (
                                        <span className='p-1 fw-bold text-danger'
                                            style={{
                                                position: 'absolute',
                                                top: '100%',
                                                fontSize: '15px'
                                            }}
                                        >
                                            {errors.roleId}
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