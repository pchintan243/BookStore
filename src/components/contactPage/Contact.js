import React, { useState } from 'react'
import "./contact.css";
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState()
  const Navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5, "Name must be more than 5 Character"),
    email: Yup.string().email("Email is not valid, Please enter the valid email address..!!"),
  });
  const initialValues = {
    name: "",
    email: ""
  }

  const onFormSubmit = (values) => {
    console.log(values);
    Navigate("/contact")
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
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 5,
              }}
            >
              <TextField
                variant="outlined"
                type="text"
                label="Name"
                id="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && (
                <span
                  style={{
                    padding: 5,
                    color: "red",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {errors.name}
                </span>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: 5,
              }}
            >
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
                <span
                  style={{
                    padding: 5,
                    color: "red",
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  {errors.email}
                </span>
              )}
            </div>
            <Button variant="contained" type="submit" className="">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  )
}

export default Contact