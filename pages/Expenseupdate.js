import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form, Link, useNavigate, useParams } from 'react-router-dom'

function Expenseupdate() {

    const navigate = useNavigate();

    const [editlist, seteditlist] = useState([])
    const {user} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:4000/getsinglelist/${user}`).then((res)=>
        {
            seteditlist(res.data);
            console.log(res.data);
        })
     
    }, [])


    const [amount, setamount] = useState(editlist.amount);
    const [category, setcategory] = useState(editlist.category);
    const [date, setdate] = useState(editlist.date);
    

    const handlesubmit = () =>
    {
        axios.put(`http://localhost:4000/updateitem/${user}`,{
        amount,
        category,
        date})
        .then((res)=>
        {
            console.log(`Item with ID ${user} updated`);
        })
        navigate('/tableexp')
    }

  return (
    <div>


    <Form>


      <Form.Group className="mb-3" controlId="formBasicamount">
        <Form.Control type="number" placeholder="Enter Amount" value={editlist.amount} onChange={(e)=>setamount(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasiccategory">
        <Form.Control type="text" placeholder="Enter Expense name" value={editlist.category} onChange={(e)=>setcategory(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicamount">
        <Form.Control type="date" placeholder="Enter the Date" value={editlist.date} onChange={(e)=>setdate(e.target.value)}/>
      </Form.Group>

      <Link to={'/tableexp'}><Button variant="primary" type="submit">
        Back 
      </Button></Link>
     
      <Link to={'/tableexp'}><Button variant="primary" type="submit" onSubmit={handlesubmit}>
        Edit 
      </Button></Link>
    </Form>

    </div>
  )
}

export default Expenseupdate