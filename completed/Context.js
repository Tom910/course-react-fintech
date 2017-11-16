import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TrackingContext extends Component {
  static childContextTypes = {
    tracking: PropTypes.func
  };

  getChildContext() {
    return { tracking: this.handleTracking };
  }

  handleTracking = () => {
    console.log('Tracking send');
  };

  render() {
    return this.props.children
  }
}

export default TrackingContext;


Order.contextTypes = {
  tracking: PropTypes.func
};
