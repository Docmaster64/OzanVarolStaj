import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";

export const meta: MetaFunction = () => [
  { title: "About | Ozan Varol - Rocket Scientist Turned Bestselling Author" },
  { name: "description", content: "Learn about Ozan Varol's journey from rocket scientist to bestselling author. Discover how he built a career around letting go and following the energy toward what's next." },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="About Ozan Varol"
        subtitle="Rocket scientist turned bestselling author and keynote speaker"
      />

      <section className="about-hero">
        <div className="container">
          <div className="about-hero-container">
            <div className="about-hero-image">
              <img src="https://static.showit.co/400/vjojJALxToO9k6fCfUVsJg/260793/ozan_1503.jpg" alt="Ozan Varol" />
            </div>
            <div className="about-hero-content">
              <h2 className="about-name">Hey, I'm Ozan</h2>
              <h3 className="about-tagline">I'M A ROCKET SCIENTIST TURNED BESTSELLING AUTHOR</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bio-section">
        <div className="container">
          <div className="bio-content">
            <p className="bio-text">
              I've spent my career building things and then walking away from them — rocket science, law, a tenured professorship — each time following the energy toward what was next.
            </p>
            <p className="bio-text">
              Now I write, speak, and teach about the moments that define us: the leaps we almost don't take, the things we hold onto too long, and the breakthroughs that only happen when we stop playing it safe.
            </p>
            <p className="bio-text">
              My books have been translated into 25+ languages and selected by Adam Grant as his #1 leadership book of the year. I've delivered 100+ keynotes to organizations like Microsoft, Google X, Salesforce, Goldman Sachs, and the U.S. Department of State.
            </p>
          </div>
        </div>
      </section>

      <section className="about-quote">
        <div className="container">
          <blockquote className="quote-large">
            "Most people hold on too long. I've built my life around letting go."
          </blockquote>
        </div>
      </section>

      <section className="journey-section">
        <div className="container">
          <h3 className="section-title">My Journey</h3>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-marker"></div>
              <div className="journey-content">
                <h4 className="journey-title">Rocket Scientist</h4>
                <p className="journey-description">Started my career as a rocket scientist, working on cutting-edge space missions and learning the power of first principles thinking.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker"></div>
              <div className="journey-content">
                <h4 className="journey-title">Law Professor</h4>
                <p className="journey-description">Became a law professor, teaching future lawyers how to think critically and argue persuasively.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker"></div>
              <div className="journey-content">
                <h4 className="journey-title">Bestselling Author</h4>
                <p className="journey-description">Wrote "Think Like a Rocket Scientist" which became a Wall Street Journal bestseller and changed how people approach problem-solving.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-marker"></div>
              <div className="journey-content">
                <h4 className="journey-title">Keynote Speaker</h4>
                <p className="journey-description">Now speak to organizations worldwide, sharing insights on creativity, innovation, and reimagining what's possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item"><div className="stat-number">25+</div><div className="stat-label">Languages</div><p className="stat-description">My books have been translated into 25+ languages worldwide</p></div>
            <div className="stat-item"><div className="stat-number">100+</div><div className="stat-label">Keynotes</div><p className="stat-description">Delivered keynotes to top organizations globally</p></div>
            <div className="stat-item"><div className="stat-number">50K+</div><div className="stat-label">Newsletter Readers</div><p className="stat-description">Join thousands of weekly readers</p></div>
            <div className="stat-item"><div className="stat-number">2</div><div className="stat-label">Bestselling Books</div><p className="stat-description">Author of multiple Wall Street Journal bestsellers</p></div>
          </div>
        </div>
      </section>

      <section className="philosophy-section">
        <div className="container">
          <h3 className="section-title">My Philosophy</h3>
          <div className="philosophy-content">
            <p className="philosophy-text">I believe that we all have untapped potential waiting to be unleashed. The problem is that we're taught to fit in, follow the rules, and play it safe.</p>
            <p className="philosophy-text">My work is about helping people break free from these constraints and rediscover their unique gifts. It's about building a life around what energizes you, not what you think you should do.</p>
            <p className="philosophy-text">Whether through my books, keynotes, or workshops, my mission is the same: to help you reimagine what's possible and take the leap toward your own awakening.</p>
          </div>
        </div>
      </section>

      <section className="clients-section">
        <div className="container">
          <h3 className="section-title">Organizations I've Worked With</h3>
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

      <CtaSection
        title="Let's Connect"
        text="I'd love to hear from you. Whether you're interested in booking me for a speaking engagement, have a question about my books, or just want to say hello."
        buttons={[
          { label: "Get in Touch", href: "/contact", variant: "primary" },
          { label: "Book for Speaking", href: "/speaking", variant: "secondary" },
        ]}
      />
    </>
  );
}