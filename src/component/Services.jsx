import "../style/Services.css";

function Services() {
  return (
    <section className="services">

      <div className="service-left">

        <span className="service-tag">
          🚀 What We Offer
        </span>

        <h1>
          Our <span>Services</span>
        </h1>

        <p>
          LeadDesk provides everything you need to manage leads,
          improve customer relationships, and grow your business
          with a powerful CRM platform.
        </p>

      <div className="hero-btns">
  <a
    href="https://digitalheroesco.com/services/web-development/"
    target="_blank"
    rel="noopener noreferrer"
    className="service-btn"
  >
    Explore Services
  </a>
</div>

      </div>

      <div className="service-right">

        <div className="service-card">
          <div className="icon">👥</div>
          <h3>Lead Management</h3>
          <p>
            Organize and track all your customer leads from one place.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📞</div>
          <h3>Follow-up Tracking</h3>
          <p>
            Schedule reminders and never miss an important follow-up.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">📊</div>
          <h3>Analytics</h3>
          <p>
            Monitor sales performance with detailed reports.
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🤝</div>
          <h3>Team Collaboration</h3>
          <p>
            Assign leads and work together with your sales team.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;