import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Tabs, Icon } from 'antd';
import Menus from './Menus';

const { Sider } = Layout;
const TabPane = Tabs.TabPane;

class Sidenav extends Component {
  componentDidMount() {
    if (!this.props.location) {
      this.props.changeLocation(this.props.location)
    }
    this.props.getMenuList()
  }
  render() {
    const menuleftside = (
      <div>
        <Link to={'/' || '#'}>
          <div className="logo-sidenav" />
        </Link>
        <Menus {...this.props} mode={"vertical"} />
      </div>
    )
    const menurightside = (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1" forceRender={true}>
            Tab 1
        </TabPane>
          <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2" forceRender={true}>
            Tab 2
        </TabPane>
        </Tabs>
      </div>
    )
    return (
      <Sider
        //breakpoint="sm"
        style={!this.props.darkTheme ? { background: '#fff' } : ''}
        collapsedWidth={this.props.side === 'right' && this.props.siderFold ? "0" : "80"}
        width={this.props.side === 'right' ? "220" : "250"}
        trigger={null}
        collapsible
        collapsed={this.props.siderFold}
      >
        {(this.props.side === 'left')
          ? menuleftside
          : menurightside
        }
      </Sider>
    );
  }
}

export default Sidenav;