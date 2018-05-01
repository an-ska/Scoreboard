import React, { Component } from 'react';
import styles from './Player.scss';
import PlayerPoints from '../PlayerPoints';

const Player = ({playerId, playerName, removePlayer, playerPoints, decreasePointsByOne, increasePointsByOne}) => (
  <li id={playerId}>
    {playerName}
    <p onClick={() => removePlayer(playerId)}>x</p>
    <PlayerPoints
      playerId={playerId}
      decreasePointsByOne={decreasePointsByOne}
      increasePointsByOne={increasePointsByOne}
      playerPoints={playerPoints}/>
  </li>
)

export default Player;
