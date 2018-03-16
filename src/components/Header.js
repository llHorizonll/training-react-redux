import React, { Component } from 'react';
import { Icon } from 'antd';
/**
 * TODO: add menucontrol
 */
class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header" style={{ margin: '26px' }}>
          {/* <img src={this.props.logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">{this.props.location}
            <Icon type="arrow-left" style={{ float: 'right', padding: '10px 20px 10px 0' }} />
          </h1>
        </header>
      </div>
    )
  }
}

export default Header