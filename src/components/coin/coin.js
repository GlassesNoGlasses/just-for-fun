import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

export const coin = () => {
    const [score, setScore] = useState(0);
    const [doubleScore, setDoubleScore] = useState(0);
    function result (x) {
        if(Math.random() >= 0.5) {
            setScore((score + 1) * x);
            setDoubleScore(doubleScore * 2);
        }
        else {
            setScore(Math.max(0, score - doubleScore));
            setDoubleScore(0);
        }
    }
  return (
    <div>
        <span className='scoreCount'>{message + ": " + score}</span>
        <button className='toss' onClick={result(1)}>
            {buttonText}
        </button>
        <button className='double' onClick={result(doubleScore)}>
            {buttonText2}
        </button>
    </div>
  )
}

coin.propTypes = {
    score: PropTypes.number,
    message: PropTypes.string,
    buttonText: PropTypes.string,
    buttonText2: PropTypes.string
}

coin.defaultProps = {
    score: 0,
    message: `You have: ${score} points`,
    buttonText: 'Play',
    buttonText2: 'Double or Nothing'
};
