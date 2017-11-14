import React, { Component } from 'react';
import classnames from  'classnames';
import './FormField.css';

class FormField extends Component {
  static defaultProps = {};

  render() {
    const { error, children, label, name } = this.props;

    return (
      <div className={classnames("FormField", { 'FormField--error': error })}>
        {error ? <span className='FormField__error'>{error}</span> : null}
        {label ? <label className='FormField__label' htmlFor={name}>{label}</label> : null}
        <span className='FormField__content'>
          {children}
        </span>
      </div>
    )
  }
};

export default FormField;
