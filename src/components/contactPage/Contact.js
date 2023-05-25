import React, { useEffect, useState } from 'react'
import "./contact.css";
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [user, setUser] = useState([])
  const Navigate = useNavigate();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("Details", res.data);
      setUser(res.data)
    })
  }, [])

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, "Name must be more than 5 Character")
      .required("Please enter your name"),
    email: Yup.string().email("Email is not valid, Please enter the valid email address..!!")
      .required("Please enter your email"),
  });
  const initialValues = {
    name: "",
    email: ""
  }

  const onFormSubmit = async (values) => {
    console.log(values);
    Navigate("/contact")

    // API
    const getData = {
      "name": values.name,
      "email": values.email
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


  const handleSubmit = () => {

  }

  const handleChange = () => {

  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
      >
        {({ value, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-column m-4'>
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                id="name"
                name="name"
                // value={name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && (
                <span className='p-1 fw-bold text-danger'>
                  {errors.name}
                </span>
              )}
            </div>
            <div className='d-flex flex-column m-4'>
              <TextField
                variant="outlined"
                type="email"
                label="Email"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && (
                <span className='p-1 fw-bold text-danger'>
                  {errors.email}
                </span>
              )}
            </div>
            <Button variant="contained" type="submit" color='error' className='mx-4'>
              Submit
            </Button>
          </form>
        )}
      </Formik>

    </>
  )
}

export default Contact