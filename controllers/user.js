const User = require("../models/User")
const bcrypt = require("bcrypt")
exports.register = async(req , res) => {
    try{
        const{name , email , password , phone} = req.body
        const foundUser = await User.findOne({email})
        if (foundUser){
            return res.send(400).send({msg : "Email should be unique ..."})
        }
        const saltRounds = 10
        const hashedpassword = await bcrypt.hash(password , saltRounds)
        const newUser = new User({...req.body})
        newUser.password = hashedpassword
        await newUser.save()
        res.status(200).send({msg : "Register Succ .." , user: newUser})
    } catch(error){
        res.status(400).send({msg : "Can not register the user"})
    }
}
exports.login = async  (req , res) => { 
    try{
        const {email , password} = req.body
        const foundUser = await User.findOne({email})
        if (!foundUser){
            return res.status(400).send({msg : "Bad credential..."})
        }
        const checkPassword = await bcrypt.compare(password , foundUser.password)
        if (!checkPassword){
            return res.send(400).send({msg : "Bad credential..."})
        }
        res.status(200).send({msg:"login succ .." , user: foundUser})
    }
    catch{
        res.status(400).send({msg:"Can't login ..."})
    }
    res.send("login route")
}
