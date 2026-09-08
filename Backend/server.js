const express=require("express")
const dotenv=require("dotenv")
const mongoose=require('mongoose')

//Routes
const workoutsRoutes =require("./routes/workouts")
const userRoutes=require('./routes/user')

dotenv.config()

//Express App
const server=express()

// middleware
server.use(express.json())
server.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

// Routes (http://localhost:4000/)
server.get('/',(req,res)=>{

    res.json({
        msg:"Welcome to our application"
    })
})

server.use('/api/workouts/',workoutsRoutes)
server.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    server.listen(PORT,()=>{
    console.log(`server is up and listening on port:${PORT} & connected to db`)
})
})
.catch((error)=>{console.log(error)})

//PORT num
const PORT=process.env.PORT


