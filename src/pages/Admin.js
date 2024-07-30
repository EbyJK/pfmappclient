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


///////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useEffect, useState } from 'react';
// import { Form, Input, message, Modal, Select, Table } from 'antd';
// import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
// import { DatePicker } from 'antd';
// import moment from 'moment';
// import Analytics from '../components/layout1/Analytics';
// import axios from 'axios';
// import Spinner from '../components/layout1/Spinner';

// const { RangePicker } = DatePicker;

// const Admin = () => {
//   const [viewData, setViewData] = useState('table');
//   const [allTransaction, setAllTransaction] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [frequency, setFrequency] = useState('7');
//   const [selectedDate, setSelecteddate] = useState([]);
//   const [type, setType] = useState('all');
//   const [editable, setEditable] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   // Define columns for the table
//   const columns = [
//     {
//       title: 'date',
//       dataIndex: 'date',
//       render: (text) => <span>{moment(text).format('YYYY-MM-DD')}</span>,
//     },
//     {
//       title: 'amount',
//       dataIndex: 'amount',
//     },
//     {
//       title: 'type',
//       dataIndex: 'type',
//     },
//     {
//       title: 'category',
//       dataIndex: 'category',
//     },
//     {
//       title: 'description',
//       dataIndex: 'description',
//     },
//     {
//       title: 'Actions',
//       render: (text, record) => (
//         <div>
//           <EditOutlined
//             onClick={() => {
//               setEditable(record);
//               setShowModal(true);
//             }}
//           />
//           <DeleteOutlined className="mx-5" />
//         </div>
//       ),
//     },
//   ];

//   // Fetch transactions from the API
//   const getAllTransaction = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       setLoading(true);
//       const res = await axios.post('/transactions/get-transaction', {
//         userid: user._id,
//         frequency,
//         selectedDate,
//         type,
//       });
//       setLoading(false);
//       setAllTransaction(res.data);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       message.error('Issue with fetching transactions');
//     }
//   };

//   useEffect(() => {
//     getAllTransaction();
//   }, [frequency, selectedDate, type]);

//   return (
//     <div className="admin-page">
//       {loading && <Spinner />}
//       <div className="icon-container">
//         <UnorderedListOutlined
//           className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}
//           onClick={() => setViewData('table')}
//         />
//         <AreaChartOutlined
//           className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
//           onClick={() => setViewData('analytics')}
//         />
//       </div>

//       <div className="filters">
//         <div>
//           <div>Range/Filters</div>
//           <h6>Select</h6>
//           <Select value={frequency} onChange={(values) => setFrequency(values)}>
//             <Select.Option value="7">last 1 week</Select.Option>
//             <Select.Option value="14">last 2 weeks</Select.Option>
//             <Select.Option value="21">last 3 weeks</Select.Option>
//             <Select.Option value="30">previous month</Select.Option>
//             <Select.Option value="182">6 months</Select.Option>
//             <Select.Option value="365">1 year</Select.Option>
//             <Select.Option value="custom">custom</Select.Option>
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//         </div>
//         <div>
//           <h6>Select type</h6>
//           <Select value={type} onChange={(values) => setType(values)}>
//             <Select.Option value="all">All</Select.Option>
//             <Select.Option value="income">Income</Select.Option>
//             <Select.Option value="expense">Expense</Select.Option>
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//         </div>
//       </div>

//       <div className="content">
//         {viewData === 'table' ? (
//           <Table
//             columns={columns}
//             dataSource={allTransaction.map((transaction) => ({
//               ...transaction,
//               key: transaction._id, // Assuming each transaction has a unique _id
//             }))}
//           />
//         ) : (
//           <Analytics allTransaction={allTransaction} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Admin;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 
// import React, { useEffect, useState } from 'react';
// import { Form, Input, message, Modal, Select, Table, List } from 'antd';
// import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
// import { DatePicker } from 'antd';
// import moment from 'moment';
// import Analytics from '../components/layout1/Analytics';
// import axios from 'axios';
// import Spinner from '../components/layout1/Spinner';

// const { RangePicker } = DatePicker;

