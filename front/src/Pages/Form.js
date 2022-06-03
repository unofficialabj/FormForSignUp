import React from 'react';
import { Form, Input, Button, Col,Row } from 'antd';
import axios from 'axios';
import { message } from 'antd';
import { UserOutlined, LockOutlined, SmileOutlined, MailOutlined } from '@ant-design/icons';

const Signup = () => {
  const onFinish = async(values) => {

    const {name, username, password, email} = values;
    try{
      const {data} =await axios.post('http://localhost:5000/api/signup',{
      name,
      username,
      password,
      email
  })
  console.log(data)
  message.success(
    "Sign Up Successful",
    10
  );
}
catch(err){
  message.error(
    "Sign Up Failed",10
  )};
  };

  return (
      <div className='form-head'>

    <div className='form-body'>

    <Row justify='center' align='middle'>
      <Col span={12}>
      <h3 align='center'> Sign Up Form </h3>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Name' }]}
      >
        <Input prefix={<SmileOutlined className="site-form-item-icon" />} placeholder="Full Name" />
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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

      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon"/>} placeholder="Email Address" />
      </Form.Item>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Sign Up
        </Button>
      </Form.Item>
    </Form>
    </Col></Row>
    </div>
    </div>
  );
};

export default Signup;