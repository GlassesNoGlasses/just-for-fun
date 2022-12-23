import React from 'react'
import PropTypes from 'prop-types'
import './header.css'
import '../strings.js'
import { homeMap } from '../strings.js'

function Header(props) {
  return (
    <div className='header-container'>
      <span className='header-text'>
        {props.headerTitle}
      </span>
    </div>
  )
}

Header.propTypes = {
  headerTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  headerTitle: homeMap.homeTitleMessage,
}

export default Header
