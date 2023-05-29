const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const registerSchema = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true
    },
    Lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roleId: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now()
    },
    
    // tokens: [
    //     {
    //         // Store the token
    //         token: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ]
})

// We are hashing the password
// userSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//         this.password = await bcrypt.hash(this.password, 12);
//         this.cpassword = await bcrypt.hash(this.cpassword, 12);
//     }
//     next();
// });

// We are generating token
// userSchema.methods.generateAuthToken = async function () {
//     try {
//         // Generate the token
//         let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
//         // Add the token
//         this.tokens = this.tokens.concat({ token: token1 });
//         // Save the token in our database
//         await this.save();
//         return token1;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }


const Register = mongoose.model('Register', registerSchema);

module.exports = Register;