import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>Ceto</h4>
          <p>Building simpler products with joyful design.</p>
        </div>
        <div className="footer-right">
          <nav>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#help">Help</a>
          </nav>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ceto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}