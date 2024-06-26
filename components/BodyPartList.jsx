import React from 'react'

export default function BodyPartList(props){
    return (
        <div className="select-exercise">
        <form onChange={props.handleExercises}>
            <label htmlFor='bodyPart'>Select Body Part:</label>
            <select name="bodyPart" id="bodyPart">
                <option value="">-- Select Body Part --</option>
                <option value = "back"> Back</option>
                <option value = "cardio">Cardio</option>
                <option value = "chest">Chest</option>
                <option value = "lower arms">Lower Arms</option>
                <option value = "lower legs">Lower Legs</option>
                <option value = "neck">Neck</option>
                <option value = "shoulders">Shoulders</option>
                <option value = "upper arms">Upper Arms</option>
                <option value = "upper legs">Upper Legs</option>
                <option value = "waist">Waist</option>
            </select>
        </form>
        </div>
    )
}