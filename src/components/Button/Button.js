import React from 'react';

export default ({ type, children, onClick }) => (
  <button type={type} onClick={onClick}>{children}</button>
)
