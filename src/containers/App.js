import React from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import './App.css';
import logo from '../logo.svg'
import { userActions } from '../actions';

const App = ({
  dispatch,
}) => {
  function Logout() {
    dispatch(userActions.logout());
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.<br />
        <Button type="primary" onClick={Logout}>Logout</Button>
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state;
};

export default withRouter(connect(mapStateToProps)(App))



