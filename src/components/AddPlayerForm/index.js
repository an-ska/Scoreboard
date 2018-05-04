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

  handleClick = () => {
    this.props.addPlayer(this.state.userInput)

    this.setState({
      userInput: ''
    })
  }

  render() {
    return (
      <form className={styles.form}>
        <input type='text' placeholder='Type player name' value={this.state.userInput} onChange={this.handleChange} className={styles.input}/>
        <button type='button' onClick={this.handleClick} className={styles.button}>Add Player</button>
      </form>
    )
  }
}

export default AddPlayerForm;
