import React from 'react'
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="login-box">
        <h2>Contact Us</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Contact Number</label>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact