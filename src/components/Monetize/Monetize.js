import React from 'react';
import Slider from '../Slider/Slider';
import "./Monetize.css";

function Monetize() {
  return (
    <div className="monetize">
      <Slider />
      <h2 className="monetize__title">
      Monetize on Just in Time Marketing capabilities of Company Platform
      </h2>
      <div className="monetize__row">
        <div className="monetize__box">
          <div className="hexagon"></div>
          <p className="monetize__boxText">
          Company does advanced behavior profiling based on geo-location, usage and behavior data from multiple sources.
          </p>
        </div>
        <div className="monetize__box">
          <div className="hexagon"></div>
          <p className="monetize__boxText">
          Company does advanced behavior profiling based on geo-location, usage and behavior data from multiple sources.
          </p>
        </div>
        <div className="monetize__box">
          <div className="hexagon"></div>
          <p className="monetize__boxText">
          Company does advanced behavior profiling based on geo-location, usage and behavior data from multiple sources.
          </p>
        </div>
      </div>
      <h4 className="monetize__subtitle">
      After recording more than 1.5 billion kilometers of user mobility and using the data in the customer engagement process, we have achieved an 18% rise of conversion rates
      </h4>
    </div>
  )
}

export default Monetize;
