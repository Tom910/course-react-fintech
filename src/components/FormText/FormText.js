import React, { Component } from 'react';
import './FormText.css'

export default class FormText extends Component {
  render() {
    const { value, onChange, placeHolder, name } = this.props;

    return (
      <input
        type='text'
        className='FormText'
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />
    )
  }
}
