import React, { PureComponent } from 'react';

class TableItem extends PureComponent {
  render() {
    return <td>
      {this.props.data}
    </td>;
  }
}
class TableRow extends PureComponent {
  render() {
    return <tr>
      {this.props.elements.map(el => (
        <TableItem key={el.id} data={el.data} />
      ))}
    </tr>;
  }
}
class Table extends PureComponent {
  render() {
    return <table>
      {this.props.items.map((item, index) => <TableRow key={index} elements={item.elements} />)}
    </table>;
  }
}

export default Table;
