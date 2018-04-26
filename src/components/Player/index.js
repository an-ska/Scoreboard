import React, { Component } from 'react';
import styles from './Player.scss';
import PlayerPoints from '../PlayerPoints';


class Player extends Component {
  render() {
    return (
      <li id={this.props.id}>
        {this.props.name}
        <p onClick={() => this.props.remove(this.props.id)}>x</p>
        <PlayerPoints/>
      </li>
    )
  }
}

export default Player;
