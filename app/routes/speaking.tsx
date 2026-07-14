import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Speaking | Ozan Varol - Keynote Speaker" },
  { name: "description", content: "Book Ozan Varol for your next event. World-renowned keynote speaker on innovation, creativity, and rocket science thinking." },
];

export default function Speaking() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Keynote Speaking</h1>
          <p className="page-subtitle">Transform your event with insights from a former rocket scientist</p>
        </div>
      </section>

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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
                  </svg>
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
            <div className="testimonial-card-large">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
                </svg>
              </div>
              <p className="testimonial-text-large">When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero—which means you need Ozan Varol.</p>
              <p className="testimonial-author-large">— DAN PINK</p>
              <p className="testimonial-role">Bestselling author of <i>Bittersweet and Quiet</i></p>
            </div>
            <div className="testimonial-card-large">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
                </svg>
              </div>
              <p className="testimonial-text-large">If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan Varol.</p>
              <p className="testimonial-author-large">— NIR EYAL</p>
              <p className="testimonial-role">New York Times-bestselling author of <i>Hooked and Indistractable</i></p>
            </div>
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

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Book Ozan for Your Event?</h2>
          <p className="cta-text">Join 100+ organizations that have transformed their events with Ozan's powerful keynote presentations.</p>
          <div className="cta-buttons">
            <a href="mailto:speaking@ozanvarol.com" className="btn-primary btn-large">Check Availability &rarr;</a>
            <a href="mailto:speaking@ozanvarol.com" className="btn-secondary btn-large">Download Speaker Kit</a>
          </div>
        </div>
      </section>
    </>
  );
}