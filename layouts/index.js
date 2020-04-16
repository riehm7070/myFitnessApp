import React from "react"
import Link from "next/link"
import { Nav, PageBody } from "../styles"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <style>
          {`body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
          }
          a {
            text-decoration: none;
          }`}
        </style>
      </Head>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/workoutTracker">
          <a>Workouts</a>
        </Link>
        <Link href="/foodTracker">
          <a>Food</a>
        </Link>
        <Link href="/climbingTracker">
          <a>Climbing</a>
        </Link>
      </Nav>
      <PageBody>{children}</PageBody>
    </React.Fragment>
  )
}

export default Layout