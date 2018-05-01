import React, { Component } from 'react';
import styles from './Players.scss';
import Player from '../Player';


class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          name: 'Jan Kowalski',
          points: 40,
          id: 1
        },
        {
          name: 'Grażyna Nowak',
          points: 12,
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
            id: this.state.firstAvailableId,
            points: 0
          }
        ],
        firstAvailableId: this.state.firstAvailableId + 1
      })
    }
  }

  handleRemove = (id) => {
    const updatedPlayerList = this.state.players.filter(player => player.id !== id);

    this.setState({
      players: updatedPlayerList
    })
  }

  increasePointsByOne = (playerId) => {
    let updatedPlayerPoints = this.state.players[playerId - 1].points = this.state.players[playerId - 1].points + 1

    this.setState({
      updatedPlayerPoints
    })
  }

  decreasePointsByOne = (playerId) => {
    let updatedPlayerPoints = this.state.players[playerId - 1].points > 0 &&
        (this.state.players[playerId - 1].points = this.state.players[playerId - 1].points - 1)

    this.setState({
      updatedPlayerPoints
    })
  }

  render() {
    return (
      <ul>
        {this.state.players.map((player) =>
          <Player
            playerId={player.id}
            playerName={player.name}
            playerPoints={player.points}
            removePlayer={this.handleRemove}
            decreasePointsByOne={this.decreasePointsByOne}
            increasePointsByOne={this.increasePointsByOne} />
        )}
      </ul>
    )
  }
}

export default Players;
