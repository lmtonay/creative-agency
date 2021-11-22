import React from 'react';
import { Col } from 'react-bootstrap';

export default function FeedbackCard({ image, name, position, comment }) {
  return (
    <Col xs={12} lg={4}>
      <div className="feedback-card border border-2 p-3 rounded">
        <div className="d-flex align-items-center mb-3">
          <div className="w-25">
            <img src={image} alt="client" width="70px" />
          </div>
          <div className="w-75 ps-3">
            <h6 className="fw-bold">{name}</h6>
            <small>{position}</small>
          </div>
        </div>
        <small className="text-secondary">{comment}</small>
      </div>
    </Col>
  );
}