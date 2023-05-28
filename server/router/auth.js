const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate")

require("../db/conn");
const Register = require('./models/registerSchema')

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    try {
        // Check user is already registered or not
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email was already exist" });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Password are not same" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
            const userRegister = await user.save();
            res.status(201).json({ message: "User Registered Successfully..!!" });
        }
    }
    catch (error) {
        res.status(404).json({ error });
    }
})


//login route
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please filled the data}" })
        }
        // Check in database email is already registered or not
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            // 25892 is millisecond of 30days
            // After 30days token will be expires
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials " })
            }
            else {
                res.json({ message: "success login" });
            }
        }
        else {
            res.status(400).json({ error: "Email does not exist" })
        }
    }
    catch (error) {
        res.status(404).json({ error: "Error" })
    }
})

// authenticate is use for user not directly go to any page without login
router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})


// Logout section
router.get("/logout", (req, res) => {
    // Clear the cookie so user can't able to go anypage without login again
    // Make sure cookies name is same as you provide
    res.clearCookie('jwttoken', { path: "/" })
    res.status(200).send('User Logout');
})

module.exports = router;