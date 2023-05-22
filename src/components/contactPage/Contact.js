import React, { useState } from 'react'
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  return (
    <>
      <div className="login-box">
        <h2>Contact Us</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" value={name} onChange={(e) => { setName(e.target.value) }} required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" value={phone} onChange={(e) => { setPhone(e.target.value) }} required />
            <label>Contact Number</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact