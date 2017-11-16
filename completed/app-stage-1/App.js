import React, { Component } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Home from '../pages/Home';
import Account from '../pages/Account';
import CreateAccount from '../pages/CreateAccount';

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
      operations: {
        '-Kyt_8u9qxKNcXUsa679': {
          title: 'PS4',
          amount: 3000,
          category: 'hobbie',
          account: 'Основной'
        }
      }
    }
  }

  handleSubmit = (order) => {
    this.setState({
      operations: { ...this.state.operations, order }
    });
  };

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
                component={Account}
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
