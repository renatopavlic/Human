import React from 'react';
import "./InsuranceProducts.css";

function InsuranceProducts() {
  return (
    <div className="insuranceproducts">
      <img src="/images/bg-map.png" alt="map" className="insuranceproducts__mapImage" />
      <div className="insuranceproducts__container">
        <h4 id="linkTarget" className="insuranceproducts__subtitle">
        But there is a smart way of taking Big data even further and Amodo has it ready for you. Read on.
        </h4>
        <h3 className="insuranceproducts__title">
        Differentiation through New Categories of Insurance Products
        </h3>
        <p className="insuranceproducts__paragraph">
        We give you the opportunity to broaden your product portfolio in a way that will make a difference. And reach out to customers directly, through digital channels
        </p>
        <div className="insuranceproducts__boxes">
          <div className="insuranceproducts__box">
          <img src="images/check-arrow.png" alt="check" className="insuranceproducts__checkImage" />
            <p className="insuranceproducts__boxText">
            Insights fueled by Big data enable insurers to launch new, more personalized products.
            </p>
          </div>
          <div className="insuranceproducts__box">
          <img src="images/check-arrow.png" alt="check" className="insuranceproducts__checkImage" />
            <p className="insuranceproducts__boxText">
            Differentiate with short-term and on-demand insurance products (Comprehensive Motor Insurance , Travel insurance, Accident insurance, etc.).
            </p>
          </div>
          <div className="insuranceproducts__box">
          <img src="images/check-arrow.png" alt="check" className="insuranceproducts__checkImage" />
            <p className="insuranceproducts__boxText">
            Build a Usage Based Insurance portfolio based on behavior and usage data available through smartphone, in-car, wearables and other data sources.
            </p>
          </div>
          <div className="insuranceproducts__box">
          <img src="images/check-arrow.png" alt="check" className="insuranceproducts__checkImage" />
            <p className="insuranceproducts__boxText">
            Cost Efficient Distribution through Digital Channels
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InsuranceProducts;
