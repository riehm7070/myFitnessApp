import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../styles"
import SubmitWorkoutButton from "../components/submitWorkoutButton"
import Button from "../components/button"
import WorkoutForm from '../components/workoutForm'

const WorkoutTrackerTabs = ({ router }) => {
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
          <Link href={{ pathname: "/workoutTracker", query: { tab: "1" } }}>
            <a>Chest and Triceps</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/workoutTracker", query: { tab: "2" } }}>
            <a>Biceps and Shoulders</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: "/workoutTracker", query: { tab: "3" } }}>
            <a>Legs</a>
          </Link>
        </Tab>
        <Tab selected={isTabFour}>
          <Link href={{ pathname: "/workoutTracker", query: { tab: "4" } }}>
            <a>Back</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>
          <WorkoutForm></WorkoutForm>
          </React.Fragment>}
        {isTabTwo && <React.Fragment>
          <WorkoutForm></WorkoutForm>
          </React.Fragment>}
        {isTabThree && <React.Fragment>
          <WorkoutForm></WorkoutForm>
          </React.Fragment>}
        {isTabFour && <React.Fragment>
          <WorkoutForm></WorkoutForm>
          </React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(WorkoutTrackerTabs)