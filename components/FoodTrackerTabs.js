import React, {useState} from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../styles"
import Button from './button'
import SubmitFoodButton from './submitFoodButton'
import ThisWeeksFoodTable from './thisWeeksFoodTable'

const FoodTrackerTabs = ({ router }) => {
  const {
    query: { tab }
  } = router

  const [newFlag, setNewFlag] = useState(false);

  const isTabOne = tab === "1" || tab == null
  const isTabTwo = tab === "2"
  const isTabThree = tab === "3"
  const isTabFour = tab === "4"
  const isTabFive = tab === "5"
  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/foodTracker", query: { tab: "1" } }}>
            <a>Today</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/foodTracker", query: { tab: "2" } }}>
            <a>This week</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: "/foodTracker", query: { tab: "3" } }}>
            <a>This month</a>
          </Link>
        </Tab>
        <Tab selected={isTabFour}>
          <Link href={{ pathname: "/foodTracker", query: { tab: "4" } }}>
            <a>View all</a>
          </Link>
        </Tab>
        <Tab selected={isTabFive}>
          <Link href={{ pathname: "/foodTracker", query: { tab: "5" } }}>
            <a>Fasting log</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>
          <div>
          <Button newFlag={newFlag} setNewFlag={setNewFlag}></Button>
            {newFlag && <form>
                  <ul>
                      <li><label>Food Name<input type="text"></input></label></li>
                      <li><label>Time<input type="text"></input></label></li>
                      <li><label>Calories<input type="text"></input></label></li>
                      <li><label>Fats<input type="text"></input></label></li>
                      <li><label>Carbohydrates<input type="text"></input></label></li>
                      <li><label>Protein<input type="text"></input></label></li>
                  </ul>
                  <SubmitFoodButton></SubmitFoodButton>
              </form>}
            </div>
          </React.Fragment>}
        {isTabTwo && <React.Fragment>
          <ThisWeeksFoodTable></ThisWeeksFoodTable>
          </React.Fragment>}
        {isTabThree && <React.Fragment>Total each week total for all categories and show total for month at bottom</React.Fragment>}
        {isTabFour && <React.Fragment>Shows all recorded months totals</React.Fragment>}
        {isTabFive && <React.Fragment>Fasting log maybe..</React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(FoodTrackerTabs)