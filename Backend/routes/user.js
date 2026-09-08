const express=require('express')

// user controller function

const {signupuser,loginuser}=require("../controllers/usercontroller")

const router=express.Router()

//login route
router.post('/login',loginuser)


// signup router
router.post('/signup',signupuser)





module.exports=router