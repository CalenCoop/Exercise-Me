import React from 'react'
import { nanoid } from 'nanoid'

export default function BodyExercises(props){

    const exercise = props.exercise
    const name = exercise.name.split(' ').map(n=> n[0].toUpperCase() + n.slice(1)).join(' ')
    
    
    const instructions = exercise.instructions.map(step => (
        <li key={nanoid()}> {step} </li>
    ))

if(props.inCustomWorkout){
    return null
}

    return (

        <div className="exercise-list">
            <div className="container-button-title">
            <div className="title-and-image">
                <img className='exercise-pic' src = {exercise.gifUrl} alt='exercises' /> 
                <h3 className='exercise.name'>{name}</h3>
                </div>
                <div className="exercise-buttons">
                    <button className='custom-workout-button' onClick={props.handleCustomWorkout}>{props.inCustomWorkout ? 'Remove from': 'Add to' } Custom Workout</button>
                    <button className='instructions-button' onClick={props.handleInstructions}>
                        View Instructions
                    </button>
                </div>
                </div>
                <ol className={props.showInstructions ? 'show-instructions' : 'hide-instructions'}>
                    {instructions}
                </ol>
        </div>

    )
}