import React from 'react';

const StorySection = () => {
  return (
    <section className="story" id="story">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Beauty That Speaks Confidence</h2>
          <h3 className="section-title">Our Story</h3>
        </div>
        
        <div className="story-content">
          <div className="story-text">
            <p>At INDIGEN LIPS, we believe the right lipstick is more than makeup—it's armor, expression, and identity. Our founder Maureen started this journey with a single matte red lipstick and a vision to empower women through color.</p>
            <p>Every shade in our collection is carefully formulated with nourishing ingredients, vibrant pigments, and long-lasting wear. We're committed to inclusive beauty that celebrates every skin tone.</p>
            
            <div className="founder-card">
              <div className="founder-image">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                  alt="Founder Maureen Rodriguez" 
                  loading="lazy"
                />
              </div>
              <div className="founder-info">
                <h4>Maureen Rodriguez</h4>
                <p className="founder-title">Founder & Creative Director</p>
                <p>"I started INDIGEN LIPS to create lipsticks that make women feel unstoppable. Every tube carries our commitment to quality, diversity, and empowerment."</p>
              </div>
            </div>
          </div>
          
          <div className="story-stats">
            <div className="stat-item">
              <h4>50+</h4>
              <p>Lipstick Shades</p>
            </div>
            <div className="stat-item">
              <h4>100K+</h4>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h4>3 Years</h4>
              <p>In Business</p>
            </div>
            <div className="stat-item">
              <h4>Award-Winning</h4>
              <p>Formulas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;