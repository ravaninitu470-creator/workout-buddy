import { useContext } from "react"
import { Workoutcontext } from "../context/Workoutcontext"


export const useWorkoutContext = () =>{

    const context =useContext(Workoutcontext)

    if(!context)
    {
        throw Error ('useWorkoutcontext must be used inside a workoutcontextprovider')
    }

    return context
}

