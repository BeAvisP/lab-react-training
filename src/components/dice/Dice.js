import React from 'react';

class Dice extends React.Component {
  state = {
    diceNumber: `/img/dice${Math.floor(Math.random() * 6 + 1)}.png`,
  };

  randomDice = () => {
    this.setState({ diceNumber: '/img/dice-empty.png' });

    setTimeout(() => {
      this.setState({
        diceNumber: `/img/dice${Math.floor(Math.random() * 6 + 1)}.png`,
      });
    }, 1000);
  };

  render() {
    return (
      <img src={this.state.diceNumber} onClick={() => this.randomDice()}></img>
    );
  }
}

export default Dice;
