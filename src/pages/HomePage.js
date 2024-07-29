// import React,{useEffect,useState} from 'react'
// import { Form, Input, message, Modal, Select, Table} from 'antd'
//  import {DatePicker} from 'antd'
//  import moment from "moment";
// import Layout1 from '../components/layout1/Layout1'
// //import { Option } from 'antd/es/mentions'
// import axios from 'axios'
// import Spinner from '../components/layout1/Spinner'
// import Analytics from '../components/layout1/Analytics';
// import Admin from './Admin';

// const {RangePicker}= DatePicker;


// const HomePage = () => {
//   const [loading,setLoading]=useState(false);
//     const [showModal,setShowModal]=useState(false)
//     const[allTransaction,setAllTransaction]=useState([])
//     const[frequency,setFrequency]=useState('7')
//     const[selectedDate,setSelecteddate]=useState([])
//     const [type,setType]=useState('all')
//     // const [viewData,setViewData]=useState('table')
//     //table data
//     const columns=[
//       {
//         title:'date',
//         dataIndex:'date',
//         render:(text)=><span>{moment(text).format("YYYY-MM-DD")}</span>
//       },
//       {
//         title:'amount',
//         dataIndex:'amount'
//       },
//       {
//         title:'type',
//         dataIndex:'type'
//       },
//       {
//         title:'category',
//         dataIndex:'category'
//       },
//       {
//         title:'description',
//         dataIndex:'description'
//       },
//       // {
//       //   title:'Actions'
       
//       // },
//     ]

//     //get all transactions
//     const getAllTransaction=async(values)=>{
//       try{
//           const user=JSON.parse(localStorage.getItem('user'))
//           setLoading(true);
//           const res=await axios.post('/transactions/get-transaction',{
            
//             userid:user._id,        //handler
//             frequency,
//             selectedDate,
//             type,
//           })
//           setLoading(false)
//           setAllTransaction(res.data)
//           console.log(res.data)
//       }
//       catch(error){
//           console.log(error)
//           message.error('issue with transaction')
//       }
//     };
//     //useEffect hook
//       useEffect (()=>{
//           getAllTransaction();

//       },[frequency,selectedDate,type]);




//     //form  handling
//     const handleSubmit=async(values)=>{
//       try{
//           const user=JSON.parse(localStorage.getItem('user'))
//           setLoading(true);
//           await axios.post('/transactions/add-transaction',{...values,userid:user._id})
//           setLoading(false)
//           message.success('transaction added successfully')
//           setShowModal(false)
//       }
//       catch{
//           setLoading(false);
//           message.error('failed to add transaction')
//       }
      
//     };


//     const[loginUser,setLoginUser]= useState('')
//     useEffect(()=>{
        
//           const user= JSON.parse(localStorage.getItem('user'))
//           if(user){
//             setLoginUser(user)
//           }
//       },[])
//   return (
//     <Layout1 >
//       {loading && <Spinner></Spinner>}
//         &nbsp;
//         <br/>
//         <div className="home-page">
//         <h5>Home Page</h5>
//         <h2> Welcome {loginUser && loginUser.name}..!</h2>
//         {/* <h3>Access Our Facilities Using the Navbar above</h3> */}


        
//         <div className="filters">
        
//           <div>
//           <div>Range/Filters</div>
//             <h6>Select</h6>
//             <Select value={frequency} onChange={(values)=>setFrequency(values)}>
//               <Select.Option value="7">last 1 week</Select.Option>
//               <Select.Option value="14">last 2 weeks</Select.Option>
//               <Select.Option value="21">last 3 weeks</Select.Option>
//               <Select.Option value="30">previus month</Select.Option>
//               <Select.Option value="182">6 months</Select.Option>
//               <Select.Option value="365">1 year</Select.Option>
//               <Select.Option value="custom">custom</Select.Option>
//             </Select>
//             {frequency == "custom" && <RangePicker value={selectedDate} onChange={(values)=>setSelecteddate(values)}></RangePicker>}
//           </div>
//           <div>
//           <h6>Select type</h6>
//             <Select value={type} onChange={(values)=>setType(values)}>
//               <Select.Option value="all">All</Select.Option>
//               <Select.Option value="income">Income</Select.Option>
//               <Select.Option value="expense">Expense</Select.Option>
              
//             </Select>
//             {frequency == "custom" && <RangePicker value={selectedDate} onChange={(values)=>setSelecteddate(values)}></RangePicker>}
//             </div>
//               <div>
//                 <button className="btn btn-primary" onClick={()=>setShowModal(true)}>Add new</button>
//               </div>
//         </div>
//         <div className="content">
//           {/* {viewData ==='table'?
//           <Table columns={columns} dataSource={allTransaction}></Table> 
//           :  <Analytics> allTransaction={allTransaction} </Analytics>} */}
//            <Table columns={columns} dataSource={allTransaction}></Table> 
//         </div>
//         <Modal title="Add Transaction" open={showModal} onCancel={()=>setShowModal(false)} footer={false}>
//           <Form layout="vertical" onFinish={handleSubmit}>
//                 <Form.Item label="amount" name='amount' >
//                   <Input type="number"></Input>


