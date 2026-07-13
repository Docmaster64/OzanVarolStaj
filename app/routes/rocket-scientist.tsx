import type { MetaFunction } from "@remix-run/node";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => [
  { title: "Think Like a Rocket Scientist | Ozan Varol" },
  { name: "description", content: "In this Wall Street Journal bestseller, Ozan Varol reveals the powerful techniques and mental models used by NASA's rocket scientists to solve complex problems and achieve seemingly impossible goals." },
];

export default function RocketScientist() {
  return (
    <>
      <Navigation />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Think Like a Rocket Scientist</h1>
          <p className="page-subtitle">Learn the Proven Mindset and Methods That Will Take You to the Stars</p>
        </div>
      </section>

      <section className="book-detail alt">
        <div className="container">
          <div className="book-detail-container reverse">
            <div className="book-detail-content">
              <span className="book-badge">WSJ BESTSELLER</span>
              <h2 className="book-detail-title">Think Like a Rocket Scientist</h2>
              <p className="book-detail-subtitle">Learn the Proven Mindset and Methods That Will Take You to the Stars</p>
              <div className="book-rating"><span className="stars">★★★★★</span><span className="rating-text">#1 Bestseller in Decision-Making</span></div>
              <p className="book-detail-description">In this Wall Street Journal bestseller, Ozan Varol reveals the powerful techniques and mental models used by NASA's rocket scientists to solve complex problems, make better decisions, and achieve seemingly impossible goals.</p>
              <p className="book-detail-description">Whether you're launching a startup, leading a team, or simply trying to navigate life's challenges, the principles of rocket science can help you:</p>
              <ul className="book-features">
                <li>Think from first principles to solve any problem</li>
                <li>Embrace failure as a stepping stone to success</li>
                <li>Run mental simulations to test ideas before implementation</li>
                <li>Build systems that scale and adapt</li>
                <li>Make decisions under uncertainty</li>
              </ul>
              <div className="book-purchase-options">
                <a href="https://geni.us/TLaRS" target="_blank" className="btn-primary">Buy on Amazon &rarr;</a>
                <a href="https://geni.us/TLaRS" target="_blank" className="btn-secondary">Other Retailers &rarr;</a>
              </div>
            </div>
            <div className="book-detail-image">
              <img src="https://static.showit.co/200/XmR7RaINTMmR-t7XeLxemg/260793/thinklikearocketscientist_a.jpg" alt="Think Like a Rocket Scientist" />
            </div>
          </div>
        </div>
      </section>

      <section className="book-praise-section">
        <div className="container">
          <h3 className="praise-section-title">What Leaders Are Saying</h3>
          <div className="praise-grid">
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"Ozan Varol always makes me think. His new book is laced with surprising stories and fascinating findings to help you rethink what you're capable of."</p>
              <p className="praise-author">— ADAM GRANT</p>
              <p className="praise-title">New York Times bestselling author of ORIGINALS and GIVE AND TAKE</p>
            </div>
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"If you looked up the word 'polymath' in the dictionary, you may see a picture of Ozan Varol."</p>
              <p className="praise-author">— NIR EYAL</p>
              <p className="praise-title">New York Times-bestselling author of Hooked and Indistractable</p>
            </div>
            <div className="praise-card">
              <div className="praise-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M220.59,105.05Q156.8,149,136.25,188T115.7,259.54v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75a106.6,106.6,0,0,1,22.68-2.84q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68a100.94,100.94,0,0,1-72.29-31.89Q70.33,380,60.42,355.93T50.5,297.81q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61A470.25,470.25,0,0,1,205,83.79Zm221.07,0Q377.88,149,357.32,188t-20.55,71.57v17a30.9,30.9,0,0,0,1.42,9.92q11.32-9.9,24.09-12.75A106.6,106.6,0,0,1,385,270.88q31.16,0,53.86,20.55t22.68,53.16q0,38.27-25.51,60.94t-56.7,22.68A100.94,100.94,0,0,1,307,396.32Q291.4,380,281.49,355.93t-9.92-58.12q0-35.42,12.76-65.91a245.53,245.53,0,0,1,34-57.4,324.89,324.89,0,0,1,48.9-49.61,469.62,469.62,0,0,1,58.83-41.1Z" /></svg></div>
              <p className="praise-text">"When the stakes are high, the unknowns are threatening, and the problems seem insurmountable, you need a superhero—which means you need Ozan Varol."</p>
              <p className="praise-author">— DAN PINK</p>
              <p className="praise-title">Bestselling author of Bittersweet and Quiet</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Think Like a Rocket Scientist?</h2>
          <p className="cta-text">Join thousands of readers who have transformed their thinking and achieved extraordinary results.</p>
          <div className="cta-buttons"><a href="https://geni.us/TLaRS" target="_blank" className="btn-primary btn-large">Get Your Copy Today &rarr;</a></div>
        </div>
      </section>

      <Footer />
    </>
  );
}