import { Flex, Progress, Tooltip } from 'antd';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import { Form, Link, useNavigate, useParams } from 'react-router-dom'
import './Table.css'
import * as echarts from 'echarts';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import Graph from '../components/Graph';
import 'boxicons'
import {default as api} from '../Store/apiSlice';




function Expensetable() {

    const navigate = useNavigate();
    const [tableexp, settableexp] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/getlist`).then((display)=>
        {
            settableexp(display.data);
            console.log(display.data);
        })
      
    }, [])



    const {data , isFetching , isSuccess , isError} = api.useGetLabelsQuery()
    let Transactions;
    console.log(data);

    if(isFetching){
        Transactions = <div>Fetching</div>;
    }else if(isSuccess){
        Transactions = data.map((v,i)=><Transactions key={i} data={v}></Transactions>)
    }else if(isError){
        Transactions = <div>Error</div>
    }





    // const handledelte = () =>
    // {
    //   alert("Do you want to delete ?")
    // }

    const [labelscategory, setlabelscategory] = useState([])

    useEffect(() => {
      axios.get(`http://localhost:4000/labels`).then((display)=>
      {
        setlabelscategory(display.data);
        console.log(display.data);

      })
    }, [])
    


  return (


    <div className='body'>
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className='rext-4xl py-8 mb-10 bg-slate-800 text-white rounded'>EXPENSE CHART</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4">

      </div>
      <div className='charts'>
      
        <div className='grid md:grid-cols-2 gap-4'>
          <Graph></Graph>


        </div>


        


<div className='flex flex-col py-6 gap-3'>
  <h1 className='py-4 font-bold text-xl history '>History</h1>
  {/* {Transactions} */}
      <div className=''>
          <table className='exptable '>  
      
          <tr className='tabhead'>
            <th className='headtb'>Categogry</th>
            <th className='headtb'>Name</th>
            <th className='headtb'>Amount</th>
            <th className='headtb'>Edit</th>
            <th className='headtb'>Delete</th>

            {/* <th>View</th> */}


          </tr>
          {tableexp.map((display)=>
                  <tr className='tabdata'>
                    <td className='datatb'>{display.type}</td>
                    <td className='datatb'>{display.name}</td>
                    <td className='datatb'>{display.amount}</td>
                    <td className='datatb'><Link to={`/edititem/${display._id}`}><button className='btntbl1'><box-icon size="15px" name="edit"></box-icon></button></Link></td>
                    <td ><Link to={`/deleteitem/${display._id}`}><button className='btntbl2'><box-icon size="15px" name="trash"></box-icon></button></Link></td>
                    {/* <td><Link to={`/viewitem/${display._id}`}><button className='btntbl3'><box-icon name="view"></box-icon></button></Link></td> */}

                  </tr>
          )}


        </table>
        </div>
 
        <Link to={'/homemain'}><Button variant="dark" className='btnAddexp'>Add Expense</Button></Link>

    </div>


</div>
    </div>



  )
}





// function Transaction({data}){
//   if(!data) return null;
//   return(
//     <div className='item flex justify-center bg-gray-50 py-2 rounded-r'>
//       <span className='block w-full'>{data.name}</span>
//     </div>
//   )
// }














export default Expensetable