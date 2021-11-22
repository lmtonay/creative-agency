import React from 'react';
import { Container } from 'react-bootstrap';
import Menubar from '../global/Menubar';
import '../../styles/Header.css';
import Hero from './Hero';

export default function Header() {
  return (
    <header>
      <div className="content">
        <Menubar />
        <Container>
          <Hero />
        </Container>
      </div>
    </header>
  );
}