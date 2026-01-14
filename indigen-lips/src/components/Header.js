import React from 'react';

const Header = ({ cartCount, menuOpen, setMenuOpen }) => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">💄</span>
            <h1>INDIGEN<span>LIPS</span></h1>
          </div>
          
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a></li>
            <li><a href="#products" onClick={() => setMenuOpen(false)}>Lipsticks</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
            <li><a href="#news" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
          
          <div className="nav-icons">
            <button className="icon-btn" aria-label="Search">🔍</button>
            <button className="icon-btn" aria-label="Wishlist">❤️</button>
            <button className="icon-btn cart-btn" aria-label="Cart">
              🛍️
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button className="icon-btn" aria-label="Account">👤</button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;