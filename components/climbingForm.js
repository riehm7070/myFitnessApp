import React, {useState} from 'react'
import Button from '../components/button'
import SubmitClimbButton from '../components/submitClimbButton'

const ClimbingForm = (props) => {
    const [newFlag, setNewFlag] = useState(false);
    return(
        <div>
                <Button newFlag={newFlag} setNewFlag={setNewFlag}></Button>
            {newFlag && <form>
                    <ul>
                        <li><label>Route Rating<input type="text"></input></label></li>
                        <li><label>Location<input type="text"></input></label></li>
                        <li><label># of Takes<input type="text"></input></label></li>
                        <li><label>Notes<input type="text"></input></label></li>
                    </ul>
                    <SubmitClimbButton></SubmitClimbButton>
                </form>}
            </div>
    )
}

export default ClimbingForm;