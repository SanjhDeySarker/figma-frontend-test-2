import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1>Where Every Shade<br /><span>Tells Your Story</span></h1>
          <p>Discover our luxury lipstick collection crafted for bold, confident women. From everyday neutrals to statement reds, find your perfect shade.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Shop Collection</button>
            <button className="btn btn-outline">Find Your Shade</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="floating-badge">
            <span>NEW</span>
            <p>Matte Revolution<br />Collection</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;