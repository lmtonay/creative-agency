import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import google from '../../images/google.png';
import airbnb from '../../images/airbnb.png';
import uber from '../../images/uber.png';
import netflix from '../../images/netflix.png';
import slack from '../../images/slack.png';
import '../../styles/Brands.css';

export default function Brands() {
  return (
    <Container className="brands">
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} md={2}>
          <img className="mx-auto d-block" src={google} alt="Google" width="80%" />
        </Col>
        <Col xs={12} md={2}>
          <img className="mx-auto d-block" src={slack} alt="Slack" width="80%" />
        </Col>
        <Col xs={12} md={2}>
          <img className="mx-auto d-block netflix" src={netflix} alt="Netflix" width="70%" />
        </Col>
        <Col xs={12} md={2}>
          <img className="mx-auto d-block uber" src={uber} alt="Uber" width="60%" />
        </Col>
        <Col xs={12} md={2}>
          <img className="mx-auto d-block" src={airbnb} alt="Airbnb" width="80%" />
        </Col>
      </Row>
    </Container>
  );
}