import React, { Component } from 'react';
import Button from '../components/Button/Button';

const buttonStyles = { margin: '10px' };

export default class NewLinks extends Component {
  handleClick = () => {};

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} />
        <Button styles={buttonStyles}/>
      </div>
    );
  }
}
