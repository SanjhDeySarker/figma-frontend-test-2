import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < testimonial.rating ? 'star filled' : 'star'}>★</span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-author">
          <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
          <div>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.role}</p>
          </div>
        </div>
        <div className="testimonial-rating">{renderStars()}</div>
      </div>
      
      <p className="testimonial-content">"{testimonial.content}"</p>
      
      <div className="testimonial-footer">
        <span className="testimonial-date">{testimonial.date}</span>
        <button className="testimonial-helpful">
          Helpful <span>✓</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;