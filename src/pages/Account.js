import React from 'react';
import { withRouter } from 'react-router';
import TimelineList from '../components/TimelineList/TimelineList';
import Order from '../components/Order/Order';
import { connect } from 'react-redux'
import { updateFirebaseAction } from "../middleware/updateFirebase";

const Account = ({ operations, accounts, createOperation, match }) => {
  const accountId = match.params.accountId;

  return (
    <div>
      <TimelineList operations={operations} accounts={accounts} accountId={accountId} />
      <Order handleSubmit={createOperation} accountId={accountId} />
    </div>
  )
};

const mapStateToProps = state => ({
  accounts: state.accounts,
  operations: state.operations
});

const mapDispatchToProps = dispatch => ({
  createOperation: (operation) => dispatch(updateFirebaseAction('operations', operation))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Account));
