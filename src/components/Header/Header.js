import React from 'react';
import "./Header.css";

function Header() {
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
        <li className="header__listItem">
          <a href="" className="header__listLink">Get in touch</a>
        </li>
        <li className="header__listItem">
          <a href="" className="header__listLink">Deutch</a>
        </li>
      </ul>
    </div>
  )
}

export default Header;
