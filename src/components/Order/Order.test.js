import React from 'react';
import { mount } from 'enzyme';
import Order from './Order';

const createEvent = (name, value) => ({ target: { name, value }});

describe('Order', () => {
  let component;
  let handleSubmit;

  beforeEach(() => {
    handleSubmit = jest.fn();
    component = mount(<Order handleSubmit={handleSubmit} />);
  });

  describe('Новое поле type', () => {
    /*
    Нужно добавить новое поле с названием type, в которое можно ввести тип операции
     */
    it('Проверяем, что это поле есть в форме', () => {
      expect(component.find('[name="type"]').length).toBe(1);
    });

    it('Проверяем, что в поле можно записать значение и оно будет в state', () => {
      component.find('[name="type"]').simulate('change', createEvent('type', 'Безумные траты'));

      expect(component.state().type).toBe('Безумные траты');
    });

    it('В первоначальном стейте компонента есть параметр type', () => {
      expect(component.state().type).toBe('');
    });
  });

  describe('Валидация', () => {
    /*
    Мы не хотим отправлять форму, если какое либо из полей пустое.
    Для этого, мы должны добавить валидацию и отпраправлять форму, только когда оба поля заполнены

    Нужно добавить валидацию полей в Order.js. Пока будете валидация только на предмет не пустого значения.
    Но, нужна такая реализация, которую можно будет потом расширить к примеру - валидацию дат, валидация типа введенных данных.
     */
    it('Заполняем только поле title и отправляем', () => {
      component.find('[name="title"]').simulate('change',createEvent('title', 'Apple'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Заполняем только поле price и отправляем', () => {
      component.find('[name="price"]').simulate('change',createEvent('price', '130000'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Заполняем только поле type и отправляем', () => {
      component.find('[name="type"]').simulate('change',createEvent('type', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('Корректно заполняем поля', () => {
      component.find('[name="title"]').simulate('change',createEvent('title', 'Apple'));
      component.find('[name="price"]').simulate('change',createEvent('price', '130000'));
      component.find('[name="type"]').simulate('change',createEvent('type', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(handleSubmit.mock.calls).toEqual([[{"price": "130000", "title": "Apple", "type": "Безумные траты"}]]);

      handleSubmit.mockClear();

      component.find('form').simulate('submit');
      expect(handleSubmit).not.toHaveBeenCalled();
    });
  });

  describe('Очистка формы после отправки', () => {
    it('Проверяем, что в state инитал данные после отправки', () => {
      component.find('[name="title"]').simulate('change',createEvent('title', 'Apple'));
      component.find('[name="price"]').simulate('change',createEvent('price', '130000'));
      component.find('[name="type"]').simulate('change',createEvent('type', 'Безумные траты'));
      component.find('form').simulate('submit');

      expect(component.state()).toEqual({"price": "", "title": "", "type": ""});
    });
  });
});
