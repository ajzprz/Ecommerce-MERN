// const {users} = require('../data');
const User = require("../models/User")

const registerUser = (req, res) => {
    users.push({id:2,username:req.body.name, password:req.body.password})
    res.send(`User, added successfully`)

}

const updateUser = (req,res)=>{
    res.send("user updated successfully")
}

module.exports = {registerUser, updateUser};