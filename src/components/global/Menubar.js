import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../../styles/Menubar.css';
import logo from '../../logo.svg';
import Button from './Button';

export default function Menubar() {
  return (
    <Navbar className="navbar py-4" expand="lg">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="Logo" width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link className="active nav-link">Home</Nav.Link>
            <Nav.Link className="nav-link">Our Portfolio</Nav.Link>
            <Nav.Link className="nav-link">Our Team</Nav.Link>
            <Nav.Link className="nav-link">Contact Us</Nav.Link>
            <Nav.Link className="nav-link">
              <Button>Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}