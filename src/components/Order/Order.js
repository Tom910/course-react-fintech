import React from 'react';

import Button from '../Button/Button';
import FormField from "../FormField/FormField";
import FormText from "../FormText/FormText";
import Form from "../Form/Form";

const validateRequire = value => !value;

export default class Order extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
      amount: ''
    };
  }

  formClear() {
    this.setState({
      title: '',
      category: '',
      amount: ''
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

    this.props.handleSubmit({...this.state, account: this.props.accountId });

    this.formClear();
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return <div>
      <h2>Добавить Покупку</h2>
      <Form onSubmit={this.handleSubmit}>
        <FormField label='Название' name='title'>
          <FormText value={this.state.title} name='title' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Категория' name='category'>
          <FormText value={this.state.category} name='category' onChange={this.handleInputChange} />
        </FormField>

        <FormField label='Цена' name='amount'>
          <FormText value={this.state.amount} name='amount' onChange={this.handleInputChange} />
        </FormField>
        <br />
        <Button type='submit'>Отправить</Button>
      </Form>
    </div>
  }
}
