import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './picrossSquare.css'

function PicrossSquare(props) {

    const [color, setColor] = useState('red');


  return (
    <div className='square' style={{background:color}} onClick={() => {color === 'red' ? setColor('black'): setColor('red')}}>
        boo!
    </div>
  )
}

PicrossSquare.propTypes = {}

export default PicrossSquare
