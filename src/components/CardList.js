import React, { Component } from 'react';
import { Row } from 'antd';
import Cards from './Cards';

class CardList extends Component {
  componentDidMount() {
    this.props.getlist()
  }
  render() {
    return (
      <div>
        <Row style={{ margin: '50px 10px 0 10px' }}>
          <Cards gutter={16} {...this.props} />
        </Row>
      </div>
    );
  }
}

export default CardList;