//                 </Form.Item>
//                 <Form.Item label="type" name='type' >
//                   {/* <Input type="text"></Input> */}
//                   <Select placeholder="Select a type">
//                      <Select.Option value="income">income</Select.Option>
//                        <Select.Option value="expense">expense</Select.Option>
//                     </Select>

//                 </Form.Item>

//                 <Form.Item label="category" name='category' >
//                 <Select placeholder="Select a category">
//                      <Select.Option value="salary">salary</Select.Option>
//                        <Select.Option value="gift">gift</Select.Option>
//                        <Select.Option value="food">food</Select.Option>
//                        <Select.Option value="movie">movie</Select.Option>
//                        <Select.Option value="bills">bills</Select.Option>
//                        <Select.Option value="fees">fees</Select.Option>
//                        <Select.Option value="tax">tax</Select.Option>
//                        <Select.Option value="others">others</Select.Option>
//                     </Select>


//                 </Form.Item>
//                 <Form.Item label="date" name='date' >
                 
//                   {/* <DatePicker format="YYYY-MM-DD" /> */}
//                     <Input type="date"></Input>
//                 </Form.Item>
//                 <Form.Item label="description" name='description' >
//                   <Input type="text"></Input>


//                 </Form.Item>
//                 <div className="d-flex justify-content-end">
//                   <button type="submit" className="btn btn-primary">SAVE</button>
//                 </div>


//           </Form>
//         </Modal>
//         </div>
//     </Layout1>
      
     
//   )
// }

// export default HomePage
///////////////////////////////////////////////////////////////////////////////////////////////////



// import React, { useEffect, useState } from 'react';
// import { Form, Input, message, Modal, Select, Table } from 'antd';
// import { DatePicker } from 'antd';
// import moment from 'moment';
// import Layout1 from '../components/layout1/Layout1';
// import axios from 'axios';
// import Spinner from '../components/layout1/Spinner';

// const { RangePicker } = DatePicker;

// const HomePage = () => {
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [allTransaction, setAllTransaction] = useState([]);
//   const [frequency, setFrequency] = useState('7');
//   const [selectedDate, setSelectedDate] = useState([]);
//   const [type, setType] = useState('all');

//   const columns = [
//     {
//       title: 'date',
//       dataIndex: 'date',
//       render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
//     },
//     {
//       title: 'amount',
//       dataIndex: 'amount'
//     },
//     {
//       title: 'type',
//       dataIndex: 'type'
//     },
//     {
//       title: 'category',
//       dataIndex: 'category'
//     },
//     {
//       title: 'description',
//       dataIndex: 'description'
//     }
//   ];

//   const getAllTransaction = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       setLoading(true);
//       const res = await axios.post('/transactions/get-transaction', {
//         userid: user._id,
//         frequency,
//         selectedDate: selectedDate.length > 0 ? [moment(selectedDate[0]).format('YYYY-MM-DD'), moment(selectedDate[1]).format('YYYY-MM-DD')] : [],
//         type
//       });
//       setLoading(false);
//       setAllTransaction(res.data);
//       console.log(res.data);
//     } catch (error) {
//       setLoading(false);
//       console.error(error);
//       message.error('Issue with transaction');
//     }
//   };

//   useEffect(() => {
//     getAllTransaction();
//   }, [frequency, selectedDate, type]);

//   const handleSubmit = async (values) => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       setLoading(true);
//       await axios.post('/transactions/add-transaction', { ...values, userid: user._id });
//       setLoading(false);
//       message.success('Transaction added successfully');
//       setShowModal(false);
//       getAllTransaction();
//     } catch {
//       setLoading(false);
//       message.error('Failed to add transaction');
//     }
//   };

