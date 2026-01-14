import React from 'react';

const TrendingSection = () => {
  const trends = [
    { category: "INFLUENCER OF THE MONTH", name: "Eva Wed", description: "The Glamorous & Complex Style Icon" },
    { category: "MAKEUP OF THE MONTH", name: "Velvet Touch", description: "Our hydrating matte formula" },
    { category: "SHADE OF THE MONTH", name: "Berry Bold", description: "Deep plum for confident evenings" }
  ];
  
  return (
    <section className="trending">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Trending Now</h2>
          <h3 className="section-title">Spotlight of the Month</h3>
        </div>
        
        <div className="trending-grid">
          {trends.map((trend, idx) => (
            <div key={idx} className="trending-card">
              <div className="trending-badge">{trend.category}</div>
              <h4>{trend.name}</h4>
              <p>{trend.description}</p>
              <button className="trending-button">Explore →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;