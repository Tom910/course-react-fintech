import React, { Component } from 'react';

const heavyCombinatorData = (operations) => {
  /* Тяжелая при тяжелая логика */
};

class HeavyComponent extends Component {
  render() {
    const data = heavyCombinatorData(this.props.operations);

    return (
      <div>
        {data.map(item => <div>item.text</div>)}
      </div>
    );
  }
}
