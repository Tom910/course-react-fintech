import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

export default () => (
  <div className='Sidebar'>
    <div className='Sidebar__header'>
      Счета
    </div>

    <NavLink to='/account/321321' className='Link' activeClassName='Link--active'>
      <div className='Sidebar__account'>
        <div className='Sidebar__account-name'>
          Основной
        </div>
        <div className='Sidebar__account-amount'>
          <Money value={2133.231} />
        </div>
      </div>
    </NavLink>

    <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
      <div className='Sidebar__account'>
        <div className='Sidebar__account-name'>
          Добавить счет
        </div>
      </div>
    </NavLink>
  </div>
);
