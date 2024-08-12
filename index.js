// Emmanuel Finapri Mongoose and MongoDB assignment
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//import routes
const userRoute = require('./routes/user')

dotenv.config()

//create instance of the application
const app = express()

// create connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("connected"))
.catch(()=>console.log("Error couldn't connect"))

// middleware to extract the body
app.use(express.json()) // for JSON used in our body

// create PORT variable
const PORT = process.env.PORT

//use route
app.use(userRoute)

// listen to connection on specified PORT
app.listen(PORT, ()=>{
    console.log(`App is running on Port ${PORT}`)
})