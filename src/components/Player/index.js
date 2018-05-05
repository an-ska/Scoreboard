import React, { Component } from 'react';
import styles from './Player.scss';
import PlayerPoints from '../PlayerPoints';

const Player = ({playerId, playerName, removePlayer, playerPoints, decreasePointsByOne, increasePointsByOne}) => (
  <li id={playerId} className={styles.player}>
    <i className={`${styles.removeIcon} fas fa-user-times`} onClick={() => removePlayer(playerId)}></i>
    <p className={styles.playerName}>{playerName}</p>
    <PlayerPoints
      playerId={playerId}
      decreasePointsByOne={decreasePointsByOne}
      increasePointsByOne={increasePointsByOne}
      playerPoints={playerPoints} />
  </li>
)

export default Player;
