import React from 'react';
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about__topInfo">
        <h2 className="about__title">
        Trusted by clients on 5 continents
        </h2>
        <h3 className="about__subtitle">
        Over 20 connected insurance projects in various markets
        </h3>
        <p className="about__paragraph" data-aos="fade-left">
        We work across the globe. Markets worldwide have different road infrastructure, legal environment and general market conditions. Companies apply different strategies to tackle opportunities. No templates exists that can be universally applied across the board. A tailored solution is the only solution that will fit perfectly. Drop us a note.
        </p>
        <img src="/images/world-map5.png" alt="map" className="about__mapImage" />
      </div>
      <div className="about__bottomInfo">
        <h2 className="about__title">
        Live Company platforms
        </h2>
        <h3 className="about__subtitle">
        Already a part of digital transformation projects
        </h3>
      </div>
      <div className="about__logoBox">
        <img src="/images/logos/aig.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/bnp-paribas.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/conpensa.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/piv.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/telecom.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/triglav.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/porsche.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/baloise.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/a1.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/youse.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/as.png" alt="client-logo" className="about__logoImage" />
        <img src="/images/logos/maritime.png" alt="client-logo" className="about__logoImage" />
      </div>
      <div className="about__rewards">
        <div className="about__row" data-aos="fade-left">
          <h1 className="about__rowTitle">
            ISO <br/> certified
          </h1>
          <div className="about__rowInfo">
          <p className="about__rowText">
          It makes a difference. We’ve passed all the tests, we are safe from data breaching and within ISO quality standards. Amodo is certified for Quality Management and Information Security Management.
          </p>
          </div>
        </div>
        <div className="about__row" data-aos="fade-right">
          <h1 className="about__rowTitle">
            We've won <br/> already
          </h1>
          <div className="about__rowInfo">
            <p className="about__rowText">
            Company is announced as the leading company in the Insurance industry for Customer Engagement by Best Review magazine in the USA.
            </p>
            <p className="about__rowText">
              Implementation of Company technology got us into the award winning business Triglav’s UBI smartphone app is named the #1 app in Europe in 2018 by the world’s most comprehensive mobile insurance study created by PTOLEMUS
            </p>
            <p className="about__rowText">
            UBI smartphone app is named the Top #3 Mobile Insurance Proposition in Asia, Middle-East and Africa, in 2018, by PTOLEMUS.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
