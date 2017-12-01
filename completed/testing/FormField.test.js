import React from 'react';
import { mount } from 'enzyme'
import FormField from './FormField';

describe('FormText', () => {
  describe('Дефолтный вывод компонента', () => {
    it('Выводим children', () => {
      const component = mount(<FormField><input name="name" /></FormField>);

      expect(component.find('[name="name"]').length).toBe(1);
    });

    it('Выводим error', () => {
      const component = mount(<FormField error='Не правильное имя'><input name="name" /></FormField>);

      expect(component.html()).toMatchSnapshot();
    });
  });
});
