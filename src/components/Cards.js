import React from 'react';
import { Link } from 'react-router-dom'
import { Card, Col } from 'antd';
import styled from 'styled-components'

const Cards = ({ prefixlist, gutter, location }) => {

  const WrapCard = styled.div`
  .ant-card-head {
    border: unset;
  }
  .ant-card-head-title {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: -25%;
    width: 103px;
    height: 103px;
    background: #20B9EB;
    border-radius: 103px / 103px;
    font-size: 2.250em;
    color: white;
    text-align: center;
    padding-top: 20px;
    border: 10px solid #ddd;
  }
  .ant-card-body {
    padding: 24px 24px 10px 24px;
  }
  .card-header {
      font-size: 1.500em;
      text-align: center;
  }
  `
  const getCards = (list = []) => {
    return list.map((item) => {
      return (
        <Link to={`${location}/${item.Code}`} key={item.Id}>
          <Col sm={12} md={12} lg={6} xl={6} style={{ marginBottom: '80px', padding: `0 ${gutter}px 0 ${gutter}px` }} >
            <WrapCard>
              <Card title={item.Prefix} bordered={false}>
                <b className="card-header">{item.Code}</b><br />
                <span>{item.Description}</span>
              </Card>
            </WrapCard>
          </Col>
        </Link>
      )
    })
  }
  const cardItems = getCards(prefixlist)

  return (
    <div>
      {cardItems}
    </div>
  )
}
export default Cards;