//   const [loginUser, setLoginUser] = useState('');
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user) {
//       setLoginUser(user);
//     }
//   }, []);

//   return (
//     <Layout1>
//       {loading && <Spinner />}
//       <div className="home-page">
//         <h5>Home Page</h5>
//         <h2>Welcome {loginUser && loginUser.name}..!</h2>
//         <div className="filters">
//           <div>
//             <div>Range/Filters</div>
//             <h6>Select</h6>
//             <Select value={frequency} onChange={(values) => setFrequency(values)}>
//               <Select.Option value="7">last 1 week</Select.Option>
//               <Select.Option value="14">last 2 weeks</Select.Option>
//               <Select.Option value="21">last 3 weeks</Select.Option>
//               <Select.Option value="30">previous month</Select.Option>
//               <Select.Option value="182">6 months</Select.Option>
//               <Select.Option value="365">1 year</Select.Option>
//               <Select.Option value="custom">custom</Select.Option>
//             </Select>
//             {frequency === "custom" && <RangePicker value={selectedDate} onChange={(values) => setSelectedDate(values)} />}
//           </div>
//           <div>
//             <h6>Select type</h6>
//             <Select value={type} onChange={(values) => setType(values)}>
//               <Select.Option value="all">All</Select.Option>
//               <Select.Option value="income">Income</Select.Option>
//               <Select.Option value="expense">Expense</Select.Option>
//             </Select>
//           </div>
//           <div>
//             <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add new</button>
//           </div>
//         </div>
//         <div className="content">
//           <Table columns={columns} dataSource={allTransaction} />
//         </div>
//         <Modal title="Add Transaction" open={showModal} onCancel={() => setShowModal(false)} footer={false}>
//           <Form layout="vertical" onFinish={handleSubmit}>
//             <Form.Item label="amount" name='amount'>
//               <Input type="number" />
//             </Form.Item>
//             <Form.Item label="type" name='type'>
//               <Select placeholder="Select a type">
//                 <Select.Option value="income">income</Select.Option>
//                 <Select.Option value="expense">expense</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="category" name='category'>
//               <Select placeholder="Select a category">
//                 <Select.Option value="salary">salary</Select.Option>
//                 <Select.Option value="gift">gift</Select.Option>
//                 <Select.Option value="food">food</Select.Option>
//                 <Select.Option value="movie">movie</Select.Option>
//                 <Select.Option value="bills">bills</Select.Option>
//                 <Select.Option value="fees">fees</Select.Option>
//                 <Select.Option value="tax">tax</Select.Option>
//                 <Select.Option value="others">others</Select.Option>
//               </Select>
//             </Form.Item>
//             <Form.Item label="date" name='date'>
//               <Input type="date" />
//             </Form.Item>
//             <Form.Item label="description" name='description'>
//               <Input type="text" />
//             </Form.Item>
//             <div className="d-flex justify-content-end">
//               <button type="submit" className="btn btn-primary">SAVE</button>
//             </div>
//           </Form>
//         </Modal>
//       </div>
//     </Layout1>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from 'react';
import { Form, Input, message, Modal, Select, Table } from 'antd';
import { DatePicker } from 'antd';
import moment from 'moment';
import Layout1 from '../components/layout1/Layout1';
import axios from 'axios';
import Spinner from '../components/layout1/Spinner';

const { RangePicker } = DatePicker;

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);
  const [frequency, setFrequency] = useState('7');
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState('all');

  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
  ];

  const getAllTransaction = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      const res = await axios.post('/transactions/get-transaction', {
        userid: user._id,
        frequency,
        selectedDate: selectedDate.length > 0 ? [moment(selectedDate[0]).format('YYYY-MM-DD'), moment(selectedDate[1]).format('YYYY-MM-DD')] : [],
        type,
      });
      setLoading(false);
      setAllTransaction(res.data);
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.error(error);
      message.error('Issue with transaction');
    }
  };

  useEffect(() => {
    getAllTransaction();
  }, [frequency, selectedDate, type]);

  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      await axios.post('/transactions/add-transaction', { ...values, userid: user._id });
      setLoading(false);
      message.success('Transaction added successfully');
      setShowModal(false);
      getAllTransaction();
    } catch {
      setLoading(false);
      message.error('Failed to add transaction');
    }
  };

  const [loginUser, setLoginUser] = useState('');
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  return (
    <Layout1>
      {loading && <Spinner />}
      <div className="home-page">
        {/* <h5 className="center-text">Home Page</h5> */}
        <h2 className="center-text">Welcome {loginUser && loginUser.name}&nbsp;&nbsp;&nbsp;</h2>
        <div className="filters">
          <div>
            <div>Range/Filters</div>
            <h6>Select</h6>
            <Select value={frequency} onChange={(values) => setFrequency(values)}>
              <Select.Option value="7">last 1 week</Select.Option>
              <Select.Option value="14">last 2 weeks</Select.Option>
              <Select.Option value="21">last 3 weeks</Select.Option>
              <Select.Option value="30">previous month</Select.Option>
              <Select.Option value="182">6 months</Select.Option>
              <Select.Option value="365">1 year</Select.Option>
              {/* <Select.Option value="custom">custom</Select.Option> */}
            </Select>
            {frequency === "custom" && <RangePicker value={selectedDate} onChange={(values) => setSelectedDate(values)} />}
          </div>
          <div>
            <h6>Select type</h6>
            <Select value={type} onChange={(values) => setType(values)}>
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </div>
          &nbsp;
          &nbsp;
          &nbsp;
          <div >
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add new</button>
          </div>
        </div>
        <div className="content">
          <Table
            columns={columns}
            dataSource={allTransaction.map((transaction) => ({ ...transaction, key: transaction._id }))}
          />
        </div>
        <Modal title="Add Transaction" open={showModal} onCancel={() => setShowModal(false)} footer={false}>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Amount" name='amount'>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Type" name='type'>
              <Select placeholder="Select a type">
                <Select.Option value="income">income</Select.Option>
                <Select.Option value="expense">expense</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Category" name='category'>
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
            <Form.Item label="Date" name='date'>
              <Input type="date" />
            </Form.Item>
            <Form.Item label="Description" name='description'>
              <Input type="text" />
            </Form.Item>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">SAVE</button>
            </div>
          </Form>
        </Modal>
      </div>
    </Layout1>
  );
};

export default HomePage;
