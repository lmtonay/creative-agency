import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Login.css';
import logo from '../logo.svg';
import LoginForm from '../components/login/LoginForm';

export default function Login() {
  return (
    <div className="login">
      <Container>
        <img className="logo" src={logo} alt="Logo" />
        <LoginForm />
      </Container>
    </div>
  );
}