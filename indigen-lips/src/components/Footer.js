import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <span className="logo-icon">💄</span>
              <h2>INDIGEN<span>LIPS</span></h2>
            </div>
            <p>Luxury lipsticks crafted for confidence. Where every shade tells your unique story.</p>
            <div className="social-links">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li><a href="#">Matte Lipsticks</a></li>
              <li><a href="#">Liquid Lipsticks</a></li>
              <li><a href="#">Lip Gloss</a></li>
              <li><a href="#">Lip Liners</a></li>
              <li><a href="#">Collections</a></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Find Your Shade</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <p><strong>Phone:</strong> +91 123456789</p>
              <p><strong>Email:</strong> info@indigenlips.com</p>
              <p><strong>Address:</strong> 123 garia kolkata west-bengal<br />Los Angeles, CA 90210</p>
            </div>
            <div className="newsletter">
              <h5>Join Our Beauty Club</h5>
              <p>Get exclusive offers and new shade alerts</p>
              <div className="newsletter-input">
                <input type="email" placeholder="Your email address" />
                <button aria-label="Subscribe">→</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} INDIGEN LIPS. All rights reserved. | Beauty That Speaks Confidence</p>
          <div className="footer-policies">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;