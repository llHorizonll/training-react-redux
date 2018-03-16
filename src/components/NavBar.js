import React, { Component } from 'react';
import { Layout, Icon, Card, Popover, Button, Row, Col } from 'antd';
import styled from 'styled-components'

const { Header } = Layout;

class NavBar extends Component {
  render() {
    const Span = styled.span`
      line-height: 46px;
      padding: 0 20px;
      &:hover {
        cursor: pointer;
        border-bottom: 2px solid #1890ff;
        color: #1890ff;
      }
    }
    `

    const content = (
      <div style={{ width: '300px' }}>
        <div style={{ textAlign: 'right' }}> EN &nbsp; | &nbsp; TH</div>
        <Card style={{ border: 'none' }}>
          <p align="center">Card content</p>
        </Card>
        <Row col={24}>
          <Col span={12} align="middle">
            <Button>Default</Button></Col>
          <Col span={12} align="middle">
            <Button type="primary" onClick={() => this.props.logout()}>Logout</Button></Col>
        </Row>

      </div>
    );
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
          <Popover placement="bottomRight" content={content} trigger="click">
            <Span>
              <Icon type="user" />
              USER
            </Span>
          </Popover>
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