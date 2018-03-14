import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout } from 'antd';
import Menus from './Menu';
const { Sider } = Layout;
class Sidenav extends Component {
  componentDidMount() {
    this.props.getMenuList()
  }
  render() {
    return (
      <Sider
        //breakpoint="lg"
        collapsedWidth={this.props.side === 'right' && this.props.siderFold ? "0" : "80"}
        trigger={null}
        collapsible
        collapsed={this.props.siderFold}
      >
        <Link to={'/' || '#'}>
          <div className="logo-sidenav" />
        </Link>
        <Menus {...this.props} mode={"inline"} />
      </Sider>
    );
  }
}

export default Sidenav;