import React from "react"
import PropTypes from 'prop-types'
import './Home.css'
import '../strings'
import Header from "../components/Header"
import Picross from "../components/Picross"
import Intro from "../components/Intro"

function Home(props) {
  return (
    <div>
        <Header />
        <Intro />
        <Picross />
    </div>
  )
}

Home.propTypes = {
}

export default Home

