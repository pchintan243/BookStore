const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const DB = "mongodb://127.0.0.1:27017/RegisterUser";

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(DB);
    console.log("mongoose")
}