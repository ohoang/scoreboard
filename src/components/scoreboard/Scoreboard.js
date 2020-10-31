import React, { useState, useEffect } from 'react';

import Header from '../Header';
import Player from '../Player';
import AddPlayerForm from '../AddPlayerForm';

import './scoreboard.css';

const sortPlayers = (players) => {
  return players.sort((a, b) => {

    var aScore = a.score;
    var bScore = b.score;
    var aName = a.name;
    var bName = b.name;
    console.log(aName + " | " + bName);

    if (aScore === bScore) {
      return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
    }
    else {
      return (bScore < aScore) ? -1 : 1;
    }
  });
};

const Scoreboard = () => {
  const [players, setPlayers] = useState([
    {
      name: 'Lee',
      score: 0,
    },
    {
      name: 'Linda',
      score: 0,
    },
    {
      name: 'Kazu',
      score: 0,
    },
    {
      name: 'Oscar',
      score: 0,
    },
    {
      name: 'Rock',
      score: 0,
    }
  ]);

  useEffect(() => {
    let newPlayers = [...players];
    const timer = setTimeout(() => {
      const sorted = sortPlayers(newPlayers);
      setPlayers([...sorted]);
    }, 1300);

    return () => clearTimeout(timer);
  }, [players]);

  const onScoreChange = (index, delta) => {
    let newPlayers = [...players]; // copying the old datas array
    newPlayers[index].score += delta;
    setPlayers([...newPlayers]);
  }

  const onAddPlayer = (name) => {
    let newPlayers = [...players]; // copying the old datas array
    newPlayers.push({ name: name, score: 0 });
    setPlayers([...newPlayers]);
  }

  const onRemovePlayer = (index) => {
    let newPlayers = [...players]; // copying the old datas array
    newPlayers.splice(index, 1);
    setPlayers([...newPlayers]);
  }

  return (
    <div className="scoreboard">
      <Header players={players} />
      <div className="players">
        {(players || []).map((player, index) => {
          return (
            <Player
              name={player.name}
              score={player.score}
              key={player.name}
              onScoreChange={(delta) => onScoreChange(index, delta)}
              onRemove={() => onRemovePlayer(index)}
            />
          );
        })}
      </div>
      <AddPlayerForm onAdd={onAddPlayer} />
    </div>
  );
};

export default Scoreboard;
