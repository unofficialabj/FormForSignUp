
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import api from '../utils/api'
import { Card } from 'antd';
const { Meta } = Card;

const SingleCard = () => {
    
    const params = useParams()
    console.log(params)

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
    <div><Card
    hoverable
    style={{
      width: 240,
    }}
    
  >
    <Meta title={data?.username} description="www.instagram.com" />
  </Card> </div>
  )
}

export default SingleCard