import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../../styles/Hero.css';
import Button from '../global/Button';
import illu from '../../images/illustration.png';

export default function Hero() {
  return (
    <section className="hero">
      <Row className="d-flex align-items-center">
        <Col xs={12} lg={5}>
          <div className="left">
            <h1 className="hero-title">
              Let’s Grow Your <br />
              Brand To The <br />
              Next Level
            </h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </span> <br />
            <Button className="mt-4">Hire Us</Button>
          </div>
        </Col>
        <Col xs={12} lg={7}>
          <div className="right">
            <img src={illu} alt="Illustration" width="100%" />
          </div>
        </Col>
      </Row>
    </section>
  );
}