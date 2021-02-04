import React, { useEffect } from 'react';
import { headerSlide, headerDropdown } from "./helperFunction.js";
import "./Header.css";

function Header() {

  useEffect(() => {
    // Navigation slide
    headerSlide();
    headerDropdown();
    
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
        <li className="header__listItem myDropdown">
          <a href="" className="header__listLink">Platform</a>
          <h1 className="header__arrowDropdown"><i class="fas fa-angle-down"></i></h1>
          <div className="header__dropdown">
            <div className="header__dropdownList">
            <a href="" className="header__dropdownLink">acquire</a>
            <a href="" className="header__dropdownLink">create</a>
            <a href="" className="header__dropdownLink">engage</a>
            <a href="" className="header__dropdownLink">sell</a>
            </div>
          </div>
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
