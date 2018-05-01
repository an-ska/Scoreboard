import React, { Component } from 'react';
import styles from './Players.scss';
import ScoreboardTotals from '../ScoreboardTotals';
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
      firstAvailableId: 3,
      totalPlayers: 2
    }
  }

  componentWillReceiveProps = (incomingProps) => {
    const playerName = incomingProps.player.name;

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
        firstAvailableId: this.state.firstAvailableId + 1,
        totalPlayers: this.state.totalPlayers + 1
      })
    }
  }

  removePlayer = (playerId) => {
    const updatedPlayerList = this.state.players.filter(player => player.id !== playerId);

    this.setState({
      players: updatedPlayerList,
      totalPlayers: this.state.totalPlayers - 1
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
        <ScoreboardTotals totalPlayers={this.state.totalPlayers}/>
        {this.state.players.map((player) =>
          <Player
            playerId={player.id}
            playerName={player.name}
            playerPoints={player.points}
            removePlayer={this.removePlayer}
            decreasePointsByOne={this.decreasePointsByOne}
            increasePointsByOne={this.increasePointsByOne} />
        )}
      </ul>
    )
  }
}

export default Players;
