'use client';

import { useEffect, useState } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";

const heroImages = [
  "/hero/face1.jpg",
  "/hero/face2.jpg",
  "/hero/face4.jpg",
];

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const year = new Date().getFullYear();

  // slideshow
  useEffect(() => {
    const t = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // mobile menu toggle
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo disassemble" href="/">
            <img src="/image.png" alt="PrintWell logo" />
            <span className="titled">PRINTWELL</span>
            <h5 className="motto">TIME TO DOMINATE!!</h5>
          </a>

          <nav className="site-nav">
            <a href="/" className="nav-link">Home</a>
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

      {/* HERO / CONTACT */}
      <main id="contact" className="hero">
        <div className="container hero-layout">

          {/* LEFT SIDE — CONTACT */}
          <div className="hero-left">
            <h1 className="QPD">Contact PrintWell</h1>
            <p className="quality-print">Reach out to us — we respond fast!</p>

            <div className="contact-grid">
              <div className="contact-box">
                <h3><FaEnvelope /> Email</h3>
                <p>printwellinfos@gmail.com</p>
                <a
  className="contact-btn email"
  href="mailto:printwellinfos@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20PrintWell!"
>
  Send Email
</a>

              </div>

              <div className="contact-box">
                <h3><FaWhatsapp /> WhatsApp</h3>
                <p>+233 556 612 684</p>
                <a
                  className="contact-btn whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/233556612684?text=Hello%20PrintWell!%20I%20need%20printing%20services"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="contact-box">
                <h3><FaPhone /> Phone</h3>
                <p>+233 556 612 684</p>
                <a className="contact-btn phone" href="tel:+233556612684">
                  Call Now
                </a>
              </div>

              <div className="contact-box">
                <h3>📍 Address</h3>
                <p>Patasi, Kumasi<br />Ashanti Region</p>
              </div>
            </div>

            {/* SEND MESSAGE FORM */}
            <div className="quote-box">
              <h3>Send us a message</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                <input type="text" placeholder="Your Name" required />
                <input type="text" placeholder="Phone or Email" required />
                <textarea placeholder="Your message…" rows={4} required />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>

          {/* RIGHT SIDE — SLIDESHOW */}
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
