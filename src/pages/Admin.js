// import React from 'react'
// import {UnorderedListOutlined,AreaChartOutlined} from '@ant-design/icons'
// import {useEffect,useState} from 'react'
// import Analytics from '../components/layout1/Analytics';
//  import { Form, Input, message, Modal, Select, Table} from 'antd'
//  import {DatePicker} from 'antd'
//   import moment from "moment";
// import Layout1 from '../components/layout1/Layout1'
// //import { Option } from 'antd/es/mentions'
// import axios from 'axios'
// import Spinner from '../components/layout1/Spinner'
// import HomePage from './HomePage';
// const Admin = () => {
//     const [viewData,setViewData]=useState('table')
//   return (
//     <div>
//     <div className="icon-container">
     
//         <UnorderedListOutlined className={`mx-2 ${viewData === 'table'? 'active-icon ': 'inactive-icon'} `} onClick={()=>setViewData('table')}></UnorderedListOutlined>
//         <AreaChartOutlined className={`mx-2 ${viewData === 'analytics'? 'active-icon ': 'inactive-icon'} `} onClick={()=>setViewData('analytics')}/>
      
//     </div>
//     {/* <HomePage viewData={viewData} /> */}
//     </div>
    
//   )
// }

// export default Admin
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react'
// import { Form, Input, message, Modal, Select, Table} from 'antd'
// import { UnorderedListOutlined, AreaChartOutlined ,EditOutlined,DeleteOutlined} from '@ant-design/icons'
// import {DatePicker} from 'antd'
// import moment from "moment";
// //import { Table } from 'antd'
// import Analytics from '../components/layout1/Analytics'
// import axios from 'axios'
// import Spinner from '../components/layout1/Spinner'

// const {RangePicker}= DatePicker;
// const Admin = () => {
//     const [viewData, setViewData] = useState('table');
//     const [allTransaction, setAllTransaction] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [frequency, setFrequency] = useState('7');
//     const [selectedDate, setSelecteddate] = useState([]);
//     const [type, setType] = useState('all');
//     const[editable,setEditable]=useState(null);
//     const [showModal,setShowModal]=useState(false)
//     // Define columns for the table
//     const columns = [
//         {
//             title: 'date',
//             dataIndex: 'date',
//             render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
//         },
//         {
//             title: 'amount',
//             dataIndex: 'amount'
//         },
//         {
//             title: 'type',
//             dataIndex: 'type'
//         },
//         {
//             title: 'category',
//             dataIndex: 'category'
//         },
//         {
//             title: 'description',
//             dataIndex: 'description'
//         },
//         {
//             title: 'Actions',
//             render:(text,record)=>(
//                 <div>
//                     <EditOutlined onClick={()=>{
//                         setEditable(record)
//                         setShowModal(true);
//                     }}></EditOutlined>
//                     <DeleteOutlined className='mx-5'></DeleteOutlined>
//                 </div>
//             )
//         },
//     ];

//     // Fetch transactions from the API
//     const getAllTransaction = async () => {
//         try {
//             const user = JSON.parse(localStorage.getItem('user'));
//             setLoading(true);
//             const res = await axios.post('/transactions/get-transaction', {
//                 userid: user._id,
//                 frequency,
//                 selectedDate,
//                 type,
//             });
//             setLoading(false);
//             setAllTransaction(res.data);
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//             message.error('Issue with fetching transactions');
//         }
//     };

//     useEffect(() => {
//         getAllTransaction();
//     }, [frequency, selectedDate, type]);

//     return (
//         <div className="admin-page">
//             {loading && <Spinner />}
//             <div className="icon-container">
//                 <UnorderedListOutlined
//                     className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}
//                     onClick={() => setViewData('table')}
//                 />
//                 <AreaChartOutlined
//                     className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
//                     onClick={() => setViewData('analytics')}
//                 />
//             </div>

//             <div className="filters">
//                 <div>
//                     <div>Range/Filters</div>
//                     <h6>Select</h6>
//                     <Select value={frequency} onChange={(values) => setFrequency(values)}>
//                         <Select.Option value="7">last 1 week</Select.Option>
//                         <Select.Option value="14">last 2 weeks</Select.Option>
//                         <Select.Option value="21">last 3 weeks</Select.Option>
//                         <Select.Option value="30">previous month</Select.Option>
//                         <Select.Option value="182">6 months</Select.Option>
//                         <Select.Option value="365">1 year</Select.Option>
//                         <Select.Option value="custom">custom</Select.Option>
//                     </Select>
//                     {frequency === "custom" && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//                 </div>
//                 <div>
//                     <h6>Select type</h6>
//                     <Select value={type} onChange={(values) => setType(values)}>
//                         <Select.Option value="all">All</Select.Option>
//                         <Select.Option value="income">Income</Select.Option>
//                         <Select.Option value="expense">Expense</Select.Option>
//                     </Select>
//                     {frequency === "custom" && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//                 </div>
//             </div>

