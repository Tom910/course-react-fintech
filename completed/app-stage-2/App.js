import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';

import database from '../services/database';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: {},
      user: {},
      operations: {}
    }
  }

  handleSubmit = (order) => {
    database.ref('operations').push(order);
  };

  componentDidMount() {
    const operationsRef = database.ref('operations');

    operationsRef.on('value', (snapshot) => {
      let items = snapshot.val();

      this.setState({
        operations: { ...this.state.operations, ...items }
      });
    });
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
              <Route exact path='/' component={Home} />
              <Route
                path='/account/:accountId'
                component={() => <Account operations={this.state.operations} onSubmit={this.handleSubmit}/>}
              />
              <Route path='/create-account' component={CreateAccount} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
