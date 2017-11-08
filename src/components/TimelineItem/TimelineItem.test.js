import React from 'react';
import { shallow } from 'enzyme';
import TimelineItem from './TimelineItem';
import Money from '../Money/Money';

describe('TimelineItem', () => {
  /*
    Необходимо добавить вывод типа операции
    Подключить модуль Money
   */

  describe('Вывод данных', () => {
    it('Вывод типа', () => {
      const component = shallow(<TimelineItem title='PS4' price={20000} type='hobbie' />);

      expect(component.text().includes('hobbie')).toBe(true);
    });

    it('Вывод названия', () => {
      const component = shallow(<TimelineItem title='PS4' price={20000} type='hobbie' />);

      expect(component.text().includes('PS4')).toBe(true);
    });

    it('Вывод компонента Money', () => {
      const component = shallow(<TimelineItem title='PS4' price={20000} type='hobbie' />);

      expect(component.find(Money).length).toBe(1);
      expect(component.html().includes('<span>20000</span>')).toBe(true);
    });
  });
});
