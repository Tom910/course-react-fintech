import React, { Component } from 'react';
import styled from 'styled-components';

export default class FormText extends Component {
  render() {
    const { value, onChange, placeHolder, name } = this.props;

    return (
      <InputStyled
        type='text'
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
      />
    )
  }
}

const InputStyled = styled.input`
  border: none;
  border-radius: 0px;
  outline: none;
  background-color: transparent;
  color: inherit;
  font: inherit;
  margin: 0;
  height: 36px;
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding: 0 24px;
  color: ${props => props.theme.color.pramery}
`;
