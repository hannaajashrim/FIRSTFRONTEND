import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import './Signupusr.css'
function Signupusr() {


    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const navigate = useNavigate();


    const submithandler=async(e)=>
    {
        e.preventDefault();
        const display=await axios.post('http://localhost:4000/signup',{Name,Email,Password})
        console.log(display.data);

        navigate('/');
    }


  return (
    <div>

<div className='form_containersign'>
    <Form>

    <Form.Group className='nameboxsign' controlId="formBasicName">
        <Form.Label className='text_emps'>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={Name} onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className='mailboxsignup' controlId="formBasicEmail">
        <Form.Label className='text_emps'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className='pswboxsignup' controlId="formBasicPassword">
        <Form.Label className='text_emps'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Link to={`/`}><Button variant="primary" type="submit" className='btn_register' onClick={submithandler}>Register</Button></Link><br/><br />
      <Link to={`/login`}><Form.Text className="text_login">
        Already Registered? Click here to Login
      </Form.Text></Link>
    </Form>
    </div>

    </div>
  )
}

export default Signupusr