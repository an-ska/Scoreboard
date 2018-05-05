import React, { Component } from 'react';
import styles from './AddPlayerForm.scss';

class AddPlayerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleChange = e => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleKeyPress = e => {
    if (e.key !== 'Enter') return;

    if (this.state.userInput.length === 0) {
      e.preventDefault();
      return
    }

    if (this.state.userInput.length > 0) {
      e.preventDefault();
      this.props.addPlayer(this.state.userInput);

      this.setState({
        userInput: ''
      })
    }

  }

  handleClick = () => {
    if (this.state.userInput.length > 0) {
      this.props.addPlayer(this.state.userInput);

      this.setState({
        userInput: ''
      })
    }
  }

  render() {
    return (
      <form className={styles.form}>
        <input type='text' placeholder='Type player name' value={this.state.userInput} onChange={this.handleChange} onKeyPress={this.handleKeyPress} className={styles.input}/>
        <button type='button' onClick={this.handleClick} className={styles.button}>Add Player</button>
      </form>
    )
  }
}

export default AddPlayerForm;
