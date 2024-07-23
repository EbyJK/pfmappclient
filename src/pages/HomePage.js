import React,{useEffect,useState} from 'react'
import { Form, Input, message, Modal, Select} from 'antd'
// import {DatePicker} from 'antd'
import Layout1 from '../components/layout1/Layout1'
//import { Option } from 'antd/es/mentions'
import axios from 'axios'
import Spinner from '../components/layout1/Spinner'




const HomePage = () => {
  const [loading,setLoading]=useState(false);
    const [showModal,setShowModal]=useState(false)
    const[allTransaction,setAllTransaction]=useState([])

    //get all transactions
    const getAllTransaction=async(values)=>{
      try{
          const user=JSON.parse(localStorage.getItem('user'))
          setLoading(true);
          const res=await axios.post('/transactions/get-transaction',{userid:user._id})
          setLoading(false)
          setAllTransaction(res.data)
          console.log(res.data)
      }
      catch(error){
          console.log(error)
          message.error('issue with transaction')
      }
    }
    //useEffect hook











    //form  handling
    const handleSubmit=async(values)=>{
      try{
          const user=JSON.parse(localStorage.getItem('user'))
          setLoading(true);
          await axios.post('/transactions/add-transaction',{...values,userid:user._id})
          setLoading(false)
          message.success('transaction added successfully')
          setShowModal(false)
      }
      catch{
          setLoading(false);
          message.error('failed to add transaction')
      }
      
    };


    const[loginUser,setLoginUser]= useState('')
    useEffect(()=>{
        
          const user= JSON.parse(localStorage.getItem('user'))
          if(user){
            setLoginUser(user)
          }
      },[])
  return (
    <Layout1 >
      {loading && <Spinner></Spinner>}
        &nbsp;
        <br/>
        <div className="home-page">
        <h1>Home Page</h1>
        <h2> Welcome {loginUser && loginUser.name}..!</h2>
        {/* <h3>Access Our Facilities Using the Navbar above</h3> */}


    
        <div className="filters">
            <div>Range/Filters</div>
              <div>
                <button className="btn btn-primary" onClick={()=>setShowModal(true)}>Add new</button>
              </div>
        </div>
        <div className="content"></div>
        <Modal title="Add Transaction" open={showModal} onCancel={()=>setShowModal(false)} footer={false}>
          <Form layout="vertical" onFinish={handleSubmit}>
                <Form.Item label="amount" name='amount' >
                  <Input type="number"></Input>


                </Form.Item>
                <Form.Item label="type" name='type' >
                  {/* <Input type="text"></Input> */}
                  <Select placeholder="Select a type">
                     <Select.Option value="income">income</Select.Option>
                       <Select.Option value="expense">expense</Select.Option>
                    </Select>

                </Form.Item>

                <Form.Item label="category" name='category' >
                <Select placeholder="Select a category">
                     <Select.Option value="salary">salary</Select.Option>
                       <Select.Option value="gift">gift</Select.Option>
                       <Select.Option value="food">food</Select.Option>
                       <Select.Option value="movie">movie</Select.Option>
                       <Select.Option value="bills">bills</Select.Option>
                       <Select.Option value="fees">fees</Select.Option>
                       <Select.Option value="tax">tax</Select.Option>
                       <Select.Option value="others">others</Select.Option>
                    </Select>


                </Form.Item>
                <Form.Item label="date" name='date' >
                 
                  {/* <DatePicker format="YYYY-MM-DD" /> */}
                    <Input type="date"></Input>
                </Form.Item>
                <Form.Item label="description" name='description' >
                  <Input type="text"></Input>


                </Form.Item>
                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn btn-primary">SAVE</button>
                </div>


          </Form>
        </Modal>
        </div>
    </Layout1>
      
     
  )
}

export default HomePage
