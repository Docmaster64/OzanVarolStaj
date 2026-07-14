import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";
import PraiseCard from "../components/PraiseCard";
import { awakenPraise } from "../data/praise";

export const meta: MetaFunction = () => [
  { title: "Books | Ozan Varol - Bestselling Author" },
  { name: "description", content: "Explore Ozan Varol's bestselling books including 'Awaken Your Genius' and 'Think Like a Rocket Scientist'." },
];

export default function Books() {
  return (
    <>
      <PageHeader
        title="Books"
        subtitle="Discover strategies for innovation, creativity, and breakthrough thinking"
      />

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
              <p className="book-detail-description">From the acclaimed author of <i>Think Like a Rocket Scientist</i> comes a simple guide to unlock your originality and unleash your unique talents. In a world where we're constantly told to fit in, stand out, and follow the rules, Ozan Varol reveals how to break free from conformity and tap into your innate creativity.</p>
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
            {awakenPraise.map((praise) => (
              <PraiseCard key={praise.author} {...praise} />
            ))}
          </div>
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
              <p className="book-detail-description">In this <i>Wall Street Journal</i> bestseller, Ozan Varol reveals the powerful techniques and mental models used by NASA's rocket scientists to solve complex problems, make better decisions, and achieve seemingly impossible goals.</p>
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

      <CtaSection
        title="Ready to Think Like a Rocket Scientist?"
        text="Join thousands of readers who have transformed their thinking and achieved extraordinary results."
        buttons={[
          { label: "Get Your Copy Today", href: "https://geni.us/TLaRS", external: true },
        ]}
      />
    </>
  );
}