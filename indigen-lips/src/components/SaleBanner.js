import React from 'react';

const SaleBanner = () => {
  return (
    <section className="sale-banner">
      <div className="container">
        <div className="sale-content">
          <div className="sale-text">
            <h2>50% OFF</h2>
            <h3>Women's Weekend Lipstick Sale</h3>
            <p>Hurry! Summer sale starts soon. Limited time offer on select shades.</p>
            <button className="btn btn-primary">Shop The Sale</button>
          </div>
          
          <div className="sale-countdown">
            <h4>Sale Ends In</h4>
            <div className="countdown-timer">
              <div className="countdown-item">
                <span>02</span>
                <p>Days</p>
              </div>
              <div className="countdown-item">
                <span>14</span>
                <p>Hours</p>
              </div>
              <div className="countdown-item">
                <span>45</span>
                <p>Minutes</p>
              </div>
            </div>
            
            <div className="sale-discounts">
              <div className="discount-item">
                <span>Winter Sale</span>
                <span>20% Off</span>
              </div>
              <div className="discount-item">
                <span>Summer Sale</span>
                <span>14% Off</span>
              </div>
              <div className="discount-item">
                <span>New Arrivals</span>
                <span>00% Off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;