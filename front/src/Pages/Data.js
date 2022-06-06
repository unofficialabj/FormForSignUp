import { Row,Col } from 'antd'
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import api from '../utils/api'
import { Card} from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Meta } = Card;


const Data = () => {

    const navigate = useNavigate()

    const[data,setData]=useState([])

    const dbData =async()=>{
        const getData = await api.get("/admin")
        setData(getData.data)
        // console.log(getData);
    }
    console.log(data);

useEffect(()=>{
    dbData()
},[])
const editPage=(ani)=>{
    console.log(ani)
    // navigate(`/singleCard/${ani}`) //template string 
    navigate('/edit/'+ani)
}


  return (
    <div>
    <Row justify="center" align="middle"> 
    <Col span={10}>
        

    <table>
        <tr className='thead'>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ACTION</th>
        </tr>

        {data.map((props)=>{
            return(

            <tr>
            <td>{props._id}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
            <td><EditOutlined onClick={() => {
            editPage(props._id);
          }}/>
             <DeleteOutlined className='delete'/></td>
        </tr>

            )
        })}
    </table>

       
    </Col>
    </Row>

    {/* {data?.map((details)=> {
        return (<div className='card' key={details?._id}><Card
    hoverable
    style={{
      width: 240,
    }}
    
  >
    <Meta title={details?.username} description="www.instagram.com" onClick={() => {
            singlePage(details._id);
          }}
    />
  </Card></div>)
    })
    } */}
    </div>
  )
}

export default Data