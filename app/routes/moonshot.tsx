import type { MetaFunction } from "@remix-run/node";
import PageHeader from "../components/PageHeader";
import CtaSection from "../components/CtaSection";

export const meta: MetaFunction = () => [
  { title: "Moonshot Thinking by Ozan Varol" },
  { name: "description", content: "A selective program for organizations ready to lead where others follow." },
];

export default function Moonshot() {
  return (
    <>
      <PageHeader
        title="Moonshot Thinking"
        subtitle="A system for reimagining the status quo—and building a future others can't yet see"
      />

      <section className="course-hero">
        <div className="course-hero-container">
          <div className="course-hero-content">
            <span className="course-badge">for businesses</span>
            <h1 className="course-title">Build a Future Others Can't Yet See</h1>
            <p className="course-subtitle">Moonshot Thinking is a system for reimagining the status quo—and building a future others can't yet see. I wrote the book on it—literally.</p>
            <p className="course-desc">The selective online program embeds moonshot thinking into your company's DNA—with original video content, practical exercises, and custom AI tools that turn big ideas into daily practice.</p>
            <a href="mailto:speaking@ozanvarol.com" className="btn-primary btn-large">Apply for the Program &rarr;</a>
          </div>
          <div className="course-hero-image">
            <img src="https://static.showit.co/1200/DnD07GZKQ2aq6Y6MYrLyOw/260793/varol_pure_leadership_forum_2023_1_2.jpg" alt="Moonshot Thinking" />
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to lead where others follow?"
        text="Bring moonshot thinking to your organization and turn big ideas into daily practice."
        buttons={[
          { label: "Apply Now", href: "mailto:speaking@ozanvarol.com", variant: "primary" },
        ]}
      />
    </>
  );
}