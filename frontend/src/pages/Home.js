import React, { useEffect} from 'react'

import Workoutdetails from '../component/Workoutdetails'
import Workoutform from '../component//Workoutform'
import {useWorkoutContext} from '../hooks/useWorkoutContext'



const Home = () => {

    //useState
    // const [workouts,setworkout]=useState(null)
    const {workouts,dispatch} = useWorkoutContext()

   useEffect(()=>{
   
      const fetchworkout=async()=>{

      const response=  await fetch('/api/workouts')
      const json=await response.json()

      if(response.ok)
      {
              // setworkout(json)
              dispatch({type:'SET_WORKOUTS',payload:json})
      }
      }
           fetchworkout()
   })


  return (
    <div className='home'>

       <div className='workouts'>
        {
            workouts && workouts.map((workout)=>(

            //  <p key={workout._id}>{workout.title}</p>
            <Workoutdetails key={workout._id} workout={workout} />
            ))

        }

       </div>

     <Workoutform/>

    </div>
  )
}

export default Home