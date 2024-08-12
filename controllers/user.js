// import the user Model
const userModel = require("../models/user")

const registerUser = async(req,res) =>{
    const body = req.body
    const newUser = new userModel(body)
    console.log(newUser)

try {
    const savedUser = await newUser.save()
    res.json(savedUser)
} catch (error) {
    res.json({message: error.message})
}
}

const getAllUsers = async(req,res)=>{
try {
    const user = await userModel.find().sort({createdAt: -1})
    res.json(user)
} catch (error) {
    res.json({message: error.message})
}    
}

const editAUser = async(req,res)=>{
    const {id, username, email, password, gender, age} = req.body
    updatedFields = {username, email, password, gender, age}

try {
    const updatedUser = await userModel.findByIdAndUpdate(id, updatedFields, {new:true})
    res.json(updatedUser)
} catch (error) {
    res.json({message: error.message})
}
}

const deleteUser = async(req,res)=>{
    const {id} = req.body

try {
    const deletedUser = await userModel.findByIdAndDelete(id)
    res.json(deletedUser)
} catch (error) {
    res.json({message: error.message})
}
}

module.exports = {registerUser, getAllUsers, editAUser, deleteUser}