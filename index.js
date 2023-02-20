const express = require('express');
const app = express();
const mongoose = require('mongoose');

const UserRouter = require('./routes/userroutes');;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
const dotenv = require('dotenv');
const dotenvs = require('dotenv').config()

mongoose.set('strictQuery', false)
// connect our database with mongoose;;;
mongoose.connect(process.env.MYDATABASENAME).then((data) => {
    console.log('database connection  okay to use')
}).catch((err) => {
    console.log(err.message)
})

app.use('/api', UserRouter)


app.listen(process.env.PORT, function () {
    console.log('Server listening')
})