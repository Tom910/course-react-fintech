import React, { Component } from 'react';
import { connect } from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';
import About from '../pages/About';

import { subscribeFirebaseAction } from '../middleware/subscribeFirebase';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.subscribeToFirebase('operations', 'UPDATE_OPERATION');
    this.props.subscribeToFirebase('accounts', 'UPDATE_ACCOUNT');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='App__layout'>
            <div className='App_sidebar'>
              <Sidebar />
            </div>
            <div className='App__content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  path='/account/:accountId'
                  component={Account}
                />
                <Route
                  path='/create-account'
                  component={CreateAccount}
                />
                <Route path='/about' component={About} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  subscribeToFirebase: (database, callType) => dispatch(subscribeFirebaseAction(database, callType))
});

export default connect(undefined, mapDispatchToProps)(App);
