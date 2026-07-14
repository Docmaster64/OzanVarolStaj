import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";
import PraiseCard from "../components/PraiseCard";
import { awakenPraise } from "../data/praise";

export const meta: MetaFunction = () => [
  { title: "Awaken Your Genius | Ozan Varol" },
  { name: "description", content: "From the acclaimed author of Think Like a Rocket Scientist comes a simple guide to unlock your originality and unleash your unique talents." },
];

export default function Awaken() {
  return (
    <>
      <PageHeader
        title="Awaken Your Genius"
        subtitle="A Simple Guide to Unlock Your Originality and Unleash Your Unique Talents"
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
            {awakenPraise.map((praise) => (
              <PraiseCard key={praise.author} {...praise} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Awaken Your Genius?"
        text="Join thousands of readers who have discovered their unique talents and broken free from conventional thinking."
        buttons={[
          { label: "Get Your Copy Today", href: "https://geni.us/6uDnAm", external: true },
        ]}
      />
    </>
  );
}