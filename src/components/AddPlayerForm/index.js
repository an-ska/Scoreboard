import React, { Component } from 'react';
import styles from './AddPlayerForm.scss';
import Players from '../Players/index';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: null
    }
  }

  handleClick = () => {
    this.setState( { userInput: document.querySelector('input').value });
  }

  render() {
    return (
      <div>
        <Players player={{name: this.state.userInput}}/>
        <form>
          <input type='text' placeholder='Type player name'/>
          <button type='button' onClick={this.handleClick}>Add Player</button>
      </form>
    </div>
    )
  }
}

export default AddPlayerForm;
