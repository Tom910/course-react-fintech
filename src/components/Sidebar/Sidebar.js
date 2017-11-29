import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

const Sidebar = ({ accounts, accountsSum }) => {
  const accountKeys = Object.keys(accounts);

  return (
    <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      {accountKeys.map(key => {
        const account = accounts[key];

        return (
          <NavLink key={key} to={`/account/${key}`} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {account.name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={accountsSum[key] || 0} currency={account.currency} />
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

function sumAccountsCalc(accounts, operations) {
  const result = {};

  for (var key in operations) {
    const item = operations[key];
    const account = item.account;

    if (!result[account]) {
      result[account] = 0;
    }

    result[account] += Number(item.amount) || 0;
  }

  return result;
}

Sidebar.defaultProps = {
  accounts: {}
};

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    accountsSum: sumAccountsCalc(state.accounts, state.operations)
  }
};


export default withRouter(connect(mapStateToProps)(Sidebar));
