import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { NavBar, SideNav, Header } from '../components'
import { userActions, menuActions } from '../actions';
import LoadingBar from 'react-redux-loading-bar'
import { Helmet } from 'react-helmet'
import '../index.css';
import logo from '../logo.svg';
import icon from '../favicon.ico';

const { Content } = Layout;

const App = ({ app, children, dispatch, location }) => {
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
    darkTheme: true,
    navOpenKeys,
    location,
    getMenuList() {
      dispatch(menuActions.getmenulist())
    },
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    changeOpenKeys(openKeys) {
      dispatch(menuActions.handleNavOpenKeys(openKeys))
    },
    changeLocation(pathname) {
      console.log('in changexx', pathname)
      dispatch(menuActions.handleLocation(pathname))
    }
  }

  const rightsiderProps = {
    menu: menuright,
    siderFold: rightsiderFold,
    side: 'right',
    darkTheme,
    //navOpenKeys,
    location,
    getMenuList() { },
    changeTheme() {
      dispatch({ type: 'app/switchTheme' })
    },
    changeLocation(pathname) {
      //console.log('in change')
      //dispatch(menuActions.handleLocation(pathname))
    }
    // changeOpenKeys(openKeys) {
    //   dispatch(menuActions.handleNavOpenKeys(openKeys))
    // },
  }
  return (
    <Layout>
      <Helmet>
        <title>Blueledgers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={icon} type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" />
      </Helmet>
      <SideNav {...leftsiderProps} />
      <Layout>
        <NavBar {...headerProps} />
        <Content style={{ background: '#ddd' }}>
          <LoadingBar />
          <Layout style={{ right: 0, position: 'fixed', height: '100%', zIndex: 1, textAlign: 'center' }}>
            <SideNav {...rightsiderProps} />
          </Layout>
          <div className="App" onClick={(!rightsiderFold) ? headerProps.toggleright : null}>
            <Header logo={logo} location={location.replace(/^.*[/]/, '')} />
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    location: ownProps.location.pathname
  };
};

export default withRouter(connect(mapStateToProps)(App))



