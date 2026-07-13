import type { MetaFunction } from "@remix-run/node";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => [
  { title: "Newsletter | Ozan Varol - The One Newsletter You'll Actually Love" },
  { name: "description", content: "Join 50K+ readers who call it 'the email highlight of my week.' Weekly insights on innovation, creativity, and rethinking the status quo." },
];

export default function Newsletter() {
  return (
    <>
      <Navigation />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">The Weekly Spark</h1>
          <p className="page-subtitle">The one newsletter you'll actually love</p>
        </div>
      </section>

      <section className="newsletter-hero">
        <div className="container">
          <div className="newsletter-hero-container">
            <div className="newsletter-hero-content">
              <h2 className="newsletter-hero-title">Join 50K+ Readers</h2>
              <p className="newsletter-hero-text">Every week, I share insights on innovation, creativity, and rethinking what's possible. No fluff. No filler. Just ideas that can transform your thinking and your work.</p>
              <p className="newsletter-hero-text">My readers call it "the email highlight of my week." It takes 3 minutes to read, but the insights stick with you much longer.</p>
              <form className="newsletter-form-large" id="newsletterSubscribeForm">
                <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
                <button type="submit" className="btn-primary btn-large">Subscribe &rarr;</button>
              </form>
            </div>
            <div className="newsletter-hero-image">
              <img src="https://static.showit.co/800/shared/newsletter-mockup.png" alt="Newsletter Preview" />
            </div>
          </div>
        </div>
      </section>

      <section className="what-you-get">
        <div className="container">
          <h3 className="section-title">What You'll Get</h3>
          <div className="benefits-grid">
            <div className="benefit-card"><div className="benefit-icon">🚀</div><h4 className="benefit-title">Breakthrough Thinking Tools</h4><p className="benefit-description">Practical frameworks from rocket science and psychology to solve complex problems.</p></div>
            <div className="benefit-card"><div className="benefit-icon">💡</div><h4 className="benefit-title">Creative Insights</h4><p className="benefit-description">Stories and strategies to spark your originality and challenge assumptions.</p></div>
            <div className="benefit-card"><div className="benefit-icon">🎯</div><h4 className="benefit-title">Actionable Wisdom</h4><p className="benefit-description">Concrete ideas you can apply immediately to your work and life.</p></div>
            <div className="benefit-card"><div className="benefit-icon">🎧</div><h4 className="benefit-title">Exclusive Content</h4><p className="benefit-description">Audio trainings, early book excerpts, and behind-the-scenes insights.</p></div>
          </div>
        </div>
      </section>

      <section className="newsletter-testimonials">
        <div className="container">
          <h3 className="section-title">What Readers Are Saying</h3>
          <div className="testimonials-grid">
            <div className="testimonial-item"><p className="testimonial-text">"The highlight of my week. Ozan's insights always make me think differently."</p><p className="testimonial-author">— SUSAN CAIN</p></div>
            <div className="testimonial-item"><p className="testimonial-text">"Takes 3 minutes to read. Takes longer to shake. Worth every second."</p><p className="testimonial-author">— DAN PINK</p></div>
            <div className="testimonial-item"><p className="testimonial-text">"I've learned more from this newsletter than most books I've read."</p><p className="testimonial-author">— NIR EYAL</p></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Spark Your Thinking?</h2>
          <p className="cta-text">Join 50K+ readers who get my latest insights delivered straight to their inbox every week.</p>
          <form className="newsletter-form-cta" id="newsletterFormBottom">
            <input type="email" placeholder="Enter your email address" required className="newsletter-input" />
            <button type="submit" className="btn-primary btn-large">Subscribe Now &rarr;</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}