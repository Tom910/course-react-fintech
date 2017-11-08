import React from 'react';

const validateRequire = value => !value;

export default class Order extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
      type: '',
      price: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      type: '',
      price: ''
    });
  }

  validationsForm() {
    let status = true;

    Object.keys(this.state).forEach(item => {
      if(validateRequire(this.state[item])) {
        status = false;
        return false;
      }
    });

    return status;
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if (!this.validationsForm()) {
      return;
    }

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
      <input type="text" name='type' value={this.state.type} onChange={this.handleInputChange} placeholder='Тип' />
      <input type="text" name='price' value={this.state.price} onChange={this.handleInputChange} placeholder='Цена' />
      <button type='submit'>Отправить</button>
    </form>
  }
}