// const Admin = () => {
//   const [viewData, setViewData] = useState('table');
//   const [allTransaction, setAllTransaction] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [frequency, setFrequency] = useState('7');
//   const [selectedDate, setSelecteddate] = useState([]);
//   const [type, setType] = useState('all');
//   const [editable, setEditable] = useState(null);
//   const [showModal, setShowModal] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [showUsersModal, setShowUsersModal] = useState(false);
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
//     },
//     {
//       title: 'Actions',
//       render:(text, record) => (
//         <div>
//           <EditOutlined onClick={() => {
//             setEditable(record);
//             setShowModal(true);
//           }} />
//           <DeleteOutlined className='mx-5' />
//         </div>
//       )
//     },
//   ];

//   // Fetch users from the API
//   const getUsers = async () => {
//     try {
//       const res = await axios.get('/users');
//       setUsers(res.data);
//     } catch (error) {
//       console.log(error);
//       message.error('Issue with fetching users');
//     }
//   };

//   // Fetch transactions from the API
//   const getAllTransaction = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem('user'));
//       if (!user || !user._id) {
//         message.error('User not found or invalid');
//         return;
//       }

//       setLoading(true);
//       const res = await axios.post('/transactions/get-transaction', {
//         userid: user._id,
//         frequency,
//         selectedDate,
//         type,
//       });
//       setLoading(false);
//       setAllTransaction(res.data);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//       message.error('Issue with fetching transactions');
//     }
//   };

//   useEffect(() => {
//     getAllTransaction();
//   }, [frequency, selectedDate, type]);

//   return (
//     <div className="admin-page">
//       {loading && <Spinner />}
//       <div className="icon-container">
//         <UnorderedListOutlined
//           className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}
//           onClick={() => setViewData('table')}
//         />
//         <AreaChartOutlined
//           className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
//           onClick={() => setViewData('analytics')}
//         />
//         <UserOutlined
//           className="mx-2"
//           onClick={() => {
//             getUsers();
//             setShowUsersModal(true);
//           }}
//         />
//       </div>

//       <div className="filters">
//         <div>
//           <div>Range/Filters</div>
//           <h6>Select</h6>
//           <Select value={frequency} onChange={(values) => setFrequency(values)}>
//             <Select.Option value="7">last 1 week</Select.Option>
//             <Select.Option value="14">last 2 weeks</Select.Option>
//             <Select.Option value="21">last 3 weeks</Select.Option>
//             <Select.Option value="30">previous month</Select.Option>
//             <Select.Option value="182">6 months</Select.Option>
//             <Select.Option value="365">1 year</Select.Option>
//             {/* <Select.Option value="custom">custom</Select.Option> */}
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//         </div>
//         <div>
//           <h6>Select type</h6>
//           <Select value={type} onChange={(values) => setType(values)}>
//             <Select.Option value="all">All</Select.Option>
//             <Select.Option value="income">Income</Select.Option>
//             <Select.Option value="expense">Expense</Select.Option>
//           </Select>
//           {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
//         </div>
//       </div>

//       <div className="content">
//         {viewData === 'table' ? (
//           <Table
//             columns={columns}
//             dataSource={allTransaction.map((transaction) => ({
//               ...transaction,
//               key: transaction._id, // Assuming each transaction has a unique _id
//             }))}
//           />
//         ) : (
//           <Analytics allTransaction={allTransaction} />
//         )}
//       </div>

