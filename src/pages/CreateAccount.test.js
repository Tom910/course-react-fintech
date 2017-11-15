import React from 'react';
import { mount } from 'enzyme';
import CreateAccount from './CreateAccount';

const createEvent = (name, value) => ({ target: { name, value }});

describe('CreateAccount', () => {
  /*
  * Необходимо создать страницу, на которой будет реализована возможность создания нового аккаунта
  * Нужно добавить форму на странице.
  * Мы будем прокидывать функцию createAcoount на страницу, которая должна вызваться с данными. Если форма валидна
  * */
  let component;
  let handleSubmit;

  beforeEach(() => {
    handleSubmit = jest.fn();
    component = mount(<CreateAccount createAcoount={handleSubmit} />);
  });

  describe('Поле name', () => {
    /*
    Нужно добавить новое поле с названием type, в которое можно ввести тип операции
     */
    it('Проверяем, что это поле есть в форме', () => {
      expect(component.find('input[name="name"]').length).toBe(1);
    });

    it('Проверяем, что в поле можно записать значение и оно будет в state', () => {
      component.find('input[name="name"]').simulate('change', createEvent('name', 'Безумные траты'));

      expect(component.state().name).toBe('Безумные траты');
    });

    it('В первоначальном стейте компонента есть параметр name', () => {
      expect(component.state().name).toBe('');
    });
  });

  describe('Поле currency', () => {
    /*
    Нужно добавить новое поле с названием type, в которое можно ввести тип операции
     */
    it('Проверяем, что это поле есть в форме', () => {
      expect(component.find('input[name="currency"]').length).toBe(1);
    });

    it('Проверяем, что в поле можно записать значение и оно будет в state', () => {
      component.find('input[name="currency"]').simulate('change', createEvent('currency', 'Безумные траты'));

      expect(component.state().currency).toBe('Безумные траты');
    });

    it('В первоначальном стейте компонента есть параметр name', () => {
      expect(component.state().currency).toBe('');
    });
  });

  describe('Поле description', () => {
    /*
    Нужно добавить новое поле с названием type, в которое можно ввести тип операции
     */
    it('Проверяем, что это поле есть в форме', () => {
      expect(component.find('input[name="description"]').length).toBe(1);
    });

    it('Проверяем, что в поле можно записать значение и оно будет в state', () => {
      component.find('input[name="description"]').simulate('change', createEvent('description', 'Безумные траты'));

      expect(component.state().description).toBe('Безумные траты');
    });

    it('В первоначальном стейте компонента есть параметр name', () => {
      expect(component.state().description).toBe('');
    });
  });

  describe('Валидация', () => {
    /*
    Мы не хотим отправлять форму, если какое либо из полей пустое.
    Для этого, мы должны добавить валидацию и отпраправлять форму, только когда оба поля заполнены
    Нужно добавить валидацию полей в Order.js. Пока будете валидация только на предмет не пустого значения.
    Но, нужна такая реализация, которую можно будет потом расширить к примеру - валидацию дат, валидация типа введенных данных.
     */
    it('Заполняем только поле name и отправляем', () => {
      component.find('input[name="name"]').simulate('change',createEvent('name', 'Кредитка'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Заполняем только поле currency и отправляем', () => {
      component.find('input[name="currency"]').simulate('change',createEvent('currency', 'RUB'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Заполняем только поле description и отправляем', () => {
      component.find('input[name="description"]').simulate('change',createEvent('description', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Корректно заполняем поля', () => {
      component.find('input[name="name"]').simulate('change',createEvent('name', 'Кредитка'));
      component.find('input[name="currency"]').simulate('change',createEvent('currency', 'RUB'));
      component.find('input[name="description"]').simulate('change',createEvent('description', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(handleSubmit.mock.calls).toEqual([[{"name": "Кредитка", "currency": "RUB", "description": "Безумные траты"}]]);

      handleSubmit.mockClear();

      component.find('form').simulate('submit');
      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });

  describe('Очистка формы после отправки', () => {
    it('Проверяем, что в state инитал данные после отправки', () => {
      component.find('input[name="name"]').simulate('change',createEvent('name', 'Кредитка'));
      component.find('input[name="currency"]').simulate('change',createEvent('currency', 'RUB'));
      component.find('input[name="description"]').simulate('change',createEvent('description', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(component.state()).toEqual({"name": "", "currency": "", "description": ""});
    });
  });
});
