import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../styles"
import Button from "./button"
import SubmitClimbButton from "./submitClimbButton"
import ClimbingForm from '../components/climbingForm'

const ClimbingTrackerTabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  const isTabThree = tab === "3"
  const isTabFour = tab === "4"
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/climbingTracker", query: { tab: "1" } }}>
            <a>Top Rope Routes</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/climbingTracker", query: { tab: "2" } }}>
            <a>Lead Routes</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: "/climbingTracker", query: { tab: "3" } }}>
            <a>Bouldering</a>
          </Link>
        </Tab>
        <Tab selected={isTabFour}>
          <Link href={{ pathname: "/climbingTracker", query: { tab: "4" } }}>
            <a>Training</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>
            <ClimbingForm></ClimbingForm>
            </React.Fragment>}


        {isTabTwo && <React.Fragment>
            <ClimbingForm></ClimbingForm>
            </React.Fragment>}


        {isTabThree && <React.Fragment>
            <ClimbingForm></ClimbingForm>
            </React.Fragment>}


        {isTabFour && <React.Fragment>
            <div>
                <Button></Button>
                <form>
                    <ul>
                        <li><label>Routine Name<input id="test" type="text"></input></label></li>
                        <li><label>Time<input type="text"></input></label></li>
                        <li><label>Instructions<textarea></textarea></label></li>
                        <li><label>Notes<input type="text"></input></label></li>
                    </ul>
                    <SubmitClimbButton></SubmitClimbButton>
                </form>
            </div>
            </React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(ClimbingTrackerTabs)