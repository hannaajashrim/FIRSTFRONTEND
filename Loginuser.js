import axios from 'axios';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Loginuser.css'
import { Link, useNavigate } from 'react-router-dom';

function Loginuser() {

    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const submithandler=async (event)=>{
      event.preventDefault();
      const disp=await axios.post("http://localhost:4000/loginn",{Email,Password})
      console.log(disp.data);

      navigate('/tableexp')

    }

 
  




  return (
    <div className='maincontainer'>
    <div className='form_container'>
    <Form>
      <Form.Group className='mailbox' controlId="formBasicEmail">
        <Form.Label className='textempswd'>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className='pswbox' controlId="formBasicPassword">
        <Form.Label className='textempswd'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" className='btn_login' onClick={submithandler}>Login</Button><br/><br />
      <Link to={`/signup`}><Form.Text className="text_register">
        Not a User? Click here to Register
      </Form.Text></Link>
    </Form>
    </div>





        {/* <form action="post">
            <input type="email" placeholder='Enter email' value={Email} onChange={(e)=>setEmail(e.target.value)}/> <br/>
            <input type="password" placeholder='Enter your password' value={Password} onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button onClick={submithandler}>Submit</button>

        </form> */}

    </div>
  )
}

export default Loginuser