import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";
import PraiseCard from "../components/PraiseCard";
import QuoteIcon from "../components/QuoteIcon";
import { rocketScientistPraise } from "../data/praise";

export const meta: MetaFunction = () => [
  { title: "Speaking | Ozan Varol - Keynote Speaker" },
  { name: "description", content: "Book Ozan Varol for your next event. World-renowned keynote speaker on innovation, creativity, and rocket science thinking." },
];

export default function Speaking() {
  return (
    <>
      <PageHeader
        title="Keynote Speaking"
        subtitle="Transform your event with insights from a former rocket scientist"
      />

      <section className="speaking-hero">
        <div className="speaking-video-background">
          <video autoPlay muted loop playsInline>
            <source src="https://static.showit.co/file/WQOtPRx3cWRyVNQq2q-txA/260793/speakingclip.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <div className="speaking-hero-container">
            <div className="speaking-hero-content">
              <span className="speaking-badge">KEYNOTE SPEAKER</span>
              <h2 className="speaking-title">The Best Keynote Speaker</h2>
              <p className="speaking-subtitle">Among the top 3 speakers I've ever encountered in my life</p>
              <p className="speaking-author">— Heather Hoerle</p>
              <div className="speaking-testimonial-main">
                <div className="testimonial-icon-large">
                  <QuoteIcon />
                </div>
                <p className="testimonial-main-text">AMONG THE TOP 3 SPEAKERS I'VE EVER ENCOUNTERED IN MY LIFE.</p>
                <p className="testimonial-main-author">—KATHERINE COHEN</p>
              </div>
              <a href="#contact" className="btn-primary btn-large">Book Ozan for Your Event &rarr;</a>
            </div>
            <div className="speaking-hero-image">
              <img src="https://static.showit.co/800/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png" alt="Ozan Varol Speaking" />
            </div>
          </div>
        </div>
      </section>

      <section className="topics-section">
        <div className="container">
          <h3 className="section-title">Speaking Topics</h3>
          <div className="topics-grid">
            <div className="topic-card">
              <div className="topic-icon">🚀</div>
              <h4 className="topic-title">Think Like a Rocket Scientist</h4>
              <p className="topic-description">Learn the proven mindset and methods used by NASA's rocket scientists to solve complex problems, make better decisions, and achieve seemingly impossible goals.</p>
              <ul className="topic-highlights">
                <li>First principles thinking</li>
                <li>Mental time travel</li>
                <li>Launch iterations</li>
                <li>Systems thinking</li>
              </ul>
            </div>
            <div className="topic-card">
              <div className="topic-icon">💡</div>
              <h4 className="topic-title">Awaken Your Genius</h4>
              <p className="topic-description">Discover how to unlock your originality and unleash your unique talents in a world that constantly tells you to fit in and follow the rules.</p>
              <ul className="topic-highlights">
                <li>Unlearn limiting habits</li>
                <li>Question assumptions</li>
                <li>Develop beginner's mindset</li>
                <li>Turn obstacles into opportunities</li>
              </ul>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🎯</div>
              <h4 className="topic-title">The Art of Letting Go</h4>
              <p className="topic-description">Learn why holding on too long is the biggest barrier to success, and discover how to build a career and life around what energizes you.</p>
              <ul className="topic-highlights">
                <li>Recognize when to pivot</li>
                <li>Follow your energy</li>
                <li>Embrace calculated risks</li>
                <li>Build resilience</li>
              </ul>
            </div>
            <div className="topic-card">
              <div className="topic-icon">🌟</div>
              <h4 className="topic-title">Innovation and Creativity</h4>
              <p className="topic-description">Master the principles of creative thinking and innovation that drive breakthrough results in business and life.</p>
              <ul className="topic-highlights">
                <li>Breakthrough thinking</li>
                <li>Challenge the status quo</li>
                <li>Foster innovation</li>
                <li>Create lasting change</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="speaking-testimonials">
        <div className="container">
          <h3 className="section-title">What People Are Saying</h3>
          <div className="testimonials-grid">
            {rocketScientistPraise
              .filter((praise) => praise.author !== "— ADAM GRANT")
              .map((praise) => (
                <PraiseCard key={praise.author} {...praise} />
              ))}
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container">
          <h3 className="section-title">Trusted by Leading Organizations</h3>
          <div className="clients-logos">
            <div className="client-logo">Microsoft</div>
            <div className="client-logo">Google X</div>
            <div className="client-logo">Salesforce</div>
            <div className="client-logo">Goldman Sachs</div>
            <div className="client-logo">U.S. Department of State</div>
            <div className="client-logo">NASA</div>
            <div className="client-logo">Tesla</div>
            <div className="client-logo">Amazon</div>
          </div>
        </div>
      </section>

      <section className="formats-section">
        <div className="container">
          <h3 className="section-title">Speaking Formats</h3>
          <div className="formats-grid">
            <div className="format-card"><div className="format-icon">🎤</div><h4 className="format-title">Keynote Addresses</h4><p className="format-description">Inspiring 45-60 minute keynote presentations for conferences and large audiences.</p></div>
            <div className="format-card"><div className="format-icon">🏢</div><h4 className="format-title">Corporate Events</h4><p className="format-description">Customized sessions for corporate retreats, leadership summits, and team building events.</p></div>
            <div className="format-card"><div className="format-icon">🎓</div><h4 className="format-title">Workshops</h4><p className="format-description">Interactive half-day or full-day workshops for hands-on learning and skill development.</p></div>
            <div className="format-card"><div className="format-icon">💻</div><h4 className="format-title">Virtual Events</h4><p className="format-description">Engaging virtual presentations and webinars for remote audiences worldwide.</p></div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Book Ozan for Your Event?"
        text="Join 100+ organizations that have transformed their events with Ozan's powerful keynote presentations."
        buttons={[
          { label: "Check Availability", href: "mailto:speaking@ozanvarol.com", variant: "primary" },
          { label: "Download Speaker Kit", href: "mailto:speaking@ozanvarol.com", variant: "secondary" },
        ]}
      />
    </>
  );
}