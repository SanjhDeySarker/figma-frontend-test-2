export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Spotlight />
      <Discount />
      <OurStory />
      <Blogs />
      <Products />
      <Footer />
    </>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Header() {
  return (
    <header>
      <div className="container nav">
        <strong>MODERN WOMEN</strong>

        <input
          className="search"
          type="text"
          placeholder="Search products..."
        />

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Deals</a></li>
          <li><a href="#">Blogs</a></li>
        </ul>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <h1>Where Every Shade Tells a Story</h1>
          <p>Bold colors crafted for confidence and creativity.</p>
          <a className="btn" href="#">Shop Now</a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1600180758895-2c9c0b50b38c?auto=format&fit=crop&w=1200&q=80"
          alt="Lipstick"
        />
      </div>
    </section>
  );
}

function Spotlight() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Spotlight of the Month</h2>
        <div className="cards">
          <Card img="https://images.unsplash.com/photo-1544005313-94ddf0286df2" text="Influencer" />
          <Card img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" text="Makeup" />
          <Card img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" text="Customer" />
        </div>
      </div>
    </section>
  );
}

function Discount() {
  return (
    <section className="section">
      <div className="container discount">
        <div>
          <h2>50% OFF Luxe Lipsticks</h2>
          <p>Limited time offer</p>
          <a className="btn" href="#">Shop Sale</a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1585386959984-a4155228c6a0"
          alt="Sale"
        />
      </div>
    </section>
  );
}

function OurStory() {
  return (
    <section className="section">
      <div className="container story">
        <img
          src="https://images.unsplash.com/photo-1603415526960-f7e0328b7a4b"
          alt="Founder"
        />
        <div>
          <small>BEAUTY THAT SPEAKS CONFIDENCE</small>
          <h2>Our Story</h2>
          <p>
            Modern Women is built on confidence, creativity, and bold expression.
            Every shade is crafted with purpose and passion.
          </p>
          <strong>Founder — Salma B</strong>
        </div>
      </div>
    </section>
  );
}

function Blogs() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Latest News & Blogs</h2>
        <div className="blogs">
          <Blog img="https://images.unsplash.com/photo-1512496015851-a90fb38ba796" />
          <Blog img="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" />
          <Blog img="https://images.unsplash.com/photo-1596462502278-27bfdc403348" />
          <Blog img="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" />
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    "https://images.unsplash.com/photo-1585386959984-a4155228c6a0",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348",
    "https://images.unsplash.com/photo-1610992015734-19b0c97a6b1e",
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9"
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Luxe Lips Collection</h2>
        <div className="products">
          {items.map((img, i) => (
            <div className="product" key={i}>
              <img src={img} alt="Lipstick" />
              <p>Luxury Shade</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>About</div>
        <div>Links</div>
        <div>Categories</div>
        <div>Contact</div>
      </div>
    </footer>
  );
}

function Card({ img, text }) {
  return (
    <div className="card">
      <img src={img} alt={text} />
      <p>{text}</p>
    </div>
  );
}

function Blog({ img }) {
  return (
    <div className="blog">
      <img src={img} alt="Blog" />
    </div>
  );
}
