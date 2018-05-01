import React, { Component } from 'react';
import styles from './PlayerPoints.scss';

const PlayerPoints = ({playerId, decreasePointsByOne, increasePointsByOne, playerPoints}) => (
  <div>
    <span onClick={() => decreasePointsByOne(playerId)}>-</span>
    <span>{playerPoints}</span>
    <span onClick={() => increasePointsByOne(playerId)}>+</span>
  </div>
)

export default PlayerPoints;
