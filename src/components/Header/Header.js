import React, { useEffect } from 'react';
import { headerSlide } from "./helperFunction.js";
import "./Header.css";

function Header() {

  useEffect(() => {
    // Navigation slide
    headerSlide();
    
  }, [])
  return (
    <div className="header">
      <div className="header__logo">
        <img src="/images/logo.png" alt="logo" className="header__logoImage" />
      </div>
      <ul className="header__list">
        <li className="header__listItem">
          <a href="" className="header__listLink">Home</a>
        </li>
        <li className="header__listItem">
          <a href="" className="header__listLink">Platform</a>
        </li>
        <li className="header__listItem">
          <a href="" className="header__listLink">Insights</a>
        </li>
        <li className="header__listItem customItem">
          <a href="" className="header__listLink customLink">Get in touch</a>
        </li>
        <li className="header__listItem">
          <a href="" className="header__listLink">Deutch</a>
        </li>
      </ul>
      <div class="header__burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
    </div>
  )
}

export default Header;
