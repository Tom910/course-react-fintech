import React, { Component } from 'react';

const HeavyComponent = () => {};

class Dropdown extends Component {
  clickItem(item) {}
  render() {
    return <div>
      <HeavyComponent onClick={() => this.clickItem('1')}>1</HeavyComponent>
      <HeavyComponent onClick={() => this.clickItem('2')}>2</HeavyComponent>
      <HeavyComponent onClick={() => this.clickItem('3')}>3</HeavyComponent>
    </div>;
  }
}

export default Dropdown;
