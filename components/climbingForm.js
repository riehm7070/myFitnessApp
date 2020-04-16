import React from 'react'
import Button from '../components/button'
import SubmitClimbButton from '../components/submitClimbButton'

const ClimbingForm = (props) => {
    return(
        <div>
                <Button></Button>
                <form>
                    <ul>
                        <li><label>Rating<input type="text"></input></label></li>
                        <li><label>Location<input type="text"></input></label></li>
                        <li><label>Takes<input type="text"></input></label></li>
                        <li><label>Notes<input type="text"></input></label></li>
                    </ul>
                    <SubmitClimbButton></SubmitClimbButton>
                </form>
            </div>
    )
}

export default ClimbingForm;