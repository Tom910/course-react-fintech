import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  /*
  * Нужно создать компонент Button
  * Который принимает
  * - type - тип button
  * - children - текст button
  * - onClick - эввент на клик
  * */

  describe('Базовый рендеринг', () => {
    it('Кнопка с текстом', () => {
      const component = shallow(<Button>Кнопк</Button>);

      expect(component.html()).toEqual('<button>Кнопк</button>');
    });

    it('Кнопка с текстом и типов', () => {
      const component = shallow(<Button type='submit'>Кнопк</Button>);

      expect(component.html()).toEqual('<button type="submit">Кнопк</button>');
    });
  });

  describe('Вызов события', () => {
    const eventOnCLick = jest.fn();
    const component = shallow(<Button onClick={eventOnCLick}>Кнопк</Button>);

    component.find('button').simulate('click');

    expect(eventOnCLick).toHaveBeenCalled();
  });
});
