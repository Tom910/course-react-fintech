import React from 'react';
import { mount } from 'enzyme';
import About from '../pages/About';

/* мы должны замоикровать реализацию роутинга для тестов */
jest.mock('react-router-dom/BrowserRouter', () => ({children}) => <div>{children}</div>);

/* При мокировании, остальные файлы нужно переводить на require. Виноват сам принцип ES modules */
const { MemoryRouter } = require('react-router-dom');
const App = require('./App').default;

const createEvent = (name, value) => ({ target: { name, value }});

describe('Интеграционный тест', () => {
  /*
  * Проверяем работоспособность главного компонента приложения
  * */

  describe('Добавлен роут /about', () => {
    /*
    * Нужно добавить для приложения роут /about, который рендерит отобразит страницу
    * На странице у нас должен быть присутсвовать h1 и p тег
    * */
    const wrapper = mount(
      <MemoryRouter initialEntries={['/about']}>
        <App/>
      </MemoryRouter>
    );

    it('Проверяем то, что роут создан', () => {
      expect(wrapper.find(About).length).toBe(1);
    });

    it('На странице присутствует h1 тег', function () {
      expect(wrapper.find('h1').length).toBe(1);
    });

    it('На странице присутствует p тег', function () {
      expect(wrapper.find('p').length).toBe(1);
    });
  });

  describe('Получать данные от страницы /create-account', () => {
    /*
    Необходимо добавить возможность получения данных с страницы, /create-account в компонент App
    После отправки формы, мы должны обновить state компонента App.js.
    В accounts мы должны добавлять с ключем начиная от 1
    */
    const wrapper = mount(
      <MemoryRouter initialEntries={['/create-account']}>
        <App/>
      </MemoryRouter>
    );

    const setValue = (name, currency, des) => {
      wrapper.find('input[name="name"]').simulate('change',createEvent('name', name));
      wrapper.find('input[name="currency"]').simulate('change',createEvent('currency', currency));
      wrapper.find('input[name="description"]').simulate('change',createEvent('description', des));
    };

    describe('Работа с формой', () => {
      it('Заполняем форму', () => {
        setValue('Кредитка', 'RUB', 'Безумные траты');
      });
      it('Отправляем форму', () => {
        wrapper.find('form').simulate('submit');
      });
      it('Проверяем присутсвие стейта в App.js', () => {
        const result = {"1": {"currency": "RUB", "description": "Безумные траты", "name": "Кредитка"}};
        expect(wrapper.find(App).instance().state.accounts).toEqual(result);
      });

      it('Повторно отправляем форму и проверяем, что там 2 account', () => {
        const result = ["1", "2"];
        setValue('Дебетовка', 'USB', 'Безумные траты');
        wrapper.find('form').simulate('submit');

        expect(Object.keys(wrapper.find(App).instance().state.accounts)).toEqual(result);
      });
    });
  });
});
