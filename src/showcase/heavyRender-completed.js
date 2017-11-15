import React, { Component } from 'react';

const heavyCombinatorData = (operations) => {
  /* Тяжелая при тяжелая логика */
};

class HeavyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: heavyCombinatorData(props.operations)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.operations !== this.props.operations) {
      this.setState({
        data: heavyCombinatorData(nextProps.operations)
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map(item => <div>item.text</div>)}
      </div>
    );
  }
}
