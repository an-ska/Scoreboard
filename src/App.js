import React from 'react';
import { hot } from 'react-hot-loader';
import styles from './App.scss';
import Scoreboard from './containers/Scoreboard';

const App = () => (
  <Scoreboard />
);

export default hot(module)(App);
