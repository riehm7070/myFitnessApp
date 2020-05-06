import React from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { TabHead, TabContainer, TabBody, Tab } from "../styles"

const HomeTab = ({ router }) => {
  const {
    query: { tab }
  } = router

  const isTabOne = tab === "1" || tab == null

  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/index", query: { tab: "1" } }}>
            <a>Todays Outlook</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>
            <div>
                  <h2>Today's Workout:</h2><br/>

                  <h2>Today's nutrition:</h2><br/>

                  <h2>Fasting hours Today:</h2>
            </div>
          </React.Fragment>}
      </TabBody>
    </TabContainer>
  )
}

export default withRouter(HomeTab);