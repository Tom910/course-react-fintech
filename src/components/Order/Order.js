import React from 'react';

export default class Order extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      price: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      price: ''
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.handleSubmit(this.state);

    this.formClear();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name='title' value={this.state.title} onChange={this.handleInputChange} placeholder='Название' />
      <input type="text" name='price' value={this.state.price} onChange={this.handleInputChange} placeholder='Цена' />
      <button type='submit'>Отправить</button>
    </form>
  }
}
