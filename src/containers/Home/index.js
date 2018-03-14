import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { NavBar, SideNav } from '../../components'
import './Home.css';
import logo from '../../logo.svg'
import { userActions, menuActions } from '../../actions';

const { Content } = Layout;
/**
 * 
 * @param {Ledger} param0 
 * TODO: Ledger Module
 */
const App = ({ app, children, dispatch }) => {
  const { user, leftsiderFold, rightsiderFold, darkTheme, isNavbar, menuPopoverVisible, navOpenKeys, menu, menuright } = app
  const headerProps = {
    menu,
    user,
    leftsiderFold,
    rightsiderFold,
    isNavbar,
    menuPopoverVisible,
    navOpenKeys,
    switchMenuPopover() {
      dispatch({ type: 'app/switchMenuPopver' })
    },
    logout() {
      dispatch(userActions.logout())
    },
    switchSider() {
      dispatch({ type: 'app/switchSider' })
    },
    toggleleft() {
      dispatch(menuActions.toggleleft(leftsiderFold))
    },
    toggleright() {
      dispatch(menuActions.toggleright(rightsiderFold))
    },
  }

  const leftsiderProps = {
    menu: menu,
    siderFold: leftsiderFold,
    side: 'left',
    darkTheme,
    navOpenKeys,
    getMenuList() {
      dispatch(menuActions.getmenulist())
    },
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    changeOpenKeys(openKeys) {
      dispatch(menuActions.handleNavOpenKeys(openKeys))
    },
  }

  const rightsiderProps = {
    menu: menuright,
    siderFold: rightsiderFold,
    side: 'right',
    darkTheme,
    //navOpenKeys,
    getMenuList() { },
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    // changeOpenKeys(openKeys) {
    //   dispatch(menuActions.handleNavOpenKeys(openKeys))
    // },
  }

  return (
    <Layout>
      <SideNav {...leftsiderProps} />
      <Layout>
        <NavBar {...headerProps} />
        <Content style={{ background: '#ddd' }}>
          <div className="App">
            <Layout style={{ right: 0, position: 'fixed', height: '100%' }}>
              <SideNav {...rightsiderProps} />
            </Layout>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.<br />
            </p>
            {children}
          </div>
        </Content>
      </Layout>
      {/* <SideNav {...rightsiderProps} /> */}
    </Layout>
  )
}

const mapStateToProps = (state) => {
  return state;
};

// const mapDispatchToProps = (dispatch, ownstate) => {
//   dispatch(menuActions.getmenulist())
//   return ownstate;
// }

export default withRouter(connect(mapStateToProps)(App))



