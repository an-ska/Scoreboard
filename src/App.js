import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import styles from './App.scss';
import Scoreboard from './containers/Scoreboard'

const App = () =>
(<Fragment>
  <div className=''>
    <Scoreboard />
  </div>
</Fragment>);

export default hot(module)(App);
