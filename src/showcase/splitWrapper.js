import React, {Component} from "react";
import Table from './splitRender'

const getRandomColor = () => {
  var random = Math.floor(Math.random() * 100);

  switch (true) {
    case random < 25:
      return 'blue';
    case random < 50:
      return 'red';
    case random < 75:
      return 'green';
    case random < 100:
      return 'yellow';
    default:
      return 'black';
  }
};

const generateItems = () => {
  let count = 0;

  let result = [];
  for (var i = 0; i < 400; i++) {
    let elements = [];

    for (var j = 0; j < 100; j++) {
      elements.push({ id: ++count, data: <div style={{
          backgroundColor: getRandomColor(),
          width: '10px',
          height: '10px'
        }} /> })
    }

    result.push({ elements });
  }

  return result;
};

export default class Wrapper extends Component {
  constructor() {
    super();

    this.items = generateItems();
  }

  render() {
    return (
      <Table items={this.items} />
    )
  }

  componentDidMount() {
    // setInterval(() => { this.setState({ forceUpdate: Math.random() }) }, 500)
  }
}
