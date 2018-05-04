import React, {Fragment} from 'react';
import styles from './ScoreboardTotals.scss';

const ScoreboardTotals = ({totalPlayers, totalPoints}) => (
  <Fragment>
    <p>Total players number: {totalPlayers}</p>
    <p>Total points: {totalPoints}</p>
  </Fragment>
);

export default ScoreboardTotals;
