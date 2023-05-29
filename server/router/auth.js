const express = require('express');
const router = express.Router();
require("../db/conn");
const Register = require("../models/registerSchema");
router.use(express.json());
router.post('/register', async (req, res) => {
    const { Firstname, Lastname, Email, Password, ConfirmPassword, Role } = req.body;
    try {
        // console.log("first")
        const user = new Register({ Firstname, Lastname, Email, Password, ConfirmPassword, Role });
        // console.log("firstt")
        console.log(Firstname)
        // console.log(Lastname)
        // console.log(Email)
        // console.log(Password)
        // console.log(ConfirmPassword)
        // console.log(Role)

        const registerSave = await user.save();
        console.log("firsttt")
        res.render("Home")
        res.status(201).json({ message: "User Registered Successfully..!!" });
    }
    catch (error) {
        res.send("error");
    }
})

// const registerUser = async (req, res, next) => {
//     const user = req.body.data;
//     const registerUser = new Register(user);
//     try {
//         const data = await Register.save();
//         res.status(201).json({ data, message: "data added successfully." });
//     }
//     catch (err) {
//         const error = new Error("Post Error problem");
//         res.json({ error });
//         next(err);
//     }
// }

// router.route("/")
//     .post(registerUser)

module.exports = router;