import React from 'react';
import { mount } from 'enzyme';
import Sidebar from './Sidebar';
const { MemoryRouter } = require('react-router-dom');

describe('Sidebar', () => {
  /*
  * Sidebar стал умнее и теперь умеет отрендерить множество счетов
  * Новые props
  * - accounts - объект с аккаунтами клиента
  * Нужно в компоент Money передавать currency
  * */

  describe('Рендерим accounts', () => {
    const accounts = {
      "1": {"currency": "RUB", "name": "Кредитка", amount: 100.01 },
      "2": {"currency": "USD", "name": "Депозит", amount: 500 }
    };
    let component;

    beforeEach(() => {
      component = mount(<MemoryRouter><Sidebar accounts={accounts} /></MemoryRouter>);
    });

    it('Проверяем присутсвие account c индексом 1', () => {
      expect(component.find('div[children="Кредитка"]').length).toBe(1);
    });

    it('Проверяем присутсвие account c индексом 2', () => {
      expect(component.find('div[children="Депозит"]').length).toBe(1);
    });

    it('Проверяем присутсвие выдачи знаков валют для аккантов.', () => {
      expect(component.text().indexOf('₽') !== -1).toBe(true);
      expect(component.text().indexOf('$') !== -1 ).toBe(true);
    });
  });
});
