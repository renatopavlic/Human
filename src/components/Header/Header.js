import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { headerSlide, headerDropdown } from "./helperFunction.js";
import "./Header.css";

function Header( { theme }) {

  useEffect(() => {
    // Navigation slide
    headerSlide();
    headerDropdown();
    
  }, []);

  console.log("Boja je: ", theme)
  return (
    <div className="header">
      <div className="header__logo">
        <img src={ theme === "white" ? "/images/logo.png" : "/images/logo-black.png"} alt="logo" className="header__logoImage" />
      </div>
      <ul className="header__list">
        <li className="header__listItem">
          <Link to="/" className={ theme === "white" ? "header__listLink" : "header__listLinkBlack"}>Home</Link>
        </li>
        <li className="header__listItem myDropdown">
          <Link to="/contact" className={ theme === "white" ? "header__listLink" : "header__listLinkBlack"}>Platform</Link>
          <h1 className="header__arrowDropdown"><i class="fas fa-angle-down"></i></h1>
          <div className="header__dropdown">
            <div className="header__dropdownList">
            <Link to="/contact" className="header__dropdownLink">acquire</Link>
            <Link to="/contact" className="header__dropdownLink">create</Link>
            <Link to="/contact" className="header__dropdownLink">engage</Link>
            <Link to="/contact" className="header__dropdownLink">sell</Link>
            </div>
          </div>
        </li>
        <li className="header__listItem">
        <Link to="/contact" className={ theme === "white" ? "header__listLink" : "header__listLinkBlack"}>Insights</Link>
        </li>
        <li className="header__listItem customItem">
        <Link to="/contact"  className="header__listLink customLink">Get in touch</Link>
        </li>
        <li className="header__listItem">
        <Link to="/contact"  className={ theme === "white" ? "header__listLink" : "header__listLinkBlack"}>Deutch</Link>
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
