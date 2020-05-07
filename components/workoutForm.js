import React, {useState} from 'react'
import Button from '../components/button'
import SubmitWorkoutButton from '../components/submitWorkoutButton'

const WorkoutForm = (props) => {
     const [newFlag, setNewFlag] = useState(false);
    return(
        <div>
            <Button newFlag={newFlag} setNewFlag={setNewFlag}></Button>
            {newFlag && <form>
                  <ul>
                      <li><label>Exercise Name<input type="text"></input></label></li>
                      <li><label>Sets<input type="text"></input></label></li>
                      <li><label>Repititions<input type="text"></input></label></li>
                      <li><label>Weight<input type="text"></input></label></li>
                      <li><label>Time<input type="text"></input></label></li>
                      <li><label>Notes<input type="text"></input></label></li>
                  </ul>
                  <SubmitWorkoutButton></SubmitWorkoutButton>
              </form>}
            </div>
    )
}

export default WorkoutForm;