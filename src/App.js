import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <section className="hero">
          <h1>Welcome to Ceto</h1>
          <p>
            This is a simple React site with a responsive navbar and footer. Use
            it as a starting point and customize it for your project.
          </p>
          <div className="cta">
            <button className="btn primary">Get Started</button>
            <button className="btn outline">Learn More</button>
          </div>
        </section>

        <section className="features" id="features">
          <div className="feature-card">
            <h3>Feature One</h3>
            <p>Short description of feature one.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Two</h3>
            <p>Short description of feature two.</p>
          </div>
          <div className="feature-card">
            <h3>Feature Three</h3>
            <p>Short description of feature three.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}