import React from 'react';
import Money from '../Money/Money';
import './Sidebar.css';

export default () => (
  <div className='Sidebar'>
    <div className='Sidebar__header'>
      Счета
    </div>
    <div className='Sidebar__account Sidebar__account--selected'>
      <div className='Sidebar__account-name'>
        Основной
      </div>
      <div className='Sidebar__account-amount'>
        <Money value={2133.231} />
      </div>
    </div>
    <div className='Sidebar__account'>
      <div className='Sidebar__account-name'>
        Добавить счет
      </div>
    </div>
  </div>
);
