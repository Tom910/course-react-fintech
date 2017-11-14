import React, { Component } from 'react';
import TimelineList from '../components/TimelineList/TimelineList';
import Order from '../components/Order/Order';
import Sidebar from '../components/Sidebar/Sidebar';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      accounts: {},
      user: {},
      operations: [
        { title: 'PS4 pro', amount: 30000, category: 'hobbie', account: 'Основной', date: new Date() }
      ]
    }
  }

  handleSubmit = (order) => {
    this.setState({
      operations: [...this.state.operations,  order]
    });
  };

  render() {
    return (
      <div className="App">
        <div className='App__layout'>
          <div className='App_sidebar'>
            <Sidebar />
          </div>
          <div className='App__content'>
            <TimelineList operations={this.state.operations}/>
            <Order handleSubmit={this.handleSubmit} account='Основной' />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
