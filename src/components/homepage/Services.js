import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../../styles/Services.css';
import ServiceCard from './ServiceCard';
import service1 from '../../images/service1.png';
import service2 from '../../images/service2.png';
import service3 from '../../images/service3.png';

export default function Services() {
  return (
    <section className="services">
      <Container>
        <h3>We provide awesome <span className="text-success">services</span></h3>
        <div className="service-cards mt-5">
          <Row>
            <ServiceCard title="Web &#38; Mobile design" text="We craft stunning and amazing web UI, using a well drrafted UX to fit your product." image={service1}></ServiceCard>
            <ServiceCard title="Graphic design" text="Amazing flyers, social media posts and brand representations that would make your brand stand out." image={service2} className="shadow"></ServiceCard>
            <ServiceCard title="Web development" text="With well written codes, we build amazing apps for all platforms, mobile and web apps in general." image={service3}></ServiceCard>
          </Row>
        </div>
      </Container>
    </section>
  );
}