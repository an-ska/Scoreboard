import React, { Component } from 'react';
import styles from './PlayerPoints.scss';

const PlayerPoints = ({playerId, decreasePointsByOne, increasePointsByOne, playerPoints}) => (
  <div>
    <span className={styles.subtrackPoint} onClick={() => decreasePointsByOne(playerId)}>-</span>
    <span>{playerPoints}</span>
    <span className={styles.addPoint} onClick={() => increasePointsByOne(playerId)}>+</span>
  </div>
)

export default PlayerPoints;
