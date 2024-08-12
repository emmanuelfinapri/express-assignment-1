const express = require('express')
const routes = express.Router()
const {registerUser, getAllUsers, editAUser, deleteUser } = require("../controllers/user")

//creating our endpoints
routes.post("/register-user", registerUser)
routes.get("/get-all-users", getAllUsers)
routes.put("/edit-user", editAUser)
routes.delete("/delete-user", deleteUser)


//export routes
module.exports = routes 