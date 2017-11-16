import React from 'react';
import { shallow } from 'enzyme';

import UpdateComponent from './updateComponent';

describe('updateComponent', () => {
  /*
  * У нас есть компоненты, для которого нам важно, что бы оно обновлялся только в случаях
  * Изменился props.status или изменился props.accounts. Во всех остальных случаях компонент не должен обновиться
  *
  * props которые он будет получать
  * children - должен отрендерить
  * status и accounts - компонент должен перерендериться
  * */

  let component;
  let randomChildren;

  beforeEach(() => {
    randomChildren = Math.random();
    component = shallow(<UpdateComponent>{randomChildren}</UpdateComponent>);
  });

  it('Проверяем, что компонент отрендерил children', () => {
    expect(component.text()).toBe(String(randomChildren));
  });

  it('Передали новый набор не важных props, проверяем, что компонент не перерендерился', () => {
    const newRandom = Math.random();

    component.setProps(
      { children: newRandom, veryImportantProps: {} }
    );

    component.update();

    expect(component.text()).toBe(String(randomChildren));
  });

  it('Передали важный props status и ожидаем, что компонент обновился', () => {
    const newRandom = Math.random();

    component.setProps(
      { children: newRandom, status: 'IMPORTANTS' }
    );

    component.update();

    expect(component.text()).toBe(String(newRandom));
  });

  it('Передали важный props accounts и ожидаем, что компонент обновился', () => {
    const newRandom = Math.random();

    component.setProps(
      { children: newRandom, accounts: {} }
    );

    component.update();

    expect(component.text()).toBe(String(newRandom));
  });
});
