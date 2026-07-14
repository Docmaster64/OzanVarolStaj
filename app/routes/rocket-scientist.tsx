import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";
import PraiseCard from "../components/PraiseCard";
import { rocketScientistPraise } from "../data/praise";

export const meta: MetaFunction = () => [
  { title: "Think Like a Rocket Scientist | Ozan Varol" },
  { name: "description", content: "In this Wall Street Journal bestseller, Ozan Varol reveals the powerful techniques and mental models used by NASA's rocket scientists to solve complex problems and achieve seemingly impossible goals." },
];

export default function RocketScientist() {
  return (
    <>
      <PageHeader
        title="Think Like a Rocket Scientist"
        subtitle="Learn the Proven Mindset and Methods That Will Take You to the Stars"
      />

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
            {rocketScientistPraise.map((praise) => (
              <PraiseCard key={praise.author} {...praise} />
            ))}
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