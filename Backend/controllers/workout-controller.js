const Workout=require("../model/workout-model")
const mongoose=require("mongoose")

// get all workouts

exports.getworkouts=async(req,res)=>{

    const workouts= await Workout.find({}).sort({createdAt:-1})

    if(!workouts)
     return res.status(200).json({error:"No entries found"})

    res.status(200).json(workouts)

}

// get single workout by id

exports.getworkout= async(req,res)=>{

    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout"})
    }

    const workout= await Workout.findById(id)

    if(!workout)
        return res.status(404).json({error:"No such Workout"})

        res.status(200).json(workout)
}

// create a new workout

exports.createworkout=async(req,res)=>{

    const {title,reps,load}=req.body

    let emptyfield= []

    if(!title)
    {
        emptyfield.push('title')
    }

    else if(!reps)
    {
        emptyfield.push('reps')
    }

    else if(!load)
    {
        emptyfield.push('load')
    }

  if(emptyfield.length>0)
  {
    return res.status(400).json({error:'please fill out all the field',emptyfield})
  }

    try
    {
        // add doc to db
      const workout=await Workout.create({title,reps,load})
      res.status(200).json(workout)
    }
    catch(error)
    {
         res.status(400).json({error:error.message})
    }
}

// delete a workout by its id

exports.deleteworkout=async(req,res)=>{

    const {id}=req.params

     if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout"})
    }
    
    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout)
    {
        return  res.status(400).json({error:"No such workout to delete"})
    }
    res.status(200).json(workout)
}

// update a workout by its id

exports.updateworkout=async(req,res)=>
{
    const {id}=req.params

      if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"No such workout"})
    }

    const workout = await Workout.findOneAndUpdate(
        {_id:id},

        {...req.body},

        {new :true}
    )

    if(!workout)
    {
        return res.status(400).json({error:"No such workout"})
    }

    res.status(200).json(workout)

}