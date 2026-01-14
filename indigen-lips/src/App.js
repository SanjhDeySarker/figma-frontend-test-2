import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ProductsSection from './components/ProductsSection';
import TestimonialsSection from './components/TestimonialsSection';
import NewsSection from './components/NewsSection';
import TrendingSection from './components/TrendingSection';
import SaleBanner from './components/SaleBanner';
import Footer from './components/Footer';
import './styles/App.css';
import './styles/components.css';
import './styles/responsive.css';

function App() {
  const [cartCount, setCartCount] = useState(3);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection />
      <StorySection />
      <ProductsSection addToCart={addToCart} />
      <TestimonialsSection />
      <NewsSection />
      <TrendingSection />
      <SaleBanner />
      <Footer />
    </div>
  );
}

export default App;