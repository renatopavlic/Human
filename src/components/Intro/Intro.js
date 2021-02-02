import React from 'react';
import "./Intro.css";

function Intro() {
  return (
    <div className="intro">
      <img src="/images/bg-intro.png" alt="intro" className="intro__image" />
      <div className="intro__container">
          <h2 className="intro__perfect">Perfect</h2>
          <h1 className="intro__insurance">Insurance</h1>
          <h3 className="intro__subtitle">
          Risk Prevention through Behavior Based Incentivess
          </h3>
          <p className="intro__paragraph">
          Users who display low risk behaviour will get discounts and other benefits of your choice. So far, we have deployed successfully in more than 18 countries around the world.
          </p>
          <div className="intro__strenghts">
            <p className="intro__strenght">
            Risk Prevention, through behavior based incentives
            </p>
            <p className="intro__strenght">
            Lower Claims, through carefully selected and engaged customer base
            </p>
            <p className="intro__strenght">
            Fraud control by real-time verification of the insured object and/or claim over the smartphone camera
            </p>
          </div>
      </div>
    </div>
  )
}

export default Intro;
