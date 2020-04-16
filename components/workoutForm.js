import React from 'react'
import Button from '../components/button'
import SubmitWorkoutButton from '../components/submitWorkoutButton'

const WorkoutForm = (props) => {
    return(
        <div>
            <Button></Button>
            <form>
                  <ul>
                      <li><label>Exercise Name<input type="text"></input></label></li>
                      <li><label>Sets<input type="text"></input></label></li>
                      <li><label>Repititions<input type="text"></input></label></li>
                      <li><label>Time<input type="text"></input></label></li>
                      <li><label>Notes<input type="text"></input></label></li>
                  </ul>
                  <SubmitWorkoutButton></SubmitWorkoutButton>
              </form>
            </div>
    )
}

export default WorkoutForm;