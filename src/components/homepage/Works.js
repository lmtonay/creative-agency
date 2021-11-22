import React from 'react';
import { Container } from 'react-bootstrap';
import '../../styles/Works.css';
import WorkSwiper from './WorkSwiper';

export default function Works() {
  return (
    <section className="works">
      <Container>
        <h3 className="text-white text-center">Here are some of <span className="text-success">our works</span></h3>
        <div className="my-5">
          <WorkSwiper />
        </div>
      </Container>
    </section>
  );
}