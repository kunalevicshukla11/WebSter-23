const User = require('../models/User')


const test=(req,res)=>{
    res.json('test is working')
}

const registerUser = async (req,res)=>{
    try{
        const {name,email,password}=req.body;

        if(!name){
            return res.json({
                error: 'name is required'
            })
        }

        if(!password || password.length < 6){
            return res.json({
                error: 'password is required and should be 6 characters'
            })
        }

        const exist = await User.findOne({email})

        if(exist){
            return res.json({
                error: 'email is taken'
            })
        }

        const user = await User.create({
            name,email,password
        })

        return res.json(user)
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}