import React from 'react';
import Layout from "../layouts"
import FoodTrackerTabs from "../components/FoodTrackerTabs"


const FoodTracker = (props) => {

    return(
        <Layout>
            <FoodTrackerTabs/>
        </Layout>
    )
}

export default FoodTracker;