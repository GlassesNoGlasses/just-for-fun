import React, { useEffect } from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'
import PicrossSquare from './PicrossSquare';
import './picrossRow.css'

function PicrossRow(props) {
    // const size = props.size;
    const size = 4;
    //cannot multiple components; figure out alternative method
    const [squaresOnRow, setSquaresOnRow] = useState([<PicrossSquare/>, <PicrossSquare/>, <PicrossSquare/>]);
//     useEffect( {
// // setSquaresOnRow([...squaresOnRow, <PicrossSquare /> * size]);
//     })
  

  return (
    <div className= 'row' >
        {squaresOnRow}
    </div>
  )
  }
PicrossRow.propTypes = {}

export default PicrossRow

