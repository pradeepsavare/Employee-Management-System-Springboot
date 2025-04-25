
import React from 'react';
import "./Header.css"
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" >
      <Container>
       
        <Navbar.Brand href="/">Employee Management System</Navbar.Brand>

       
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/" className='nav-link'>Employees</Nav.Link>
          <Nav.Link as={Link} to="/employee" className='nav-link'>Post Employee</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;


