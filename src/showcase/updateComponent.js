import React, { Component } from 'react';

export default class Update extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.status !== this.props.status || nextProps.accounts !== this.props.accounts) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
