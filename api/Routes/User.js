const express = require('express')
const router = express.Router()
const User = require('../Models/User')
const jwt = require('jsonwebtoken')


// login
router.post('/login', async (req, res) => {
    let authHeader = req.headers.authorization;
    

    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
    const userUsername = auth[0]
    const password = auth[1]


    const filters = {
        user_username:userUsername,
        user_password:password
    }

    await User.userModel.find(filters, (err, user) => {
        if (err) {
            res.send({
                response: false,
                responseData: err.message
            })
        } else {
            
            if(user.length > 0){
                // success authentication
                // create token
                const token = jwt.sign({userData:user}, process.env.TOKEN_SECRET)
                res.header('auth-token', token)
            
                
            
                res.send({
                    response: true,
                    token: token,
                    responseData: user
                })
            }else{
                res.send({
                    response: false,
                    responseData: "Kullanıcı adı veya parola hatalı!"
                })
            }
           
        }

    })


})




module.exports = router