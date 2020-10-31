import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddPlayerForm = ({ onAdd }) => {
  const [name, setName] = useState('');

  const onNameChange = (e) => {
    const name = e.target.value;
    setName(name);
  }

  const onSubmit = (e) => {
    if (e) e.preventDefault();
    onAdd(name);
    setName('');
  }

  return (
    <div className="add-player-form">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={name}
          onChange={onNameChange}
          placeholder="Player Name"
        />
        <input type="submit" value="Add Player" />
      </form>
    </div>
  );
};

AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired
};

export default AddPlayerForm;