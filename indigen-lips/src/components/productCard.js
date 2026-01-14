import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>★</span>
    ));
  };

  const handleAddToCart = () => {
    addToCart();
  };

  return (
    <div className="product-card">
      <div className="product-badge">{product.badge}</div>
      <div className="product-image">
        <img src={product.image} alt={product.name} loading="lazy" />
        <button className="product-quick-view">Quick View</button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <div className="stars">{renderStars()}</div>
          <span>{product.rating}</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button className="btn btn-add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;