import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';
import About from '../pages/About';

import database from '../services/database';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: {},
      user: {},
      operations: {}
    };
  }

  createOperation = (order) => {
    database.ref('operations').push(order);
  };

  createAccount = (account) => {
    database.ref('accounts').push(account);
  };

  componentDidMount() {
    this.subscribeOnFirebase('operations');
    this.subscribeOnFirebase('accounts');
  }

  subscribeOnFirebase(key) {
    const operationsRef = database.ref(key);

    operationsRef.on('value', (snapshot) => {
      let items = snapshot.val();

      this.setState({
        [key]: { ...this.state[key], ...items }
      });
    });
  };

  render() {
    const { accounts, operations } = this.state;

    return (
      <Router>
        <div className="App">
          <div className='App__layout'>
            <div className='App_sidebar'>
              <Sidebar accounts={accounts} />
            </div>
            <div className='App__content'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route
                  path='/account/:accountId'
                  component={() => <Account operations={operations} accounts={accounts} onSubmit={this.createOperation}/>}
                />
                <Route
                  path='/create-account'
                  component={() => <CreateAccount createAcoount={this.createAccount}/>}
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

export default App;
