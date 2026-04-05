import "./Home.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-label">Modern Software Services</p>
          <h1>
            Building modern websites,
            <br />
            web applications and
            <br />
            business integrations
          </h1>
          <p className="hero-text">
            We help companies build digital products, improve internal systems,
            and extend CRM & ERP platforms with reliable, scalable solutions.
          </p>
          <div className="hero-actions">
            <a href="/services" className="primary-btn">
              Explore Services
            </a>
            <a href="/contact" className="secondary-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="section-container two-column">
          <div>
            <p className="section-tag">Who We Are</p>
            <h2>A reliable technology partner for growing businesses</h2>
          </div>
          <div>
            <p>
              Devodora Systems delivers custom software development with focus
              on clean implementation, business value, and long-term support.
              We work on websites, web applications, integrations, and Microsoft
              business platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="cards-section">
        <div className="section-container">
          <p className="section-tag">Core Services</p>
          <h2 className="section-title">What we do</h2>

          <div className="service-grid">
            <div className="service-card">
              <h3>Custom Web Development</h3>
              <p>
                Corporate websites, portals, admin panels, dashboards and
                internal business tools built with modern technologies.
              </p>
            </div>

            <div className="service-card">
              <h3>CRM & ERP Integrations</h3>
              <p>
                Extensions, integrations and improvements for Microsoft Dynamics
                CRM and F&O, with APIs and business workflow automation.
              </p>
            </div>

            <div className="service-card">
              <h3>Support & Maintenance</h3>
              <p>
                Ongoing support, fixes, enhancements and technical maintenance
                for systems that need dependable day-to-day operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            <div className="stat-box">
              <h3>Modern</h3>
              <p>Clean frontend and backend development for scalable systems.</p>
            </div>
            <div className="stat-box">
              <h3>Business-Focused</h3>
              <p>Solutions aligned with real operational and business needs.</p>
            </div>
            <div className="stat-box">
              <h3>Reliable</h3>
              <p>Consistent delivery, support and practical technical help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="section-container cta-box">
          <div>
            <p className="section-tag">Let&apos;s Work Together</p>
            <h2>Need a website, a custom app, or system support?</h2>
            <p>
              We can help you build, improve and support your digital systems.
            </p>
          </div>
          <a href="/contact" className="primary-btn">
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}