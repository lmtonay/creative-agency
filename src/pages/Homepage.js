import React from 'react';
import Brands from '../components/homepage/Brands';
import Feedback from '../components/homepage/Feedback';
import Footer from '../components/homepage/Footer';
import Header from '../components/homepage/Header';
import Services from '../components/homepage/Services';
import Works from '../components/homepage/Works';

export default function Homepage() {
  return (
    <>
      <Header />
      <Brands />
      <Services />
      <Works />
      <Feedback />
      <Footer />
    </>
  );
}