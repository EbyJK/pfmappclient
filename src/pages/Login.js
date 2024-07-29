import React,{useEffect, useState} from 'react'
import {Form,Input,message} from 'antd'
import { Link,useNavigate} from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/layout1/Spinner'
const Login = () => {
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate()
    //form submit
    const submitHandler =async(values)=>{
        // console.log(values);
        try{
            setLoading(true)
             const {data}=  await axios.post('/users/login',values)
             setLoading(false) 
             message.success('login successful')
             localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
             navigate('/')
        }
        catch(error){
            setLoading(false)
                message.error('something went wrong')
        }


};
useEffect(()=>{
    if(localStorage.getItem('user')){
            navigate('/')
    }
},[navigate]);

  return (
    
    <div className=' register-page'>
        {loading && <Spinner></Spinner>}
        
    <Form layout="vertical" onFinish={submitHandler}>
      <h1>Login</h1>
      {/* <Form.Item label='Name' name="name">
          <Input>
          </Input>
      </Form.Item> */}
      <Form.Item label='email' name="email">
          <Input type="email">
          </Input>
      </Form.Item>
      <Form.Item label='password' name="password">
          <Input type="password">
          </Input>
      </Form.Item>
      <div className="d-flex justify-content-between">
          <Link to='/register'>Not a User? click HERE to Signup</Link>
          &nbsp;&nbsp;
          <br></br>
          <button className="btn btn-primary">Login</button>

      </div>
      &nbsp;&nbsp;
        <li className="nav-item">
        
        <button  style={{ backgroundColor: 'darkblue', color: 'white', padding: '1px', border: 'none', borderRadius: '5px' }}><Link className="nav-link active" aria-current="page" to="/admin"><h5>ADMIN</h5></Link></button>
        &nbsp;&nbsp;&nbsp;
        <Link to='/admin'>Login as Administrator</Link>
        </li>
        &nbsp;&nbsp;
    </Form>
  </div>
  )
}

export default Login
