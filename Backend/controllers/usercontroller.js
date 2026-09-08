const User = require('../model/usermodel')

//login user
const loginuser = async(req,res)=>{

    res.json({msg:"Login User"})

}

//signup user
const signupuser = async(req,res)=>{

    const {email,password} = req.body
 
     try
     {
         const user= await User.signup(email,password)
         res.status(200).json({email,user})
     }
     catch(error)
     {
          res.status(400).json({error:error.message})
     }   
}
module.exports= {loginuser,signupuser}