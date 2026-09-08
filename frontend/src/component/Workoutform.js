import React, { useState } from 'react'

const Workoutform = () => {

    const [title,settitle]=useState('')
    const [reps,setreps]=useState('')
    const [load,setload]=useState('')
    const [error,seterror]=useState(null)
    const [emptyfield,setemptyfield] = useState([])

    const handlesubmit = async(e) =>{

        e.preventDefault();

        const workout ={title,reps,load}

        const response=await fetch('/api/workouts',{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':'application/json'
            }
        })
   
        const json= await response.json()

        if(!response.ok)
        {
             seterror(json.error)
             setemptyfield(json.emptyfield)
        }

        else
        {
           seterror(null)
           settitle('')
           setreps('')
           setload('')
           setemptyfield([])
           console.log("New Workout Added :",json)
        //    dispatch({type:'CREATE_WORKOUT',payload:json})
        }
    }

  return (
    <form className="create" onSubmit={handlesubmit}>
        <h3>Add a New Workout</h3>

        <label>Exercise Title:</label>
        <input type='text' value={title} onChange={(e)=>settitle(e.target.value)}
        className={emptyfield.includes('title')? 'error' :''}/>

        <label>Reps(in kgs):</label>
        <input type='number' value={reps} onChange={(e)=>setreps(e.target.value)}
        className={emptyfield.includes('reps')? 'error' :''}/>

        <label>Load:</label>
        <input type='number' value={load} onChange={(e)=>setload(e.target.value)}
        className={emptyfield.includes('load')? 'error' :''}/>

        <button>Add workout</button>
        {error && <div className='error'>{error}</div>}

    </form>
  )
}

export default Workoutform
