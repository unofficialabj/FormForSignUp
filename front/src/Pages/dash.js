import React from 'react';
import { Form, Input, Button, Col,Row } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Dash = () => {
  return (
    <div>
        <Row>
            <Col flex="250px">
                <div className='dashleft'>
                <div>
                        <Avatar size="large" icon={<UserOutlined />} /><span className='span'>Anish Bhakta Joshi</span>
                </div>
                <hr /> 
                <div className='list-left'>
                  <ul className='list-main'>
                    <li>Profile</li>
                  </ul>
                </div>
                </div>
            </Col>
            <Col flex="auto">Fill Rest</Col>
        </Row>

    </div>
  )
}

export default Dash