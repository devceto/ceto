import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="brand">
          <a href="/">Ceto</a>
        </div>

        <button
          className={`hamburger ${open ? "open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>  
          <a href="#features" onClick={() => setOpen(false)}>
            Features
          </a>
          <a href="#pricing" onClick={() => setOpen(false)}>
            Pricing
          </a>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#contact" className="cta-link" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}