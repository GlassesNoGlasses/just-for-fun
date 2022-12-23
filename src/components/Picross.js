import React from 'react'
import PropTypes from 'prop-types'
import './picross.css'
import PicrossSquare from './PicrossSquare'

function Picross(props) {
  return (
    <div className='picross-container'>
        <PicrossSquare />
    </div>
  )
}

Picross.propTypes = {}

export default Picross
