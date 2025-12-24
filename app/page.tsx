'use client';

import { useEffect, useState } from "react";

const heroImages = [
  "/hero/face1.jpg",
  "/hero/face2.jpg",
  "/hero/face4.jpg",
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const year = new Date().getFullYear();

  // Sync menu state with body class for CSS mobile menu
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

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
            <a href="#contact" className="nav-link">Contact</a>
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
          {/* Hero image grid */}
          <div className="hero-bg">
            {heroImages.map((img, index) => (
              <div
                key={index}
                className="hero-bg-item"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>

          {/* Hero content */}
          <div className="container hero-inner">
            
           

            <div className="actions">
              <a href="#services" className="btn primary">View Services</a>
              <a href="#contact" className="btn">Contact Us</a>
              
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
