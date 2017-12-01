import React, { Component } from 'react';
import classnames from  'classnames';
import styled from 'styled-components';

const BlackWater = '#666';

class FormField extends Component {
  static defaultProps = {};

  render() {
    const { error, children, label, name, className } = this.props;

    return (
      <div className={className}>
        {error ? <FieldError>{error}</FieldError> : null}
        {label ? <FieldLabel htmlFor={name}>{label}</FieldLabel> : null}
        <FieldContext>
          {children}
        </FieldContext>
      </div>
    )
  }
};

const FieldError = styled.span`
  display: block;
  float: right;
  color: #F04953;
  line-height: 24px;
`;

const FieldLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 24px;
  color: ${BlackWater};
`;

const FieldContext = styled.span`
  display: block;
  margin-left: -24px;
  margin-right: -24px;
`;

const FormFieldstyled = styled(FormField)`
  position: relative;
  padding: 6px 24px;
  border: 1px solid rgba(0,0,0,0.15);
  margin-bottom: -1px;
  background-color: #fff;
  color: #333;
  opacity: 1;
  ${props => props.error ? 'border-color: #F04953;' : ''}
`;

export default FormFieldstyled;
