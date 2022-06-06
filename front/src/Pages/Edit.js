import { useParams } from 'react-router-dom'
import { UserOutlined, LockOutlined, SmileOutlined, MailOutlined } from '@ant-design/icons';
import { Form, Input, Button, Col,Row } from 'antd';
import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Card } from 'antd';
const { Meta } = Card;

const Edit = () => {
    
    const params = useParams()
    

    const[data,setData]=useState({})

    const dbData =async()=>{
        const getData = await api.post("/singleuser",{
            id : params?.id
        })
        setData(getData.data)

    }
    console.log(data);
    useEffect(()=>{
        dbData()
    },[])



  return (
    <div className='form-head'>

    <div className='form-body'>

    <Row justify='center' align='middle'>
      <Col span={12}>
      <h3 align='center'> Edit Your Data </h3>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      
    //   onFinish={onFinish}
      
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please input your Name' }]}
      >
        <Input prefix={<SmileOutlined className="site-form-item-icon" />} defaultValue="Anish"/>
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
  )
}

export default Edit