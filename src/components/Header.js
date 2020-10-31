import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';

const Header = ({ players }) => {
  return (
    <div className="header">
      <Stats players={players} />
      <h1>Scoreboard</h1>
    </div>
  );
}

Header.propTypes = {
  players: PropTypes.array.isRequired
};

export default Header;