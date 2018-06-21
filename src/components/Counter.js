import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <p>
        Clicked: {value} times
        <br/>
        <button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
      </p>
    );
  }
}
