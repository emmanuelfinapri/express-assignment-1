const mongoose = require('mongoose')

// create a new Schema Object
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        enum: ["Male", "Female"]
    },
    age:{
        type: Number
    }


},
{timestamps:true},
)

const userModel = mongoose.model("User", userSchema)
module.exports = userModel