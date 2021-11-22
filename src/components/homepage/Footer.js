import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../../styles/Footer.css';
import Button from '../global/Button';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} md={6} className="left mb-3">
            <h3>Let us handle your project, professionally</h3>
            <small>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</small>
          </Col>
          <Col xs={12} md={6} className="right mb-3">
            <form>
              <input placeholder="Your/Your Company Name" className="mb-3" type="text" />
              <input placeholder="Your email address" className="mb-3" type="email" />
              <textarea placeholder="Your message" />
              <Button className="mt-2 w-100" type="submit">Send</Button>
            </form>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <p className="text-secondary">&copy; Labib Mahfuz Tonay</p>
        </div>
      </Container>
    </footer>
  );
}