import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
//import { CardList } from '../../components'
//import { ledgerActions } from '../../actions';

const Detail = (state) => {
  return (
    <div>
      <h2>Detail</h2>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(state, ownProps)
  return state
};

export default withRouter(connect(mapStateToProps)(Detail))
