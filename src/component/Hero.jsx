import { Link } from "react-router-dom";
import "../style/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="tag">🚀 Smart CRM Platform</span>

        <h1>
          Manage Your <span>Leads</span>
          <br />
          Faster & Smarter
        </h1>

        <p>
          LeadDesk helps businesses manage leads, track customers,
          automate follow-ups, and increase sales from one powerful dashboard.
        </p>

        <div className="hero-btns">
  <Link to="/get-started" className="primary-btn">
    Get Started →
  </Link>
  </div>
      </div>
    </section>
  );
}

export default Hero;