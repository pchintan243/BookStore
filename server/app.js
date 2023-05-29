const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors());
dotenv.config({ path: './config.env' })

const port = process.env.PORT;

require("./db/conn");
const Register = require('./models/registerSchema')

app.use(express.json());
app.use(require('./router/auth'));


app.get('/', (req, res) => {
    res.send('fsf')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})