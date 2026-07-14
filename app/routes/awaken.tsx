import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Awaken Your Genius | Ozan Varol" },
  { name: "description", content: "From the acclaimed author of Think Like a Rocket Scientist comes a simple guide to unlock your originality and unleash your unique talents." },
];

export default function Awaken() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Awaken Your Genius</h1>
          <p className="page-subtitle">A Simple Guide to Unlock Your Originality and Unleash Your Unique Talents</p>
        </div>
      </section>

      <section className="book-detail">
        <div className="container">
          <div className="book-detail-container">
            <div className="book-detail-image">
              <img src="https://static.showit.co/800/U9qXHFfiSBic8gCLv49PnQ/260793/awakenyourgenius_3d-1.png" alt="Awaken Your Genius" />
            </div>
            <div className="book-detail-content">
              <span className="book-badge">NEW RELEASE</span>
              <h2 className="book-detail-title">Awaken Your Genius</h2>
              <p className="book-detail-subtitle">A Simple Guide to Unlock Your Originality and Unleash Your Unique Talents</p>
              <div className="book-rating"><span className="stars">★★★★★</span><span className="rating-text">Wall Street Journal Bestseller</span></div>
              <p className="book-detail-description">From the acclaimed author of Think Like a Rocket Scientist comes a simple guide to unlock your originality and unleash your unique talents. In a world where we're constantly told to fit in, stand out, and follow the rules, Ozan Varol reveals how to break free from conformity and tap into your innate creativity.</p>
              <p className="book-detail-description">Drawing on captivating stories from history, psychology, and his own experiences as a rocket scientist, Varol shows you how to:</p>
              <ul className="book-features">
                <li>Unlearn the habits that hold you back</li>
                <li>Question assumptions and challenge the status quo</li>
                <li>Develop a beginner's mindset in any field</li>
                <li>Turn obstacles into opportunities</li>
                <li>Create your own path to success</li>
              </ul>
              <div className="book-purchase-options">
                <a href="https://geni.us/6uDnAm" target="_blank" className="btn-primary">Buy on Amazon &rarr;</a>
                <a href="https://geni.us/6uDnAm" target="_blank" className="btn-secondary">Other Retailers &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-praise-section">
        <div className="container">
          <h3 className="praise-section-title">Praise for Awaken Your Genius</h3>
          <div className="praise-grid">
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"Ozan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of."</p>
              <p className="praise-author">— ADAM GRANT</p>
              <p className="praise-title">New York Times bestselling author of ORIGINALS and GIVE AND TAKE, and host of the TED podcast WorkLife</p>
            </div>
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"A brilliant and inspiring guide to breaking free from conventional thinking. Varol shows us how to reclaim our creativity and live more fully."</p>
              <p className="praise-author">— SHANE PARRISH</p>
              <p className="praise-title">Author of THE CLEAR MIND and founder of Farnam Street</p>
            </div>
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"Varol has written the definitive guide to unlocking your creative potential. This book will change how you think about thinking."</p>
              <p className="praise-author">— CAL NEWPORT</p>
              <p className="praise-title">New York Times bestselling author of DEEP WORK</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Awaken Your Genius?</h2>
          <p className="cta-text">Join thousands of readers who have discovered their unique talents and broken free from conventional thinking.</p>
          <div className="cta-buttons"><a href="https://geni.us/6uDnAm" target="_blank" className="btn-primary btn-large">Get Your Copy Today &rarr;</a></div>
        </div>
      </section>
    </>
  );
}