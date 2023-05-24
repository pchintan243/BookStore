import React, { useState } from 'react'
import "./contact.css";
import { Button, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from "yup";

const Contact = () => {
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phone, setPhone] = useState()

  const initialValues = {
    name: "",
    email: ""
  }

  const onFormSubmit = () => {

  }
  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={ }
        onSubmit={onFormSubmit}
      >
        {(value, handleChange, handleSubmit) => {
          {/* return (); */ }
        }}
      </Formik>
      <form>
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
          // onChange={handleChange}
          // onBlur={handleBlur}
          />
          {/* {touched.name && (
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
          )} */}
          <TextField
            variant="outlined"
            type="email"
            label="Email"
            id="email"
            name="email"
          // onChange={handleChange}
          // onBlur={handleBlur}
          />
        </div>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </>
  )
}

export default Contact