//             <div className="content">
//                 {viewData === 'table' ? (
//                     <Table columns={columns} dataSource={allTransaction} />
//                 ) : (
//                     <Analytics allTransaction={allTransaction} />
//                 )}
//             </div>
//         </div>
//     )
// }

// export default Admin
import React, { useEffect, useState } from 'react'
import { Form, Input, message, Modal, Select, Table } from 'antd'
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import moment from "moment";
import axios from 'axios'
import Spinner from '../components/layout1/Spinner'
import Analytics from '../components/layout1/Analytics'

const { RangePicker } = DatePicker;

const Admin = () => {
  const [viewData, setViewData] = useState('table');
  const [allTransaction, setAllTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [frequency, setFrequency] = useState('7');
  const [selectedDate, setSelecteddate] = useState([]);
  const [type, setType] = useState('all');
  const [editable, setEditable] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Define columns for the table
  const columns = [
    {
      title: 'date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: 'amount',
      dataIndex: 'amount'
    },
    {
      title: 'type',
      dataIndex: 'type'
    },
    {
      title: 'category',
      dataIndex: 'category'
    },
    {
      title: 'description',
      dataIndex: 'description'
    },
    {
      title: 'Actions (edit/delete)',
      render: (text, record) => (
        <div>
          <EditOutlined onClick={() => handleEdit(record)} />
          <DeleteOutlined className='mx-5' onClick={() => handleDelete(record)} />
        </div>
      )
    },
  ];

  // Fetch transactions from the API
  const getAllTransaction = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      const res = await axios.post('/transactions/get-transaction', {
        userid: user._id,
        frequency,
        selectedDate,
        type,
      });
      setLoading(false);
      setAllTransaction(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error('Issue with fetching transactions');
    }
  };

  useEffect(() => {
    getAllTransaction();
  }, [frequency, selectedDate, type]);
  

  // Handle form submission
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      if (editable) {
        await axios.post('/transactions/edit-transaction', {payload:{ ...values, userid: user._id, _id: editable._id },transactionId:editable._id});
        setLoading(false);
        message.success('Transaction updated successfully');
      } else {
        await axios.post('/transactions/add-transaction', { ...values, userid: user._id });
        message.success('Transaction added successfully');
      }
      setLoading(false);
      setShowModal(false);
      setEditable(null);
      getAllTransaction();
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error('Failed to add/update transaction');
    }
  };

  // Handle edit
  const handleEdit = (record) => {
    setEditable(record);
    setShowModal(true);
  };

  // Handle delete handler
  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post('/transactions/delete-transaction', {transactionId:record._id});
      message.success('Transaction deleted successfully');
      setLoading(false);
    //   getAllTransaction();
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error('Failed to delete transaction');
    }
  };

  return (
    <div className="admin-page">
      {loading && <Spinner />}
      <div className="icon-container">
        <UnorderedListOutlined
          className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}
          onClick={() => setViewData('table')}
        />
        <AreaChartOutlined
          className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
          onClick={() => setViewData('analytics')}
        />
      </div>

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
            <Select.Option value="custom">custom</Select.Option>
          </Select>
          {frequency === "custom" && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
        </div>
        <div>
          <h6>Select type</h6>
          <Select value={type} onChange={(values) => setType(values)}>
            <Select.Option value="all">All</Select.Option>
            <Select.Option value="income">Income</Select.Option>
            <Select.Option value="expense">Expense</Select.Option>
          </Select>
        </div>
       
      </div>

      <div className="content">
        {viewData === 'table' ? (
          <Table columns={columns} dataSource={allTransaction} />
        ) : (
          <Analytics allTransaction={allTransaction} />
        )}
      </div>

      <Modal title={editable ? "Edit Transaction" : "Add Transaction"} open={showModal} onCancel={() => setShowModal(false)} footer={false}>
        <Form layout="vertical" onFinish={handleSubmit} initialValues={editable}>
          <Form.Item label="amount" name='amount'>
            <Input type="number" />
          </Form.Item>
          <Form.Item label="type" name='type'>
            <Select placeholder="Select a type">
              <Select.Option value="income">income</Select.Option>
              <Select.Option value="expense">expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="category" name='category'>
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
          <Form.Item label="date" name='date'>
            <Input type="date" />
          </Form.Item>
          <Form.Item label="description" name='description'>
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">SAVE</button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Admin;
