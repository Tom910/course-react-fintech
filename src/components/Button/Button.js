import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, children, onClick }) => (
  <button
    className='Button'
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string
};

export default Button
