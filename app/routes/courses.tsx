import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";

export const meta: MetaFunction = () => [
  { title: "Courses | Ozan Varol" },
  { name: "description", content: "From AI mastery to moonshot thinking, these programs help you turn the impossible into the possible." },
];

export default function Courses() {
  return (
    <>
      <PageHeader
        title="Courses"
        subtitle="Turn the impossible into the possible"
      />

      <section className="course-hero">
        <div className="course-hero-container">
          <div className="course-hero-content">
            <span className="course-badge">school was boring. this isn't.</span>
            <h1 className="course-title">Turn the Impossible Into the Possible</h1>
            <p className="course-subtitle">From AI mastery to moonshot thinking, these programs help you turn the impossible into the possible.</p>
            <p className="course-desc">Practical, story-driven training that fits into your real life and work—no fluff, just tools you'll actually use.</p>
            <a href="#courses" className="btn-primary btn-large">Explore the Courses &rarr;</a>
          </div>
          <div className="course-hero-image">
            <img src="https://static.showit.co/800/k41dADc8Qc-hI5iSeEh5Ew/260793/ozan_1294-2.jpg" alt="Ozan Varol" />
          </div>
        </div>
      </section>

      <section className="courses-list" id="courses">
        <div className="courses-grid">
          <a href="/masterclass" className="course-card blue">
            <h3>The AI Advantage</h3>
            <p>For individuals and businesses. Unlock a new level of creativity and productivity—all without losing your authentic touch. Learn how to master ChatGPT, reclaim 10 hours from your work week, and change your to-do list from a battleground to a playground.</p>
            <span className="cc-link">take free masterclass &rarr;</span>
          </a>
          <a href="/moonshot" className="course-card orange">
            <h3>Moonshot Thinking</h3>
            <p>For businesses. Moonshot Thinking is a system for reimagining the status quo—and building a future others can't yet see. I wrote the book on it—literally. The selective online program embeds moonshot thinking into your company's DNA—with original video content, practical exercises, and custom AI tools that turn big ideas into daily practice.</p>
            <span className="cc-link">learn more &rarr;</span>
          </a>
        </div>
      </section>

      <CtaSection
        title="Ready to make a giant leap?"
        text="Pick the path that fits you—and start turning big ideas into daily practice."
        buttons={[
          { label: "Start the Free Masterclass", href: "/masterclass", variant: "primary" },
        ]}
      />
    </>
  );
}