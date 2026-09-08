import React from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

// data-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const Workoutdetails = ({workout}) => {

  const {dispatch} = useWorkoutContext()
  const handleclick = async()=>{

    const response=await fetch('/api/workouts/' + workout._id,{

      method :'DELETE'
    })

    const json = await response.json()

    if(response.ok)
    {
          dispatch({type:'DELETE_WORKOUT',payload:json})
    }

  }
  return (
   <div className='workout-detail'>

    <h4>{workout.title}</h4>
    <p><strong>Reps:</strong>{workout.reps}</p>
    <p><strong>Load(in kgs):</strong>{workout.load}</p>
     <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
<span  onClick={handleclick}>delete</span>
   </div>
  )

}

export default Workoutdetails