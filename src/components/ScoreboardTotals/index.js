import React, { Component } from 'react';
import styles from './ScoreboardTotals.scss';

class ScoreboardTotals extends Component {
  render() {
    return (
      <div>
        {this.props.totalPlayers}
      </div>
    )
  }
}

export default ScoreboardTotals;
