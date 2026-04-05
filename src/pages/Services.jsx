import "./Services.css";

export default function Services() {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="services-container">
          <p className="services-tag">Services</p>
          <h1>Technical services built for business needs</h1>
          <p className="services-intro">
            We provide development, integrations and technical support for
            companies that want dependable digital systems.
          </p>
        </div>
      </section>

      <section className="services-list-section">
        <div className="services-container services-list">
          <div className="service-block">
            <h2>Website Creation</h2>
            <p>
              Modern company websites with clean design, responsive layout, and
              strong technical foundation.
            </p>
          </div>

          <div className="service-block">
            <h2>Front-End & Back-End Development</h2>
            <p>
              Custom web applications, internal tools, portals and dashboards
              with scalable architecture and maintainable code.
            </p>
          </div>

          <div className="service-block">
            <h2>CRM & ERP Support</h2>
            <p>
              Technical support, enhancements and integrations for Microsoft CRM
              and Finance & Operations environments.
            </p>
          </div>

          <div className="service-block">
            <h2>System Integrations</h2>
            <p>
              API integrations, process automation and connectivity between
              business platforms and external systems.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}