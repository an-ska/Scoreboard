import React, { Component } from 'react';
import styles from './PlayerPoints.scss';

class PlayerPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    }
  }

  increasePointsByOne = () => {
    this.setState({
      points: this.state.points + 1
    })
  }

  decreasePointsByOne = () => {
    if(this.state.points > 0) {
      this.setState({
        points: this.state.points - 1
      })
    }
  }

  render() {
    return (
      <div>
        <span onClick={this.decreasePointsByOne}>-</span>
        <span>{this.state.points}</span>
        <span onClick={this.increasePointsByOne}>+</span>
      </div>
    )
  }
}

export default PlayerPoints;
