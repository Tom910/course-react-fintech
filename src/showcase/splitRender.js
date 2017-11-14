import React, { Component } from 'react';

export default class Table extends Component {
  render() {
    const { items } = this.props;

    return (
      <table>
        {items.map((item, index) => (
          <tr key={index}>
            {item.elements.map(element => (
              <td key={element.id}>{element.data}</td>
            ))}
          </tr>
        ))}
      </table>
    );
  }
}
