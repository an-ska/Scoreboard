import React, {Fragment} from 'react';
import styles from './Scoreboard.scss';
import Players from '../../components/Players';

const Scoreboard = () => (
  <Fragment>
    <h1>Scoreboard</h1>
    <Players />
  </Fragment>
);

export default Scoreboard;
