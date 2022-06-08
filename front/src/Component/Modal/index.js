import React from 'react'
import {Modal, Button} from 'antd'
import api from '../../utils/api'

const index = ({modalVisible, setModalVisible, deleteUrl}) => {
    console.log(deleteUrl)
    // const {modalVisible}=props
    const cancelFunc=()=>{
        setModalVisible(false)
    }

    const deleteFunc=async()=>{
        const deleteData=await api.delete(deleteUrl)
        setModalVisible(false)
    }



  return (
    <div>
        
        <Modal visible={modalVisible} closeIcon title="Are you sure?" footer={null}>

        <Button onClick={deleteFunc}> Delete </Button>
        <Button onClick={cancelFunc}> Cancel</Button>


        </Modal> 
    
    </div>
  )
}

export default index