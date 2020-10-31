import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ onChange, score }) => {
  return (
    <div className="counter" >
      <button className="counter-action decrement" onClick={() => onChange(-1)}>
        -
      </button>
      <div className="counter-score"> {score} </div>
      <button className="counter-action increment" onClick={() => onChange(1)}>
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  onChange: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired
}

export default Counter;