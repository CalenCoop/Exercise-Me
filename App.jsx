import React from "react"
import {fetchExercises} from './exercisedb'
import BodyExercises from "./components/BodyExercises"
import BodyPartList from "./components/BodyPartList"
import CustomPlan from "./components/CustomPlan"
import { nanoid } from "nanoid"


export default function App() {
    const [exercises, setExercises] = React.useState([])
    const [customWorkout, setCustomWorkout]= React.useState([])
    
React.useEffect(()=>{
    setCustomWorkout(exercises.filter(workout => workout.inCustomWorkout))

},[exercises])


    
    async function handleExercises(e){
        const bodyPart = e.target.value
       try{
        const getExercise = await fetchExercises(bodyPart)
         setExercises(getExercise)
         setExercises(oldExercises => oldExercises.map(exercise =>({
            ...exercise, 
            showInstructions: false, 
            inCustomWorkout: false}
        )))
       } catch(error){
        console.log(error)
       }
    }

    console.log('exercises',exercises)


function handleInstructions(e){
    console.log(e)
    setExercises(oldExercises =>
         oldExercises.map(exercise => 
            e.includes(exercise.id) ? {...exercise, showInstructions: !exercise.showInstructions} : exercise
        ))
}
function handleCustomWorkout(e){

    setExercises(oldWorkout => 
        oldWorkout.map(workout => 
            e.includes(workout.id) ? {...workout, inCustomWorkout: !workout.inCustomWorkout} : workout
        ))
}


const exerciseElements = exercises.map(exercise =>(
    <BodyExercises 
    key = {exercise.id} 
    exercise = {exercise}
    handleInstructions = {() => handleInstructions(exercise.id)}
    showInstructions= {exercise.showInstructions}
    inCustomWorkout = {exercise.inCustomWorkout}
    customWorkout = {customWorkout}
    handleCustomWorkout = {() => handleCustomWorkout(exercise.id)}
    /> 
))

const customWorkoutElements = customWorkout.map(custom => (
    <CustomPlan 
    key ={custom.id} 
    customWorkout={custom}
    handleCustomWorkout={()=> handleCustomWorkout(custom.id)}
    handleInstructions = {()=> handleInstructions(custom.id)}
    showInstructions = {custom.showInstructions}
    /> 
))
 
    return(
        <div className="container">
            <div className="exercise-container">
                <div className="text-contianer">
                    <h1>Ready for a Workout?</h1>
                    <BodyPartList handleExercises={handleExercises} /> 
                    {customWorkoutElements.length > 0 &&
                    <h1>Custom Workout: </h1>
                    }
                    {customWorkoutElements}
                    <h2>Exercise Options:</h2>
                    {exerciseElements}
                </div>
            </div>
        </div>
    )
}
