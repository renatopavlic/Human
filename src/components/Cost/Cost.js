import React from 'react';
import Hexagon from "../Hexagon/Hexagon";
import "./Cost.css";

function Cost() {
  return (
    <div className="cost">
      <h2 className="cost__title">
      Cost Efficient Distribution through Digital Channels
      </h2>
      <p className="cost__subtitle">
      Distribute your insurance products directly through digital (smartphone) channels
      </p>
      <div className="cost__row">
        <div className="cost__box" data-aos="zoom-in">
          <Hexagon value="1"/>
          <h5 className="cost__boxText">
          Quote and Sell Insurance Products (New and Traditional) directly through Company Smartphone technology.
          </h5>
        </div>
        <div className="cost__box" data-aos="zoom-in">
          <Hexagon value="2"/>
          <h5 className="cost__boxText">
          Quote and Sell Insurance Products (New and Traditional) directly through Company Smartphone technology.
          </h5>
        </div>
        <div className="cost__box" data-aos="zoom-in">
          <Hexagon value="3"/>
          <h5 className="cost__boxText">
          Quote and Sell Insurance Products (New and Traditional) directly through Company Smartphone technology.
          </h5>
        </div>
      </div>
      <div className="cost__successTitle">
      Successful<br/>implementation
      </div>
    </div>
  )
}

export default Cost;
