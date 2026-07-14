import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";

export const meta: MetaFunction = () => [
  { title: "A Free Masterclass by Ozan Varol" },
  { name: "description", content: "Unlock a new level of creativity and productivity—all without losing your authentic touch." },
];

export default function Masterclass() {
  return (
    <>
      <PageHeader
        title="The AI Advantage"
        subtitle="A free masterclass to unlock a new level of creativity and productivity"
      />

      <section className="course-hero">
        <div className="course-hero-container">
          <div className="course-hero-content">
            <span className="course-badge">free masterclass</span>
            <h1 className="course-title">Master ChatGPT Without Losing Your Voice</h1>
            <p className="course-subtitle">Learn how to master ChatGPT, reclaim 10 hours from your work week, and change your to-do list from a battleground to a playground.</p>
            <p className="course-desc">Practical, story-driven training that fits into your real life and work—no fluff, just tools you'll actually use.</p>
            <a href="https://geni.us/6uDnAm" target="_blank" className="btn-primary btn-large">Watch the Free Masterclass &rarr;</a>
          </div>
          <div className="course-hero-image">
            <img src="https://static.showit.co/800/Ih3XbA-RRRmJ2zw_AOkzXw/260793/untitled_design_1.png" alt="Ozan Varol" />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to reclaim your week?"
        text="Join thousands of readers who use these tools every day to think better and work smarter."
        buttons={[
          { label: "Start the Free Masterclass", href: "https://geni.us/6uDnAm", external: true, variant: "primary" },
        ]}
      />
    </>
  );
}