import React from 'react';
import { Form, Input, Button, Col,Row } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import api from '../utils/api';

const Login = () => {
  const onFinish = async(values) => {

    const {email, password} = values;
    try{
      const data =await api.post('/login',{
      email,
      password
  })
  console.log(data)
  console.log("Your email is "+ email + " and password is "+password)
  message.success(data.data);
  
}
catch(err){
  message.error(err.response.data)};
  };

  return (
      <div className='form-head'>

    <div className='form-body'>

    <Row justify='center' align='middle'>
      <Col span={12}>
      <h3 align='center'> Log In Form </h3>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      action='about.us'
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Email!' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email Address" />
      </Form.Item>
      
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
    </Col></Row>
    </div>
    </div>
  );
};

export default Login;