import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Homemain.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {default as api} from '../Store/apiSlice';
import { createApi } from '@reduxjs/toolkit/query/react';



function Homemain() {

  const navigate = useNavigate();

  const [type, settype] = useState("")
  const [name, setname] = useState("")
  const [amount, setamount] = useState("")


  const handlesubmit=async(sub)=>
  {
      sub.preventDefault();
      const display = await axios.post("http://localhost:4000/createlist",{type,name,amount});
      console.log(display.data);

      navigate('/tableexp')

  }


  return (
    <div className="form max-w-sm mx-auto w-96">

      <Form onSubmit={handlesubmit}>
          <div className="grid gap-4">
            <Form.Select className="mt-5 form-input" aria-label="Default select example" value={type} onChange={(e)=>settype(e.target.value)}>
                <option value="Savings">Savings</option>
                <option value=" Investment">Investment</option>
                <option value="Expense">Expense</option>
            </Form.Select>

            <div className="input-group grid gap-4">
              <Form.Group className="form-input" controlId="formBasicamount">
                  <Form.Control className='nameinput' type="name" placeholder="Enter the name" value={name} onChange={(e)=>setname(e.target.value)} name='name'/>
              </Form.Group>
            </div>

            <div className="input-group grid gap-4">
              <Form.Group className="mb-3" controlId="formBasicamount">
                  <Form.Control className='nameinput' type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>setamount(e.target.value)} name='amount'/>
              </Form.Group>
            </div>

            <div className="submit-btn">
              <Button className='border py-2 text-white bg-indigo-900 w-full'  type="submit">
                Add Expense
              </Button>
            </div>

            <Link to={'/tableexp'}>
              <Button className='border py-2 text-white bg-indigo-900 w-full'  type="submit">
              Go Back
              </Button>
            </Link>

          </div>
      </Form>

    </div>
  )
}

export default Homemain