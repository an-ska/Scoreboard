import React, { Component } from 'react';
import styles from './AddPlayerForm.scss';
import Players from '../Players/index';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleClick = () => {
    this.props.addPlayer(this.state.userInput)

    this.setState({
      userInput: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' placeholder='Type player name' value={this.state.userInput} onChange={this.handleChange}/>
          <button type='button' onClick={this.handleClick}>Add Player</button>
        </form>
      </div>
    )
  }
}

export default AddPlayerForm;
