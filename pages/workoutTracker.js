import React from 'react';
import Layout from "../layouts"
import WorkoutTrackerTabs from "../components/workoutTrackerTabs"

const WorkoutTracker = (props) => {

    return(
        <Layout>
            <WorkoutTrackerTabs/>
        </Layout>
    )
}

export default WorkoutTracker;