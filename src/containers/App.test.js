import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Order from '../components/Order/Order';
import TimelineList from '../components/TimelineList/TimelineList';

const createEvent = (name, value) => ({ target: { name, value }});

describe('Интеграционный тест', () => {
  /*
  * Проверяем интграцию модулей
  * По сути, если вы выполните остальные тесты, то этот тест должен пройти
  * */

  describe('Рендеринг компонентов', () => {
    it('Проверяем присутсвие Формы', () => {
      const component = mount(<App />);

      expect(component.find(Order).length).toBe(1);
    });

    it('Проверяем присутсвие Списка трат', () => {
      const component = mount(<App />);

      expect(component.find(TimelineList).length).toBe(1);
    });
  });

  describe('Проверяем обновление стейта App', () => {
    const component = mount(<App />);
    const result = [{"price": 30000, "title": "PS4 pro", "type": "hobbie"}, {"price": "130000", "title": "Apple", "type": "Безумные траты"}];

    component.find('[name="title"]').simulate('change',createEvent('title', 'Apple'));
    component.find('[name="price"]').simulate('change',createEvent('price', '130000'));
    component.find('[name="type"]').simulate('change',createEvent('type', 'Безумные траты'));
    component.find('form').simulate('submit');


    expect(component.state().items).toEqual(result);
  });
});
