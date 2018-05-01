import React, { Component } from 'react';
import styles from './ScoreboardTotals.scss';

class ScoreboardTotals extends Component {
  render() {
    return (
      <div>
        <p>Total players number: {this.props.totalPlayers}</p>
        <p>Total points: {this.props.totalPoints}</p>
      </div>
    )
  }
}

export default ScoreboardTotals;
