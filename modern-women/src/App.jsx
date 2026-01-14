// App.js
import React, { useState } from 'react';
import { FiMenu, FiX, FiStar, FiChevronRight, FiInstagram, FiFacebook, FiTwitter, FiShoppingBag } from 'react-icons/fi';
import { FaRegHeart, FaSearch, FaUser } from 'react-icons/fa';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  
  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} cartCount={cartCount} />
      <HeroSection />
      <StorySection />
      <ProductsSection />
      <TestimonialsSection />
      <NewsSection />
      <TrendingSection />
      <SaleBanner />
      <Footer />
    </div>
  );
}

// Header Component
function Header({ menuOpen, setMenuOpen, cartCount }) {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <span className="logo-icon">💄</span>
            <h1>INDIGEN<span>LIPS</span></h1>
          </div>
          
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#products">Lipsticks</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#news">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          
          <div className="nav-icons">
            <button className="icon-btn"><FaSearch /></button>
            <button className="icon-btn"><FaRegHeart /></button>
            <button className="icon-btn cart-btn">
              <FiShoppingBag />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </button>
            <button className="icon-btn"><FaUser /></button>
            <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
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
}

// Story Section with Founder
function StorySection() {
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
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80" alt="Founder Maureen" />
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
}

// Products Section
function ProductsSection() {
  const products = [
    {
      id: 1,
      name: "MATTE LIPSTICK - DARK SHADE",
      category: "Luxe Lips Collection",
      description: "1 STICK - 2.5ML / 0.08 OZ",
      price: 4.99,
      originalPrice: 8.99,
      rating: 4.8,
      badge: "BEST SELLER",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "MATTE LIPSTICK COLLECTION",
      category: "Complete Set",
      description: "12 luxurious matte shades",
      price: 250.00,
      originalPrice: 300.00,
      rating: 5.0,
      badge: "UGC FAVORITE",
      image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "MYSTIC LIPSTICK COLLECTION",
      category: "Spotlight Video",
      description: "Color-shifting technology",
      price: 250.00,
      originalPrice: 280.00,
      rating: 4.9,
      badge: "NEW",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "LIQUID MATTE LIP KIT",
      category: "Best Value",
      description: "6 shades + lip liner",
      price: 45.00,
      originalPrice: 65.00,
      rating: 4.7,
      badge: "LIMITED",
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];
  
  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Premium Formulas</h2>
          <h3 className="section-title">Best Selling Lipsticks</h3>
        </div>
        
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="products-footer">
          <button className="btn btn-outline">
            View All Products <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FiStar key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'} />
  ));
  
  return (
    <div className="product-card">
      <div className="product-badge">{product.badge}</div>
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="product-quick-view">Quick View</button>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h4 className="product-name">{product.name}</h4>
        <p className="product-description">{product.description}</p>
        
        <div className="product-rating">
          <div className="stars">{stars}</div>
          <span>{product.rating}</span>
        </div>
        
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        
        <button className="btn btn-add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      role: "Beauty Influencer",
      content: "The matte formula is incredible! It lasts through meals without drying my lips. The 'Rouge Power' shade is my new signature color.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Alex Chen",
      role: "Makeup Artist",
      content: "As a professional, I appreciate the pigment quality. These lipsticks blend beautifully and work across all skin tones in my client portfolio.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Isabella Rossi",
      role: "Long-time Customer",
      content: "I've tried countless lipsticks, but none wear as comfortably as Indigen Lips. The hydrating formula is perfect for my dry lips.",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      date: "3 days ago"
    }
  ];
  
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2 className="section-subtitle">Client Love</h2>
          <h3 className="section-title">Customer Reviews</h3>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <FiStar key={i} className={i < testimonial.rating ? 'star filled' : 'star'} />
  ));
  
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-author">
          <img src={testimonial.image} alt={testimonial.name} />
          <div>
            <h5>{testimonial.name}</h5>
            <p>{testimonial.role}</p>
          </div>
        </div>
        <div className="testimonial-rating">{stars}</div>
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
}

// News Section
function NewsSection() {
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
}

// Trending Section
function TrendingSection() {
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
              <button className="trending-button">Explore <FiChevronRight /></button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Sale Banner
function SaleBanner() {
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
}

// Footer
function Footer() {
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
              <a href="#"><FiInstagram /></a>
              <a href="#"><FiFacebook /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FaRegHeart /></a>
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
              <p><strong>Phone:</strong> +1 (555) 555-5555</p>
              <p><strong>Email:</strong> info@indigenlips.com</p>
              <p><strong>Address:</strong> 123 Beauty Ave, Suite 100<br />Los Angeles, CA 90210</p>
            </div>
            <div className="newsletter">
              <h5>Join Our Beauty Club</h5>
              <p>Get exclusive offers and new shade alerts</p>
              <div className="newsletter-input">
                <input type="email" placeholder="Your email address" />
                <button>→</button>
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
}

export default App;