import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';
import './picross.css'
import PicrossRow from './PicrossRow'

function Picross(props) {

  const [rows, setRows] = useState([]);
  const dim = props.size;

  return (
    <div className='picross-container'>
      <PicrossRow />
        {/* <PicrossRow event={() => {
          setRows([...rows, <PicrossRow /> * 4])
        }}/> */}
    </div>
  )
}

Picross.propTypes = {}

export default Picross
