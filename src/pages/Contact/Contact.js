import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Form from "../../components/Form/Form";
import "./Contact.css";


function Contact() {

  return (

    <div className="contact">
      <Header theme="dark"/>
      <div className="contact__container">
        <div className="contact__left">
          <div className="contact__title">
            <h3 className="contact__get">
              Let's get
            </h3>
            <h2 className="contact__touch">in touch</h2>
          </div>
          <h5 className="contact__offices">offices</h5>
          <h3 className="contact__city">Zagreb</h3>
          <h4 className="contact__adress">Koranska 1c, 10000 Zagreb, Croatia</h4>
          <h4 className="contact__phone">+385 1 2345 578</h4>
          <h4 className="contact__phone">+385 1 2345 679</h4>
          <h3 className="contact__city">London</h3>
          <h4 className="contact__adress">Vienna Street 21, 1210 London, UK</h4>
          <h3 className="contact__city">Los Angeles</h3>
          <h4 className="contact__adress">Gold Street #3026, CA 94108, Los Angeles, USA</h4>
        </div>
        <div className="contact__right">
            <Form />    
        </div>
      </div>
    </div>
  )
}

export default Contact;
