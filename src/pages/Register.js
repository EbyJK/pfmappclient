import React,{useState} from 'react'
import {Form,Input,message} from 'antd'
import { Link, useNavigate} from 'react-router-dom'
import axios from  'axios'
import Spinner from '../components/layout1/Spinner'
const Register = () => {
    const navigate= useNavigate();
    const [loading,setLoading]=useState(false)
    //form submit
    const submitHandler =async(values)=>{
            // console.log(values);
            try{
                setLoading(true);
                await axios.post('/users/register',values)
                message.success('Registration Successful')
                setLoading(false);
                navigate('/login')
            }
            catch(error){
                setLoading(false);
                    message.error('invalid username or password');
            }

    };


  return (
    <div className=' register-page'>
        {loading && <Spinner></Spinner>}
      <Form layout="vertical" onFinish={submitHandler}>
        <h1>Sign up</h1>
        <Form.Item label='name' name="name">
            <Input>
            </Input>
        </Form.Item>
        <Form.Item label='email' name="email">
            <Input type="email">
            </Input>
        </Form.Item>
        <Form.Item label='password' name="password">
            <Input type="password">
            </Input>
        </Form.Item>
        <div className="d-flex justify-content-between">
            <Link to='/login'>ALready Signed Up? click HERE to login</Link>
            &nbsp;&nbsp;
            <br></br>
            <button className="btn btn-primary">Sign up</button>

        </div>

      </Form>
    </div>
  )
}

export default Register
