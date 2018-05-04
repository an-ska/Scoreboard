import React, { Fragment } from 'react';
import styles from './ScoreboardTotals.scss';

const ScoreboardTotals = ({totalPlayers, totalPoints}) => (
  <Fragment>
    <p className={styles.total}>Players: {totalPlayers}</p>
    <p className={styles.total}>Total points: {totalPoints}</p>
  </Fragment>
);

export default ScoreboardTotals;
