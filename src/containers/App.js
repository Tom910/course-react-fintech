import React, { Component } from 'react';
import TimelineList from '../components/TimelineList/TimelineList';
import Order from '../components/Order/Order';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [{ title: 'PS4 pro', price: 30000, type: 'hobbie' }]
    }
  }

  handleSubmit = (order) => {
    this.setState({
      items: [...this.state.items,  order]
    });
  };

  render() {
    return (
      <div className="App">
        <TimelineList items={this.state.items}/>
        <Order handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
