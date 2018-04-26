import React, { Component } from 'react';
import styles from './Players.scss';
import Player from '../Player/index';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Jan Kowalski',
          id: 1
        },
        {
          name: 'Grażyna Nowak',
          id: 2
        }
      ],
      firstAvailableId: 3
    }
  }

  componentWillReceiveProps = (incomingProps) => {
    let playerName = incomingProps.player.name;

    if (playerName !== null) {
      this.setState({
        players: [
          ...this.state.players,
          {
            name: playerName,
            id: this.state.firstAvailableId
          }
        ],
        firstAvailableId: this.state.firstAvailableId + 1
      })
    }
  }

  handleRemove = (id) => {
    const updatedList = this.state.players.filter(player => player.id !== id);

    this.setState({
      players: updatedList
    })
  }

  render() {
    return (
      <ul>
        {this.state.players.map((player) =>
          <Player id={player.id} name={player.name} remove={this.handleRemove}/>
        )}
      </ul>
    )
  }
}

export default Players;
