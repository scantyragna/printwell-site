'use client';

import { useEffect, useState } from "react";

const heroImages = [
  "/hero/face1.jpg",
  "/hero/face2.jpg",
  "/hero/face4.jpg",
];

export default function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const year = new Date().getFullYear();

  // mobile menu toggle
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  // slideshow
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">

          <a className="logo disassemble" href="#home">
            <img src="/image.png" alt="PrintWell logo" />
            <span className="titled">PRINTWELL</span>
            <h5 className="motto">TIME TO DOMINATE!!</h5>
          </a>

          <nav className="site-nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <a href="/contact" className="nav-link">Contact</a>

          </nav>

          <button
            className="menu-toggle"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* HERO */}
      <main id="home">
        <section className="hero">

          <div className="container hero-layout">

  <div className="hero-left">
    <h1 className="QPD">Quality Printing & Design</h1>

    <p className="quality-print">
      Flyers • Cards • Banners • Stickers • Posters — professionally crafted.
    </p>

    <div className="actions">
      <a href="#services" className="btn primary">View Services</a>
      <a href="/contact" className="btn">Contact Us</a>

    </div>
  </div>

  <div className="hero-right">
    {heroImages.map((img, index) => (
      <img
        key={img}
        src={img}
        className={`hero-slide ${index === current ? "show" : ""}`}
        alt="Print preview"
      />
    ))}
  </div>

</div>

        </section>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <p>THE BEST PLACE TO GET YOUR PRINTS & DESIGNS</p>
          <p>© {year} PrintWell. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
