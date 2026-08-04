import { useEffect } from "react";
import type { MetaFunction } from "@remix-run/node";
import QuoteIcon from "../components/QuoteIcon";

export const meta: MetaFunction = () => [
  { title: "Home | #1 Bestselling Author, Keynote Speaker & Expert on Innovation & Creativity" },
  { name: "description", content: "Ozan Varol is a former rocket scientist turned #1 bestselling author and a world-renowned keynote speaker. Unlock strategies for sparking creativity and reimagining the status quo." },
];
 
export default function Index() {
  useEffect(() => {
    // Animate hero title on scroll
    const ozan = document.querySelector(".hero-title .ozan");
    const varol = document.querySelector(".hero-title .varol");

    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (ozan && !ozan.classList.contains("animate")) ozan.classList.add("animate");
        if (varol && !varol.classList.contains("animate")) varol.classList.add("animate");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // About image slider (3 images auto-rotate with dots)
    const gallery = document.querySelector(".about-gallery");
    if (!gallery) return;

    const slides = gallery.querySelectorAll("img");
    const dotsWrap = document.querySelector(".about-dots");
    let current = 0;
    let timer: ReturnType<typeof setInterval> | null = null;

    // Build dots
    if (dotsWrap && slides.length) {
      slides.forEach((_, i) => {
        const btn = document.createElement("button");
        btn.setAttribute("aria-label", "Slide " + (i + 1));
        if (i === 0) btn.classList.add("active");
        btn.addEventListener("click", () => {
          goTo(i);
          restart();
        });
        dotsWrap.appendChild(btn);
      });
    }

    function goTo(index: number) {
      slides.forEach((s, i) => s.classList.toggle("active", i === index));
      if (dotsWrap) {
        dotsWrap.querySelectorAll("button").forEach((b, i) => {
          b.classList.toggle("active", i === index);
        });
      }
      current = index;
    }

    function next() {
      goTo((current + 1) % slides.length);
    }

    function start() {
      timer = setInterval(next, 5000);
    }
    function stop() {
      if (timer) clearInterval(timer);
    }
    function restart() {
      stop();
      start();
    }

    if (slides.length > 1) {
      goTo(0);
      start();
      gallery.addEventListener("mouseenter", stop);
      gallery.addEventListener("mouseleave", start);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Fade-in animation using IntersectionObserver
    const fadeEls = document.querySelectorAll(".fade-in");
    if ("IntersectionObserver" in window && fadeEls.length) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      fadeEls.forEach((el) => io.observe(el));
    } else {
      fadeEls.forEach((el) => el.classList.add("visible"));
    }
  }, []);

  useEffect(() => {
    // Check if script already exists to avoid duplicates
    const container = document.getElementById("hero-convertkit-form");
    if (!container) return;
    if (container.querySelector("script[data-uid='9ae9a39668']")) return;

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-uid", "9ae9a39668");
    script.src = "https://outatime-llc.ck.page/9ae9a39668/index.js";
    container.appendChild(script);

    // Apply inline styles to make input + button side-by-side after form loads
    const applyFormStyles = () => {
      const form = container.querySelector(".formkit-form") as HTMLElement | null;
      if (!form) return;

      const fields = form.querySelector(".formkit-fields") as HTMLElement | null;
      const field = form.querySelector(".formkit-field") as HTMLElement | null;
      const input = form.querySelector(".formkit-input") as HTMLElement | null;
      const submit = form.querySelector(".formkit-submit") as HTMLElement | null;

      if (fields) {
        fields.style.display = "flex";
        fields.style.flexDirection = "row";
        fields.style.alignItems = "center";
        fields.style.gap = "10px";
        fields.style.width = "100%";
        fields.style.flexWrap = "nowrap";
      }
      if (field) {
        field.style.flex = "1 1 auto";
        field.style.minWidth = "0";
        field.style.margin = "0";
      }
      if (input) {
        input.style.width = "100%";
        input.style.minWidth = "0";
      }
      if (submit) {
        submit.style.flex = "0 0 auto";
        submit.style.whiteSpace = "nowrap";
        submit.style.margin = "0";
      }
    };

    // Observe for the form to be injected by the ConvertKit script
    const observer = new MutationObserver(() => {
      applyFormStyles();
      if (container.querySelector(".formkit-form")) {
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    // Also try after a short delay in case the form loads synchronously
    setTimeout(applyFormStyles, 500);
    setTimeout(applyFormStyles, 1500);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h2 className="hero-sub">The One Newsletter<br />You'll <span className="actually">Actually</span> Love</h2>
            <p className="hero-join" style={{ textAlign: 'right' }}><b>Join 50K+ readers who call it "<span className="highlight-underline">the email highlight of my week.</span>"</b></p>
            <p className="hero-tag">Takes 3 minutes to read. Takes longer to shake.</p>
            <div className="hero-form" id="hero-convertkit-form"></div>
          </div>
          <div className="hero-right">
            <div className="hero-image">
              <img src="https://static.showit.co/1600/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png" alt="Ozan Varol" />
            </div>
            <h1 className="hero-title">
              <span className="ozan">OZAN</span>
              <span className="varol">VAROL</span>
            </h1>
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
          <div className="about-content">
            <p className="about-eyebrow">I'M OZAN VAROL</p>
            <h1 className="about-subtitle">a ROCKET SCIENTIST TURNED BESTSELLING<br />AUTHOR</h1>
            <p className="about-text fade-in">I've spent my career building things and then walking away from them — rocket science, law, a tenured professorship — each time following the energy toward what was next.<br /><br />Now I write, speak, and teach about the moments that define us: the leaps we almost don't take, the things we hold onto too long, and the breakthroughs that only happen when we stop playing it safe.<br /><br />My books have been translated into 25+ languages and selected by Adam Grant as his #1 leadership book of the year. I've delivered 100+ keynotes to organizations like Microsoft, Google X, Salesforce, Goldman Sachs, and the U.S. Department of State.</p>
          </div>
          <div className="about-gallery-wrap">
            <div className="about-gallery">
              <img className="active" src="https://static.showit.co/400/vjojJALxToO9k6fCfUVsJg/260793/ozan_1503.jpg" alt="Ozan Varol" />
              <img src="https://static.showit.co/400/ZAImgYHOQ66OsMvVCbdujQ/260793/ozan_1379.jpg" alt="Ozan Varol" />
              <img src="https://static.showit.co/400/hHPLAClLRzmHLoI_pKMhZQ/260793/ozan_1515.jpg" alt="Ozan Varol" />
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <div className="quote-bg-top"></div>
        <div className="quote-bg-bottom"></div>
        <div className="quote-container">
          <div className="quote-images">
            <div className="quote-image-original">
              <img src="/image_2.png" alt="Original" />
            </div>
            <div className="quote-image-yellow" aria-hidden="true"></div>
          </div>
          <div className="quote-card">
            <h3 className="quote-text">Most people hold<br />on too long. I've<br />built my life<br />around letting go.</h3>
            <button className="quote-btn">
              COUNT ME IN!
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
          {/* Gray copy of the quote card, positioned upper-right */}
          <div className="quote-card quote-card-copy" aria-hidden="true">
            <h3 className="quote-text">Most people hold<br />on too long. I've<br />built my life<br />around letting go.</h3>
            <button className="quote-btn">
              COUNT ME IN!
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Speaking Section - fixed video background, empty spacer */}
      <section className="speaking">
        <div className="speaking-video-background">
          <video autoPlay muted loop playsInline>
            <source src="https://static.showit.co/file/WQOtPRx3cWRyVNQq2q-txA/260793/speakingclip.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="speaking-overlay">
          <div className="speaking-quote speaking-quote-top-left">
            <svg className="speaking-quote-icon" viewBox="0 0 500 500" fill="currentColor"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z"></path></svg>
            <p className="speaking-quote-text">The Best Keynote<br />Speaker.</p>
            <p className="speaking-quote-author">— Heather Hoerle</p>
          </div>
          <div className="speaking-center-content">
            <h3 className="speaking-center-title">KEYNOTE SPEAKING</h3>
            <a href="/speaking" className="speaking-center-btn">LEARN MORE &rarr;</a>
          </div>
          <div className="speaking-quote speaking-quote-bottom-right">
            <svg className="speaking-quote-icon" viewBox="0 0 500 500" fill="currentColor"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z"></path></svg>
            <p className="speaking-quote-text">Among the Top 3 SPEAKERS<br />I'VE EVER ENCOUNTERED IN<br />MY LIFE.</p>
            <p className="speaking-quote-author">— Katherine Cohen</p>
          </div>
        </div>
      </section>

      {/* Book Section */}
      <section className="book">
        <div className="book-container">
          <div className="book-image-col">
            <div className="book-image-wrap">
              <img src="https://static.showit.co/800/U9qXHFfiSBic8gCLv49PnQ/260793/awakenyourgenius_3d-1.png" alt="Awaken Your Genius" />
            </div>
          </div>
          <div className="book-content-col">
            <h3 className="book-label">MY LATEST BOOK</h3>
            <h2 className="book-title">Awaken<br />Your Genius</h2>
            <p className="book-description">
              From the acclaimed author of <i>Think Like a Rocket Scientist</i> comes a simple guide to unlock your originality and unleash your unique talents.
            </p>
            <div className="book-buttons">
              <a href="https://geni.us/6uDnAm" target="_blank" className="book-btn-primary">ORDER NOW &rarr;</a>
              <a href="/awaken" className="book-btn-secondary">LEARN MORE &rarr;</a>
            </div>
            <div className="book-praise-section">
              <div className="praise-left">
                <h4 className="praise-label">PRAISE FOR <i>Awaken Your Genius:</i></h4>
                <p className="praise-text">
                  <svg className="praise-quote-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z"></path></svg>
                  Ozan Varol always makes me think. His new book is laced with surprising<br />stories and fascinating findings to help you rethink what you're capable of.
                </p>
                <div className="praise-author-row">
                  <img src="https://static.showit.co/200/J-w35fhaQKGqr4HdnlyAug/260793/adam-grant-photo.png" alt="Adam Grant" className="praise-photo" />
                  <div>
                    <span className="praise-author">— ADAM GRANT</span>
                    <span className="praise-title">New York Times bestselling author of ORIGINALS and<br />GIVE AND TAKE, and host of the TED podcast WorkLife</span>
                  </div>
                </div>
              </div>
              <div className="praise-right">
                <div className="praise-badge">
                  <div className="wsj-badge">
                    <span>WSJ</span>
                  </div>
                  <div className="badge-content">
                    <span className="badge-rank">#3</span>
                    <div className="badge-info">
                      <span className="badge-source">Wall Street<br />Journal</span>
                    </div>
                    <span className="badge-type">BEST SELLER</span>
                  </div>
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
<a href="https://ozanvarol.com/a-trap-disguised-as-wisdom/" target="_blank" className="blog-title">A Trap Disguised<br />as Wisdom</a>
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

      {/* Audio Training Section */}
      <section className="audio">
        <div className="audio-container">
          <div className="audio-image">
            <img src="https://static.showit.co/800/3SWKdhu6TuW85ECqrEiGXg/shared/phone-earbuds.png" alt="Audio Training" className="audio-main" />
            <img src="/ozan_audio_training_4_cropped.png" alt="Training" className="audio-overlay-1" />
            <img src="https://static.showit.co/400/Zz4JnRI7TgO440xGw0eRbA/shared/podcastblank.png" alt="Podcast" className="audio-overlay-2" />
            <img src="https://static.showit.co/file/ENoNJjXgQzmN5-5ugA_ClQ/260793/audio.gif" alt="Audio" className="audio-gif" />
          </div>
          <div className="audio-content">
<h2 className="audio-title">Get A Free<br /><span className="audio-title-accent">Audio Training</span></h2>
            <p className="audio-description">Learn 3 simple strategies to make giant leaps in your life and work.</p>
            <form className="audio-form" id="hero-convertkit-form">
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="audio-btn">DOWNLOAD</button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <div className="testimonial-item alt reverse frame-blue">
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <QuoteIcon />
              </div>
               <h3 className="testimonial-text">Ozan Varol&nbsp;is&nbsp;always&nbsp;smart&nbsp;and&nbsp;always<br />fascinating.</h3>
              <p className="testimonial-author">—SUSAN CAIN</p>
              <p className="testimonial-title">Bestselling author of <i>Bittersweet</i> and <i>Quiet</i></p>
            </div>
            <div className="testimonial-image">
              <img src="https://static.showit.co/400/WqI8LJ8mQc-n_QvfzCCV6g/260793/susan-cain-dec-2021-credit-aaron-fedor-sus_2702a_crop.png" alt="Susan Cain" />
            </div>
          </div>

          <div className="testimonial-item alt frame-yellow">
            <div className="testimonial-image">
              <img src="https://static.showit.co/200/hMVCmqe8ScKxvOWkrE1bxg/260793/dan_pink.jpg" alt="Dan Pink" />
            </div>
            <div className="testimonial-content">
              <div className="testimonial-icon">
                <QuoteIcon />
              </div>
              <h3 className="testimonial-text">When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero—which means you need Ozan Varol.</h3>
              <p className="testimonial-author">— DAN PINK</p>
              <p className="testimonial-title">New York Times–bestselling author of <i>Drive</i></p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Quote Banner */}
      <section className="quote-banner">
        <div className="quote-banner-container">
          <div className="quote-banner-left">
            <h3 className="quote-banner-text">
              If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan<br />Varol.
            </h3>
            <div className="quote-banner-author">
              <p className="quote-banner-name">— NIR EYAL</p>
              <p className="quote-banner-title">Bestselling author of <i>Hooked and Indistractable</i></p>
            </div>
            <div className="quote-banner-icon">
              <QuoteIcon />
            </div>
          </div>
          <div className="quote-banner-right">
            <div className="quote-banner-image">
              <img 
                src="https://static.showit.co/200/SrQb7ryXRy6FUcnmZiSfBg/260793/nireyal_150-scaled.jpg" 
                alt="Nir Eyal" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
