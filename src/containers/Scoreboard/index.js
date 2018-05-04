import React from 'react';
import styles from './Scoreboard.scss';
import Players from '../../components/Players';

const Scoreboard = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Scoreboard</h1>
    <Players />
  </div>
);

export default Scoreboard;
