import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { CardList } from '../../components'
import { ledgerActions } from '../../actions';
/**
 * 
 * @param Ledger 
 * FIXME: List, Detail
 */
const Ledger = ({ ledger, dispatch, location }) => {
  const ledgerProps = {
    prefixlist: ledger.prefixlist,
    getlist() {
      dispatch(ledgerActions.getprefixlist())
    },
    getpage(pathname) {
      dispatch(ledgerActions.getpage(pathname))
    },
    location
  }
  return (
    <div>
      <CardList {...ledgerProps} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    ledger: state.ledger,
    location: ownProps.location.pathname
  }
};

export default withRouter(connect(mapStateToProps)(Ledger))
