import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Home | #1 Bestselling Author, Keynote Speaker & Expert on Innovation & Creativity" },
  { name: "description", content: "Ozan Varol is a former rocket scientist turned #1 bestselling author and a world-renowned keynote speaker. Unlock strategies for sparking creativity and reimagining the status quo." },
];

export default function Index() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="ozan">OZAN</span>
              <span className="varol">VAROL</span>
            </h1>
            <h2 className="hero-sub">The One Newsletter You'll <span className="actually">Actually</span> Love</h2>
            <p className="hero-join"><b>Join 50K+ readers who call it "the email highlight of my week."</b></p>
            <p className="hero-tag">Takes 3 minutes to read. Takes longer to shake.</p>
            <div className="hero-divider"></div>
            <div className="hero-form">
              <script async data-uid="9ae9a39668" src="https://outatime-llc.ck.page/9ae9a39668/index.js"></script>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://static.showit.co/800/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png" alt="Ozan Varol" />
          </div>
        </div>
      </section>

      {/* Press Logos Section */}
      <section className="press-logos-section">
        <div className="press-container">
          <div className="press-logos">
            <div className="press-logo"><img src="https://static.showit.co/200/RuRBwNDmTdueZgR42rHJNg/260793/wsj-logo.png" alt="WSJ" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/PQtYbaDHT6ui7P67lsRdAA/260793/time-logo.png" alt="TIME" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/pWDpYRR4RmO3Nk1RfL-3fQ/260793/fast-company-2.jpg" alt="Fast Company" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/oY03gf4VQ5mQeqUwAyEJag/260793/cnn-logo.png" alt="CNN" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/uTC-oOlySYeF6HDatCuA-w/260793/slate-logo.png" alt="Slate" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/FQQRs84MRB2TEptVxwLvGw/260793/bbc-logo.png" alt="BBC" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/Io-sD5YfRRGFz_pZWFnnxA/260793/the-washington-post-logo.png" alt="Washington Post" /></div>
            <div className="press-logo"><img src="https://static.showit.co/200/cxHse0WKRe6mfy1thT7vIQ/260793/newsweek-logo.png" alt="Newsweek" /></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-image">
            <div className="about-gallery">
              <img src="https://static.showit.co/400/vjojJALxToO9k6fCfUVsJg/260793/ozan_1503.jpg" alt="Ozan Varol" />
            </div>
          </div>
          <div className="about-content">
            <h1 className="about-title">Hey, I'm Ozan</h1>
            <h2 className="about-subtitle">I'M A ROCKET SCIENTIST TURNED BESTSELLING AUTHOR</h2>
            <p className="about-text">
              I've spent my career building things and then walking away from them — rocket science, law, a tenured professorship — each time following the energy toward what was next.
            </p>
            <p className="about-text">
              Now I write, speak, and teach about the moments that define us: the leaps we almost don't take, the things we hold onto too long, and the breakthroughs that only happen when we stop playing it safe.
            </p>
            <p className="about-text">
              My books have been translated into 25+ languages and selected by Adam Grant as his #1 leadership book of the year. I've delivered 100+ keynotes to organizations like Microsoft, Google X, Salesforce, Goldman Sachs, and the U.S. Department of State.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-container">
          <h3 className="quote-text">Most people hold on too long. I've built my life around letting go.</h3>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="marquee">
        <div className="marquee-content">
          <div className="marquee-item">Join 50K+ Readers</div>
          <div className="marquee-item">Weekly Newsletter</div>
          <div className="marquee-item">Bestselling Author</div>
          <div className="marquee-item">Keynote Speaker</div>
          <div className="marquee-item">Former Rocket Scientist</div>
        </div>
      </section>

      {/* Audio Training Section */}
      <section className="audio">
        <div className="audio-container">
          <div className="audio-image">
            <img src="https://static.showit.co/800/3SWKdhu6TuW85ECqrEiGXg/shared/phone-earbuds.png" alt="Audio Training" className="audio-main" />
            <img src="https://static.showit.co/400/KMkLRjdLT9uB6bN5Xe_NgQ/260793/ozan_audio_training_4.png" alt="Training" className="audio-overlay-1" />
            <img src="https://static.showit.co/400/Zz4JnRI7TgO440xGw0eRbA/shared/podcastblank.png" alt="Podcast" className="audio-overlay-2" />
            <img src="https://static.showit.co/file/ENoNJjXgQzmN5-5ugA_ClQ/260793/audio.gif" alt="Audio" className="audio-gif" />
          </div>
          <div className="audio-content">
            <h3 className="audio-title">Get A Free Audio Training</h3>
            <p className="audio-description">Learn 3 simple strategies to make giant leaps in your life and work.</p>
            <div className="audio-cta">
              <a href="/newsletter" className="btn-primary">Download Now &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <h2 className="mission-title">The next chapter starts when you close this one.</h2>
          <p className="mission-text">
            Every ending is a beginning in disguise. The moment you let go of what's familiar—whether it's a job, a relationship, or an old version of yourself—you create space for something new to emerge.
          </p>
          <p className="mission-text">
            This is the art of strategic surrender. It's not about giving up; it's about giving way to what's trying to happen. The most successful people aren't those who hold on the tightest, but those who know when to release.
          </p>
          <p className="mission-text">
            I help people and organizations make this transition—from the known to the unknown, from the comfortable to the transformative. Because the best view comes after the hardest climb.
          </p>
        </div>
      </section>

      {/* Speaking Section */}
      <section className="speaking">
        <div className="speaking-video-background">
          <video autoPlay muted loop playsInline>
            <source src="https://static.showit.co/file/WQOtPRx3cWRyVNQq2q-txA/260793/speakingclip.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="speaking-container">
          <div className="speaking-content">
            <h3 className="speaking-title">KEYNOTE SPEAKING</h3>
            <div className="speaking-badge">
              <h4 className="speaking-badge-title">the best keynote speaker.</h4>
              <p className="speaking-badge-author">— Heather Hoerle</p>
            </div>
            <div className="speaking-testimonial">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
                </svg>
              </div>
              <div className="testimonial-content">
                <h4 className="testimonial-text">AMONG THE TOP 3 SPEAKERS I'VE EVER ENCOUNTERED IN MY LIFE.</h4>
                <p className="testimonial-author">—KATHERINE COHEN</p>
              </div>
            </div>
            <a href="/speaking" className="btn-link">learn more &rarr;</a>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="book">
        <div className="book-container">
          <div className="book-image">
            <img src="https://static.showit.co/800/U9qXHFfiSBic8gCLv49PnQ/260793/awakenyourgenius_3d-1.png" alt="Awaken Your Genius" />
          </div>
          <div className="book-content">
            <h3 className="book-label">my latest book</h3>
            <h2 className="book-title">Awaken Your Genius</h2>
            <p className="book-description">
              From the acclaimed author of <i>Think Like a Rocket Scientist</i> comes a simple guide to unlock your originality and unleash your unique talents.
            </p>
            <div className="book-buttons">
              <a href="https://geni.us/6uDnAm" target="_blank" className="btn-primary">order now &rarr;</a>
              <a href="/awaken" className="btn-secondary">learn more &rarr;</a>
            </div>
            <div className="book-praise">
              <div className="praise-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
                </svg>
              </div>
              <div className="praise-content">
                <h4 className="praise-label">PRAISE FOR</h4>
                <h5 className="praise-book">Awaken Your Genius:</h5>
                <p className="praise-text">Ozan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of.</p>
                <p className="praise-author">— ADAM GRANT</p>
                <p className="praise-title">New York Times bestselling author of ORIGINALS and GIVE AND TAKE, and host of the TED podcast WorkLife</p>
              </div>
              <div className="praise-badge">
                <img src="https://static.showit.co/200/J-w35fhaQKGqr4HdnlyAug/260793/adam-grant-photo.png" alt="Adam Grant" className="praise-photo" />
                <div className="badge-content">
                  <span className="badge-source">Wall Street Journal</span>
                  <span className="badge-type">Best Seller</span>
                  <span className="badge-rank">#3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <div className="blog-container">
          <div className="blog-content">
            <a href="/blog" className="blog-label">recently on the blog:</a>
            <a href="https://ozanvarol.com/a-trap-disguised-as-wisdom/" target="_blank" className="blog-title">A Trap Disguised as Wisdom</a>
            <div className="blog-arrow">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 22.07">
                <path d="M37.85 10.61 28 .19a.63.63 0 0 0-.87 0 .65.65 0 0 0 0 .87L36 10.42H.61a.61.61 0 0 0 0 1.22H36L27.14 21a.63.63 0 0 0 0 .87.62.62 0 0 0 .87 0l9.81-10.42a.66.66 0 0 0 0-.84Z" />
              </svg>
            </div>
          </div>
          <div className="blog-image">
            <img src="https://static.showit.co/800/pqeYF6WVQXyweWNacR2ZwA/260793/52175273144_209943c6ea_o.jpg" alt="Ozan Varol speaker" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonial-item">
            <div className="testimonial-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
              </svg>
            </div>
            <div className="testimonial-image">
              <img src="https://static.showit.co/200/O_SM7e_h_aqmetcOFPjDVg/260793/image_4.png" alt="Testimonial" />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-text">Ozan Varol is always smart and always fascinating.</h3>
              <p className="testimonial-author">—SUSAN CAIN</p>
              <p className="testimonial-title">New York Times bestselling author of QUIET and BITTERSWEET</p>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
              </svg>
            </div>
            <div className="testimonial-image">
              <img src="https://static.showit.co/200/hMVCmqe8ScKxvOWkrE1bxg/260793/dan_pink.jpg" alt="Dan Pink" />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-text">When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero—which means you need Ozan Varol.</h3>
              <p className="testimonial-author">— DAN PINK</p>
              <p className="testimonial-title">Bestselling author of <i>Bittersweet and Quiet</i></p>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="testimonial-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" />
              </svg>
            </div>
            <div className="testimonial-image">
              <img src="https://static.showit.co/200/SrQb7ryXRy6FUcnmZiSfBg/260793/nireyal_150-scaled.jpg" alt="Nir Eyal" />
            </div>
            <div className="testimonial-content">
              <h3 className="testimonial-text">If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan Varol.</h3>
              <p className="testimonial-author">— NIR EYAL</p>
              <p className="testimonial-title">New York Times-bestselling author of <i>Hooked and Indistractable</i></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}