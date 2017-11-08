import React from 'react';
import { shallow } from 'enzyme';
import TimelineList from './TimelineList';
import TimelineItem from '../TimelineItem/TimelineItem';

const mockData = [ { title: 'PS4 pro', price: 30000, type: 'hobi' }, { title: 'PC', price: 120000, type: 'hobi' } ];

describe('TimelineList', () => {
  /*
    Нужно добавить в компонент возможности
    - Передавать тип счета в TimelineItem
   */

  describe('Передаем базовый рендеринг', () => {
    it('Проверяем рендеринг 2 TimelineItem', () => {
      const component = shallow(<TimelineList items={mockData} />);

      expect(component.find(TimelineItem).length).toBe(2);
    });

    it('Передаем корректные props в TimelineItem', () => {
      const component = shallow(<TimelineList items={mockData} />);

      expect(component.find(TimelineItem).get(0).props).toEqual(mockData[0]);
      expect(component.find(TimelineItem).get(1).props).toEqual(mockData[1]);
    });
  });
});
