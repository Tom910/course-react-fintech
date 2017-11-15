import React, { Component } from 'react';

const loginChecker = Wrapper => {
  class LoginChecker extends Component {
    render() {
      return this.props.isAuth ?
        <Wrapper {...this.props}/> :
        <LoginForm />;
    }
  }

  return LoginChecker;
};
