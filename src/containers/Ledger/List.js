import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
//import { CardList } from '../../components'
//import { ledgerActions } from '../../actions';

const List = ({ locationPathname }) => {
  return (
    <div>
      <h2>List</h2>
      <Link to={`${locationPathname}/1`}>
        <h2>click goto detail</h2>
      </Link>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    locationPathname: ownProps.location.pathname
  }
};

export default withRouter(connect(mapStateToProps)(List))
