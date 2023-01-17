import React, { useState } from 'react';
import './picrossSquare.css'

function PicrossSquare(props) {

    const [color, setColor] = useState('red');


  return (
    <button className='square' style={{background:color}} onClick={() => {color === 'red' ? setColor('black'): setColor('red')}}>
        boo!
    </button>
  )
}


export default PicrossSquare
