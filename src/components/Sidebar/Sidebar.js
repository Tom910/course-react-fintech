import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

const Sidebar = ({accounts, operations}) => {
  const accountKeys = Object.keys(accounts);
  const keysOperation = Object.keys(operations);


  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>
      { //по хорошему надо бы еще сравнивать их валюты и умножать на курс
        // а где курс не отображается приводить все к рублю
      }
      {accountKeys.map(key => {
        const account = accounts[key];
        account.amount = 0;
        keysOperation.forEach((key2, i) => {
          const item = operations[key2];
          if (item.account === key) {

            if (!(isNaN(parseFloat(item.amount))))
            account.amount += parseFloat(item.amount);
          }
        });

        return (
          <NavLink key={key} to={`/account/${key}`} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {account.name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={account.amount} currency={account.currency}/>
              </div>
            </div>
          </NavLink>
        );
      })}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>
    </div>
  );
};

Sidebar.defaultProps = {
  accounts: {}
};

const mapStateToProps = state => ({
  accounts: state.accounts,
  operations: state.operations
});

export default withRouter(connect(mapStateToProps)(Sidebar));
