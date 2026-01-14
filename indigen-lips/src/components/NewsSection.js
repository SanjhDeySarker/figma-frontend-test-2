import React from 'react';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Working Together To Create Unique Collections",
      excerpt: "Indigen Lips collaborates with independent artists to develop limited edition shades that celebrate diverse beauty stories.",
      links: ["View Article", "Watch Video", "Read Blog"]
    },
    {
      id: 2,
      title: "Sustainable Beauty Initiative",
      excerpt: "Our new refillable lipstick cases reduce plastic waste by 70%. Join us in making beauty more sustainable.",
      links: ["Learn More", "Join Program"]
    }
  ];
  
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Latest Updates</h2>
          <h3 className="section-title">News & Blogs</h3>
        </div>
        
        <div className="news-grid">
          {news.map(item => (
            <div key={item.id} className="news-card">
              <h4>{item.title}</h4>
              <p>{item.excerpt}</p>
              <div className="news-links">
                {item.links.map((link, idx) => (
                  <a key={idx} href="#" className="news-link">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;