const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const DB = process.env.DATABASE;

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(DB);
    console.log("mongoose")
}