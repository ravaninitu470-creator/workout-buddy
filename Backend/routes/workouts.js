const express=require("express")
const Workout=require('../model/workout-model')

const {createworkout, getworkouts,getworkout, deleteworkout, updateworkout}=require("../controllers/workout-controller")
 const router=express.Router()

//  Route:api/workouts
//  Method:GET
//  Description:Get all workouts
//  Access:public
//  parameter:None

 router.get('/',getworkouts)

 //  Route:api/workouts/:id
//  Method:GET
//  Description:Get a single workouts by its id
//  Access:public
//  parameter:id

 router.get('/:id',getworkout)

 
 //  Route:api/workouts
//  Method:POST
//  Description:Create /Add a new workout
//  Access:public
//  parameter:None

 router.post('/',createworkout)

 //  Route:api/workouts/:id
//  Method:DELETE
//  Description:Get a single workouts by its id
//  Access:public
//  parameter:id

 router.delete('/:id',deleteworkout)

 //  Route:api/workouts/:id
//  Method:PATCH
//  Description:Update a workout by id
//  Access:public
//  parameter:id

 router.patch('/:id',updateworkout)

 module.exports=router