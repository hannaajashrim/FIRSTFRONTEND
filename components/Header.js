import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
<div>
{/* className="bg-body-tertiary"  */}
    <Navbar collapseOnSelect expand="lg" className='navcontainer'>
      <Container>
        <img src="https://cdn-icons-png.flaticon.com/128/10758/10758868.png" alt="imglogo"  className='logoimg'/>
        <Navbar.Brand className='logohead'>EXPENSE MANAGEMENT</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Link to={'/login'}><Button variant="light" className='btn_log'>Login</Button></Link>
            <Link to={'/signup'}><Button variant="secondary" className='btn_sign'>Sign UP</Button></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

    </div>
  )
}

export default Header