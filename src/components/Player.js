import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

const Player = ({
  onRemove,
  name,
  onScoreChange,
  score
}) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={onRemove}>✖</a>
        {name}
      </div>
      <div className="player-score">
        <Counter onChange={onScoreChange} score={score} />
      </div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
  onScoreChange: PropTypes.func.isRequired
};

export default Player;