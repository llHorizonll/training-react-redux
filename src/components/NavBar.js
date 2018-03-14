import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class NavBar extends Component {
  render() {
    const handleClickMenu = e => e.key === 'logout' && this.props.logout()
    return (
      <Header className="header" style={{
        padding: 0,
        width: '100%'
      }}>
        <div className="button" onClick={this.props.toggleleft}>
          <Icon
            className="trigger"
            type={this.props.leftsiderFold ? 'menu-unfold' : 'menu-fold'}
          />
        </div>
        <div className="rightWarpper">
          <Menu mode="horizontal" onClick={handleClickMenu}>
            <SubMenu
              title={
                <span>
                  <Icon type="user" />
                  xxxx
                </span>}
            >
              <Menu.Item key="logout">
                <span>Logout</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
          <div className="button" onClick={this.props.toggleright}>
            <Icon className="trigger" type="setting" />
            {/* <Icon
              className="trigger"
              type={this.props.rightsiderFold ? 'menu-fold' : 'menu-unfold'}
            /> */}
          </div>
        </div>
      </Header>
    )
  }
}

export default NavBar