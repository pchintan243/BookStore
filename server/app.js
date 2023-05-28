const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors());
dotenv.config({ path: './config.env' })

const port = process.env.PORT;

require("./db/conn");

app.use(require('./router/auth'));

const Register = require('./models/registerSchema')

app.get('/', (req, res) => {
    res.send('fsf')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})