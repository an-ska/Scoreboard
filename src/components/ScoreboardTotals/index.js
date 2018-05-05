import React from 'react';
import styles from './ScoreboardTotals.scss';

const ScoreboardTotals = ({totalPlayers, totalPoints}) => (
  <div className={styles.totals}>
    <p className={styles.total}>Players: {totalPlayers}</p>
    <p className={styles.total}>Total points: {totalPoints}</p>
  </div>
);

export default ScoreboardTotals;
