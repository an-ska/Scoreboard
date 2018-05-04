import React, { Component } from 'react';
import styles from './ScoreboardTotals.scss';

const ScoreboardTotals = ({totalPlayers, totalPoints}) => (
  <div>
    <p>Total players number: {totalPlayers}</p>
    <p>Total points: {totalPoints}</p>
  </div>
)

export default ScoreboardTotals;
