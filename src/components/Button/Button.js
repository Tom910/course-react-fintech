import React from 'react';
import './Button.css';

export default ({ type, children, onClick }) => (
  <button
    className='Button'
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
)
