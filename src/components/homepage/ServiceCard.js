import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/ServiceCard.css';

export default function ServiceCard({ title, text, image, className }) {
  return (
    <Col xs={12} lg={4}>
      <div className={`service-card ${className}`}>
        <div className="service-card-image">
          <img src={image} alt={title} />
        </div>
        <div className="service-card-content">
          <h5>{title}</h5>
          <small className="text-secondary">{text}</small>
        </div>
      </div>
    </Col>
  );
}