import { Row,Col } from 'antd'
import React, { useEffect, useState } from 'react'
import api from '../utils/api'


const Data = () => {

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



  return (
    <div>
    <Row justify="center" align="middle"> 
    <Col span={10}>
        

    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
        </tr>

        {data.map((props)=>{
            return(

                <tr>
            <td>{props._id}</td>
            <td>{props.username}</td>
            <td>{props.email}</td>
        </tr>

            )
        })}
    </table>

       
    </Col>
    </Row>
    </div>
  )
}

export default Data