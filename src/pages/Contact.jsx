import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <p className="contact-tag">Contact</p>
          <h1>Let&apos;s discuss your project</h1>
          <p className="contact-intro">
            Reach out to discuss a website, a custom application, system
            integration, or ongoing technical support.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-container contact-grid">
          <div className="contact-card">
            <h2>Contact Information</h2>
            <p>Email: hello@devodora.systems</p>
            <p>Location: Greece</p>
          </div>

          <div className="contact-card">
            <h2>Start a Conversation</h2>
            <form className="contact-form">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email" />
              <textarea rows="6" placeholder="Tell us about your project"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}