import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <img src="/images/footer.png" alt="bg" className="footer__backgroundImage" />
      <img  src="/images/footer-platform.png" alt="platform" className="footer__image" />
      <div className="footer__navigation">
        <h4 className="footer__privacy">© COMPANY Privacy policy</h4>
        <div className="footer__socialLinks">
        <i class="fab fa-linkedin"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer;
