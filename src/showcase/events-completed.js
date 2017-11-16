import React, { Component } from 'react';

const HeavyComponent = () => {};

class DropdownItem extends Component {
  clickItem = () => {
    this.props.onClick(this.props.id);
  };

  render() {
    return <HeavyComponent onClick={this.clickItem} />
  }
}

class Dropdown extends Component {
  clickItem = (item) => {};

  render() {
    return <div>
      <DropdownItem onClick={this.clickItem} id='1'>1</DropdownItem>
      <DropdownItem onClick={this.clickItem} id='2'>2</DropdownItem>
      <DropdownItem onClick={this.clickItem} id='3'>3</DropdownItem>
    </div>;
  }
}

export default Dropdown;
