import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Contact | Ozan Varol - Get in Touch" },
  { name: "description", content: "Contact Ozan Varol for speaking engagements, book inquiries, or collaborations." },
];

export default function Contact() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">I'd love to hear from you. Let's start a conversation.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            <div className="contact-info">
              <h3 className="contact-info-title">Let's Connect</h3>
              <p className="contact-info-text">Whether you're interested in booking me for a speaking engagement, have a question about my books, or want to explore a collaboration, I'm here to help.</p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details"><h4>Email</h4><p><a href="mailto:hello@ozanvarol.com">hello@ozanvarol.com</a></p></div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">🎤</div>
                  <div className="contact-details"><h4>Speaking Inquiries</h4><p><a href="mailto:speaking@ozanvarol.com">speaking@ozanvarol.com</a></p></div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">📚</div>
                  <div className="contact-details"><h4>Book Inquiries</h4><p><a href="mailto:books@ozanvarol.com">books@ozanvarol.com</a></p></div>
                </div>
                <div className="contact-method">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-details">
                    <h4>Social Media</h4>
                    <div className="social-links">
                      <a href="https://twitter.com/ozanvarol" target="_blank" className="social-link">Twitter</a>
                      <a href="https://linkedin.com/in/ozanvarol" target="_blank" className="social-link">LinkedIn</a>
                      <a href="https://instagram.com/ozanvarol" target="_blank" className="social-link">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3 className="form-title">Send a Message</h3>
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select id="subject" name="subject" required>
                    <option value="">Select a topic</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="books">Book Inquiry</option>
                    <option value="interview">Interview Request</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea id="message" name="message" rows={6} required></textarea>
                </div>
                <button type="submit" className="btn-primary btn-large">Send Message &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h3 className="section-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">How can I book Ozan for a speaking event?</h4>
              <p className="faq-answer">For speaking inquiries, please email <a href="mailto:speaking@ozanvarol.com">speaking@ozanvarol.com</a> with details about your event, including date, location, audience size, and topic preferences. We'll get back to you within 48 hours.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">What topics does Ozan speak about?</h4>
              <p className="faq-answer">Ozan speaks on innovation, creativity, rocket science thinking, first principles thinking, and reimagining what's possible. Popular topics include "Think Like a Rocket Scientist" and "Awaken Your Genius."</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Are there upcoming events I can attend?</h4>
              <p className="faq-answer">Yes! Check out the <a href="/experiences">Experiences</a> page for information about upcoming workshops and events. You can also join the newsletter to stay updated.</p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">How do I request an interview or media inquiry?</h4>
              <p className="faq-answer">For media and interview requests, please use the contact form or email directly. Include your publication, audience, and proposed topic or questions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Let's Start a Conversation</h2>
          <p className="cta-text">Whether you have a question, an idea, or just want to say hello, I'd love to hear from you.</p>
          <div className="cta-buttons">
            <a href="mailto:hello@ozanvarol.com" className="btn-primary btn-large">Send an Email &rarr;</a>
            <a href="/newsletter" className="btn-secondary btn-large">Join Newsletter</a>
          </div>
        </div>
      </section>
    </>
  );
}