function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.6",
        color: "#111",
        backgroundColor: "#fff",
      }}
    >
      <header style={{ marginBottom: "60px" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "10px" }}>
          Devodora Systems
        </h1>
        <h2 style={{ fontSize: "24px", fontWeight: "normal", marginBottom: "20px" }}>
          Building and integrating modern business systems
        </h2>
        <p style={{ fontSize: "18px", maxWidth: "700px" }}>
          We help companies build custom web applications and extend their CRM
          and ERP systems with reliable, scalable solutions.
        </p>
      </header>

      <section style={{ marginBottom: "50px" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>Services</h3>

        <div style={{ marginBottom: "25px" }}>
          <h4 style={{ fontSize: "22px", marginBottom: "10px" }}>
            Custom Web Applications
          </h4>
          <p>
            We build modern, scalable web applications tailored to your business
            needs using React and modern backend technologies.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4 style={{ fontSize: "22px", marginBottom: "10px" }}>
            CRM & ERP Integrations
          </h4>
          <p>
            We integrate and extend systems such as Microsoft Dynamics,
            connecting tools and automating workflows.
          </p>
        </div>

        <div style={{ marginBottom: "25px" }}>
          <h4 style={{ fontSize: "22px", marginBottom: "10px" }}>
            Support & Maintenance
          </h4>
          <p>
            We provide ongoing support, improvements, and troubleshooting to
            keep your systems running smoothly.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>Why Us</h3>
        <ul style={{ paddingLeft: "20px" }}>
          <li>TEST</li>
          <li>Fast and reliable delivery</li>
          <li>Cost-effective compared to local markets</li>
          <li>Experience with business-critical systems</li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: "32px", marginBottom: "20px" }}>Contact</h3>
        <p>Let’s discuss your project.</p>
        <p>Email: contact@devodora.com</p>
      </section>
    </div>
  );
}

export default App;