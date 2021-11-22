import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/Feedback.css';
import FeedbackCard from './FeedbackCard';
import client1 from '../../images/customer-1.png';
import client2 from '../../images/customer-2.png';
import client3 from '../../images/customer-3.png';

export default function Feedback() {
  return (
    <section className="feedback">
      <Container>
        <h3 className="text-center"><span className="text-primary">Clients</span> <span className="text-success">Feedback</span></h3>
        <div className="feedback-container my-5">
          <Row>
            <FeedbackCard image={client1} name="John Dalton" position="CEO, Manpol" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "></FeedbackCard>
            <FeedbackCard image={client2} name="Miriam Barron" position="CEO, Studion" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "></FeedbackCard>
            <FeedbackCard image={client3} name="Bria Malone" position="CEO, Rizest" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat "></FeedbackCard>
          </Row>
        </div>
      </Container>
    </section>
  );
}