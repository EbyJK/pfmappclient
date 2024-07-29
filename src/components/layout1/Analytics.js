// import React from 'react'
// import {Progress} from 'antd'
// const Analytics = ({allTransaction}) => {
//     //total  transactions
//     const totalTransaction= allTransaction.length
//     const totalIncomeTransactions=allTransaction.filter(transaction => transaction.type === 'income')
//     const totalExpenseTransactions=allTransaction.filter(transaction => transaction.type === 'expense')
//     const totalIncomePercent=(totalIncomeTransactions.length/ totalTransaction)*100
//     const totalExpensePercent=(totalExpenseTransactions.length/ totalTransaction)*100

       
//   return (
//     <>
//     <div className="row m-3">
//       <div className=".col-md-4">
//             <div className="card">
//                 <div className="card-header">
//                     Total Transactions: {totalTransaction}
//                 </div>
//                 <div className="card-body">
//                         <h5 className="text-success">Income:{totalIncomeTransactions.length}</h5>
//                         &nbsp;&nbsp;&nbsp;&nbsp;
//                         <br></br>
//                         <h5 className="text-danger">Expense:{totalExpenseTransactions.length}</h5>
//                         <div className="chart">
//                             <Progress type="circle" strokeColor={'green'} className='mx-3' percent={totalIncomePercent.toFixed(0)}></Progress>
//                             <Progress type="circle" strokeColor={'red'} className='mx-3' percent={totalExpensePercent.toFixed(0)}></Progress>
//                         </div>
//                 </div>
//             </div>

//       </div>

//     </div>
//     </>
//   )
// }

// export default Analytics
import React from 'react'
import {Progress} from 'antd'
const Analytics = ({allTransaction}) => {
    //total  transactions
    const totalTransaction= allTransaction.length
    const totalIncomeTransactions=allTransaction.filter(transaction => transaction.type === 'income')
    const totalExpenseTransactions=allTransaction.filter(transaction => transaction.type === 'expense')
    const totalIncomePercent=(totalIncomeTransactions.length/ totalTransaction)*100
    const totalExpensePercent=(totalExpenseTransactions.length/ totalTransaction)*100

       
  return (
    <>
    <div className="row m-3">
      <div className=".col-md-4">
            <div className="card">
                <div className="card-header">
                    Total Transactions: {totalTransaction}
                </div>
                <div className="card-body">
                        <h5 className="text-success">Income:{totalIncomeTransactions.length}</h5>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <br></br>
                        <h5 className="text-danger">Expense:{totalExpenseTransactions.length}</h5>
                        <div className="chart">
                            <Progress type="circle" strokeColor={'green'} className='mx-3' percent={totalIncomePercent.toFixed(0)}></Progress>
                            <Progress type="circle" strokeColor={'red'} className='mx-3' percent={totalExpensePercent.toFixed(0)}></Progress>
                        </div>
                </div>
            </div>

      </div>

    </div>
    </>
  )
}

export default Analytics

