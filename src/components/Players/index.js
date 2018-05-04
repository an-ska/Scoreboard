import React, { Component } from 'react';
import styles from './Players.scss';
import ScoreboardTotals from '../ScoreboardTotals';
import Player from '../Player';
import AddPlayerForm from '../AddPlayerForm';

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
      totalPlayers: 2,
      totalPoints: 52
    }
  }

  addPlayer = (userInput) => {
    const playerName = userInput;

    if (playerName !== '') {
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
        totalPlayers: this.state.totalPlayers + 1,
        totalPoints: this.state.totalPoints,
      })
    }
  }

  removePlayer = (playerId) => {
    const updatedPlayerList = this.state.players.filter(player => player.id !== playerId);
    let removedPlayerId = this.state.players.findIndex(player => player.id === playerId)
    const removedPlayer = this.state.players[removedPlayerId]
    const updatedTotalPoints = this.state.totalPoints - removedPlayer.points

    this.setState({
      players: updatedPlayerList,
      totalPlayers: this.state.totalPlayers - 1,
      totalPoints: updatedTotalPoints
    })
  }

  increasePointsByOne = (playerId) => {
    let playerToUpdate = this.state.players.findIndex(player => player.id === playerId)
    let updatedPlayerPoints = this.state.players[playerToUpdate].points = this.state.players[playerToUpdate].points + 1
    let updatedTotalPoints = this.state.totalPoints + 1

    this.setState({
      updatedPlayerPoints,
      totalPoints: updatedTotalPoints
    })
  }

  decreasePointsByOne = (playerId) => {
    let playerToUpdate = this.state.players.findIndex(player => player.id === playerId)
    let updatedTotalPoints = this.state.players[playerToUpdate].points >
    0 ? this.state.totalPoints - 1 : this.state.totalPoints
    let updatedPlayerPoints = this.state.players[playerToUpdate].points > 0 &&
        (this.state.players[playerToUpdate].points = this.state.players[playerToUpdate].points - 1)

    this.setState({
      totalPoints: updatedTotalPoints,
      updatedPlayerPoints,

    })
  }

  render() {
    return (
      <div>
        <ul>
          <ScoreboardTotals
            totalPlayers={this.state.totalPlayers}
            totalPoints={this.state.totalPoints}
          />
          {this.state.players.map((player) =>
            <Player
              playerId={player.id}
              playerName={player.name}
              playerPoints={player.points}
              removePlayer={this.removePlayer}
              decreasePointsByOne={this.decreasePointsByOne}
              increasePointsByOne={this.increasePointsByOne}
            />
          )}
        </ul>
        <AddPlayerForm addPlayer={this.addPlayer}/>
      </div>
    )
  }
}

export default Players;
