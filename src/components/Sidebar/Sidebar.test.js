import React from 'react';
import { mount } from 'enzyme';
import Sidebar from './Sidebar';
import { MemoryRouter } from 'react-router-dom';

const testData = {
  accounts: {
    'acc1': {
      currency: "RUB",
      name: "Основной счет"
    },
    'acc2': {
      currency: "USD",
      name: "Допка"
    }
  },
  operations: {
    'oper1': {
      account: 'acc1',
      amount: '100500'
    },
    'oper2': {
      account: 'acc1',
      amount: '444'
    },
    'oper3': {
      account: 'acc2',
      amount: '4214'
    },
    'oper4': {
      account: 'acc1',
      amount: '9874'
    },
    'oper5': {
      account: 'acc2',
      amount: '7863'
    }
  }
};

describe('Sidebar', () => {
  /* У нас сейчас в сайдбаре не отображается сумма по счетам.
   * И там просто выводится undefined, что печалит.
   * Нам необходимо проходиться по всем операциям и считать для каждого аккаунта сумму */

  describe('Проверяем правильный подсчет данных', () => {
    const mockStore = {
      getState: () => testData,
      dispatch: () => {},
      subscribe: () => {},
    };
    let component;

    beforeEach(() => {
      component = mount(<MemoryRouter><Sidebar store={mockStore} /></MemoryRouter>);
    });

    it('Проверяем правильный вывод сумм для основного счета', () => {
      const node = component.find('div[children="Основной счет"]');

      expect(node.text()).toBe('Основной счет');
      expect(node.closest('.Sidebar__account').find('.Sidebar__account-amount').text()).toBe('110818 ₽');
    });

    it('Проверяем правильный вывод сумм для допки', () => {
      const node = component.find('div[children="Допка"]');

      expect(node.text()).toBe('Допка');
      expect(node.closest('.Sidebar__account').find('.Sidebar__account-amount').text()).toBe('12077 $');
    });
  });

  describe('Проверяем странные кейсы, когда операции не цифры или их нет', () => {
    const mockStore = {
      getState: () => ({
        accounts: {
          ...testData.accounts,
          'acc3': { currency: "EUR", name: "Странная" }
        },
        operations: {
          ...testData.operations,
          'oper6': { account: 'acc1', amount: 'Kkkkk' },
          'oper7': { account: 'acc10', amount: '1234' }
        }
      }),
      dispatch: () => {},
      subscribe: () => {},
    };
    let component;

    beforeEach(() => {
      component = mount(<MemoryRouter><Sidebar store={mockStore} /></MemoryRouter>);
    });

    it('Проверяем то, что в acc1 нет NaN', () => {
      const node = component.find('div[children="Основной счет"]');

      expect(node.text()).toBe('Основной счет');
      expect(node.closest('.Sidebar__account').find('.Sidebar__account-amount').text()).toBe('110818 ₽');
    });

    it('Проверяем то, что acc3 отображает не undefined', () => {
      const node = component.find('div[children="Странная"]');

      expect(node.text()).toBe('Странная');
      expect(node.closest('.Sidebar__account').find('.Sidebar__account-amount').text()).toBe('0 €');
    });
  });
});
