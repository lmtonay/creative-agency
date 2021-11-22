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
        <Col xs={12} sm={6} md={4} lg={2}>
          <img className="mx-auto d-block" src={google} alt="Google" width="80%" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <img className="mx-auto d-block" src={slack} alt="Google" width="80%" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <img className="mx-auto d-block" src={netflix} alt="Google" width="70%" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <img className="mx-auto d-block" src={uber} alt="Google" width="60%" />
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <img className="mx-auto d-block" src={airbnb} alt="Google" width="80%" />
        </Col>
      </Row>
    </Container>
  );
}