//       <Modal
//         title="Users"
//         open={showUsersModal} // Changed 'visible' to 'open'
//         onCancel={() => setShowUsersModal(false)}
//         footer={null}
//       >
//         <List
//           dataSource={users}
//           renderItem={(user) => (
//             <List.Item key={user._id}>
//               {user.name}
//             </List.Item>
//           )}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default Admin;
import React, { useEffect, useState } from 'react';
import { Form, Input, message, Modal, Select, Table, List } from 'antd';
import { UnorderedListOutlined, AreaChartOutlined, EditOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import { DatePicker } from 'antd';
import moment from 'moment';
import Analytics from '../components/layout1/Analytics';
import axios from 'axios';
import Spinner from '../components/layout1/Spinner';
import { Link ,useNavigate} from 'react-router-dom'

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
  const [users, setUsers] = useState([]);
  const [showUsersModal, setShowUsersModal] = useState(false);
  const [allUserTransactions, setAllUserTransactions] = useState([]);
  const [showTransactionsModal, setShowTransactionsModal] = useState(false);
  const navigate=useNavigate();
  const logoutHandler=()=>{
    localStorage.removeItem('user')
    message.success('logout success')
     navigate('/login')
   }
   const handleDelete=async(record)=>{
    try{
      setLoading(true);
      await axios.post("/transactions/delete-transaction",{transactionId:record._id});
      setLoading(false);
      message.success('transaction deleted');
    }
    catch(error){
      setLoading(false);
      console.log(error);
      message.error('unablle to delete')
    }

   };
   const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      if(editable){
        await axios.post('/transactions/edit-transaction',{payload:{ ...values, userid: user._id },transactionId:editable._id});
      setLoading(false);
      message.success('Transaction updated successfully');

      }
      
      setShowModal(false);
      setEditable(null);
      getAllTransaction();
    } catch (error){

      setLoading(false);
      message.error('Failed to add transaction');
    }
  };
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Type',
      dataIndex: 'type'
    },
    {
      title: 'Category',
      dataIndex: 'category'
    },
    {
      title: 'Description',
      dataIndex: 'description'
    },
    {
      title: 'Actions',
      render:(text, record) => (
        <div>
          <EditOutlined onClick={() => {
            handleSubmit(record);
            setEditable(record);
            setShowModal(true);
          }} />
          <DeleteOutlined className='mx-5' onClick={()=>{handleDelete(record);}}/>
        </div>
      )
    },
  ];

  // Fetch users from the API
  const getUsers = async () => {
    try {
      const res = await axios.get('/users');
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      message.error('Issue with fetching users');
    }
  };

  // Fetch transactions from the API
  const getAllTransaction = async () => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      if (!user || !user._id) {
        // message.error('User not found or invalid');
        return;
      }

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

  // Fetch all users' transactions from the API
  const getAllUserTransactions = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/transactions/all-user-transactions');
      setLoading(false);
      setAllUserTransactions(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error('Issue with fetching all users\' transactions');
    }
  };

  useEffect(() => {
    getAllTransaction();
  }, [frequency, selectedDate, type]);

  return (
    <div className="admin-page">
      {loading && <Spinner />}
      <button  className='btn btn-primary' onClick={logoutHandler}
        style={{ backgroundColor: 'white', color: 'black', padding: '10px', border: 'none', borderRadius: '50px' }}>
          <Link className="nav-link active" aria-current="page" to="/login">
          <h5>Logout</h5>
          </Link>
          </button>
      <div className="icon-container">
        <UnorderedListOutlined
          className={`mx-2 ${viewData === 'table' ? 'active-icon' : 'inactive-icon'}`}
          onClick={() => setViewData('table')}
        />
        <AreaChartOutlined
          className={`mx-2 ${viewData === 'analytics' ? 'active-icon' : 'inactive-icon'}`}
          onClick={() => {
            getAllUserTransactions();
            setViewData('analytics');
          }}
        />
        <UserOutlined
          className="mx-2"
          onClick={() => {
            getUsers();
            setShowUsersModal(true);
          }}
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
          </Select>
          {frequency === 'custom' && <RangePicker value={selectedDate} onChange={(values) => setSelecteddate(values)} />}
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
          <Table
            columns={columns}
            dataSource={allTransaction.map((transaction) => ({
              ...transaction,
              key: transaction._id, // Assuming each transaction has a unique _id
            }))}
          />
        ) : (
          <Analytics allTransaction={allUserTransactions} />
        )}
      </div>

      <Modal
        title="Users"
        open={showUsersModal}
        onCancel={() => setShowUsersModal(false)}
        footer={null}
      >
        <List
          dataSource={users}
          renderItem={(user) => (
            <List.Item key={user._id}>
              {user.name}
            </List.Item>
          )}
        />
      </Modal>

      <Modal
        title="all transactions"
        open={showTransactionsModal}
        onCancel={() => setShowTransactionsModal(false)}
        footer={null}
      >
        <Table
          columns={columns}
          dataSource={allUserTransactions.map((transaction) => ({
            ...transaction,
            key: transaction._id,
          }))}
        />
      </Modal>
      <Modal title={editable ? 'Edit Transaction':'Add transaction'} open={showModal} onCancel={() => setShowModal(false)} footer={false}>
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
  );
};

export default Admin;

