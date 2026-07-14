import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "The Awakening | Ozan Varol" },
  { name: "description", content: "An intimate 2-day experience to help you shed the life that no longer fits—and step into the one that does." },
];

const signupUrl = "https://buy.stripe.com/cN2cOV57h2JM1fa000";

const expectItems = [
  "Immersive workshops that ignite your inner fire",
  "Rituals that help you mark what’s ending—and what’s beginning",
  "Shared meals around our table, where the real magic often unfolds",
  "Quiet moments of integration, where insight turns into embodiment",
  "Candid conversations with others who feel the same calling to transform",
];

const leaveWith = [
  "Clarity on what’s next—and what’s ready to end",
  "A felt sense of direction that lives in your body, not just your mind",
  "The first steps to bring your next chapter to life—grounded, specific, doable",
  "A renewed connection to your aliveness—what lights you up, what makes you feel like you",
  "A circle of like-hearted people who see you clearly and walk beside you beyond the weekend",
];

const forWhom = [
  "The overachiever tired of playing the corporate game.",
  "The entrepreneur whose business doesn’t light them up anymore.",
  "The artist stuck in a creative rut.",
  "The parent who’s lost touch with their own passions.",
  "The recent graduate questioning if they chose the right path.",
  "The mid-lifer craving a second act.",
  "The adventurer looking for more than another stamp in their passport.",
  "The healer who needs healing.",
  "The dreamer who’s finally ready to do something about it.",
];

const notForWhom = [
  "You’re looking for a traditional retreat with a printed itinerary, nametags, and icebreakers.",
  "You prefer lectures over lived experience—or want to sit back and watch, rather than participate.",
  "You’re uncomfortable with emotional depth, personal reflection, or being gently invited into vulnerability.",
  "You’re hoping for a “quick fix” or a “5-step formula” for reinvention.",
  "You’re looking for a party, a networking event, or a weekend to let loose.",
  "You plan to use alcohol, cannabis, or other substances during the experience (this is a substance-free journey).",
  "You’re not ready to be in your body—or to listen to what it’s been trying to tell you.",
];

const flow = [
  {
    icon: "🌒",
    title: "Before You Arrive: Priming",
    points: [
      "Identify the patterns and identities you’ve outgrown, even the ones that once felt essential.",
      "Reflect on what you’re ready to release—what parts of your life (or self) are quietly asking to transform.",
      "Notice where you’re living by default instead of by desire—and what a shift toward aliveness might look like.",
      "Tune into your body’s intelligence—practice hearing the whispers waiting to guide you.",
    ],
  },
  {
    icon: "🌑",
    title: "Day One: Death",
    points: [
      "Name and release outdated versions of yourself—not with shame, but with gratitude and grace.",
      "Move through practices that invite surrender, helping you loosen your grip on the familiar (even when it’s uncomfortable).",
      "Build capacity for uncertainty, for standing in the unknown without rushing to fix it.",
      "Mark the death of the old with a symbolic ritual—so the letting go is not just understood, but felt.",
    ],
  },
  {
    icon: "🌔",
    title: "Day Two: Rebirth",
    points: [
      "Explore how it feels to move through the world without your old armor—to speak, make decisions, and connect from a place that feels lighter, truer, more alive.",
      "Experiment with new ways of being—beyond roles, beyond expectations, beyond the stories that once defined you.",
      "Surface the truth of what wants to come alive next, not as a five-year plan, but as a felt sense—a direction your body recognizes before your mind does.",
      "Embody one or two brave shifts you’re ready to make—in your work, relationships, or creative life—and map the first simple steps toward them.",
    ],
  },
  {
    icon: "🌕",
    title: "After You Leave: Integration",
    points: [
      "Create practices that reinforce what’s been awakened, so you don’t slide back into the autopilot of “before.”",
      "Translate your insights into aligned action—so this isn’t just a powerful weekend, but a turning point in how you live, work, and relate.",
    ],
  },
];

const faqs = [
  { q: "Is my ticket refundable?", a: "Because this is an intimate, high-touch experience with extremely limited spots, all sales are final and non-refundable. We understand that life can be unpredictable. If you’re unable to attend, your ticket is transferable—you’re welcome to gift or sell your spot to someone else." },
  { q: "Is lodging included in the cost?", a: "No. Once you register, we’ll send you a curated list of nearby places to stay—everything from boutique hotels to cozy Airbnbs. You’ll have options that are close, comfortable, and aligned with the vibe of the weekend." },
  { q: "Will food be provided?", a: "Yes, for Friday (27th) and Saturday (the 28th)—nourishing, beautifully prepared meals are included in the cost of the retreat. We’ll accommodate dietary needs if you let us know in advance." },
  { q: "Where is the experience held?", a: "In our home in Portland, Oregon. This isn’t a sterile hotel ballroom. It’s an intimate, lived-in space where we cook, write, dream, and now—welcome you. We chose this setting intentionally to make the experience even more transformative." },
  { q: "Will there be downtime?", a: "Yes. Integration is just as important as activation. You’ll have time to reflect, rest, connect, or be alone—whatever your system needs to process and breathe. We’ll move between structure and spaciousness with intention." },
  { q: "I’m not sure if I’m the “retreat” type. Will this still work for me?", a: "Yes. This experience doesn’t require being “good” at retreats or rituals. It’s about showing up as you are, with your curiosity, your hesitation, and most importantly, your openness. You don’t need to know what you’re doing. You just need to be willing to step in." },
  { q: "When do I need to arrive in Portland?", a: "Please plan to arrive in Portland by 7:00 p.m. on Thursday, June 26th. You can depart anytime on Sunday, June 29th." },
  { q: "Is there a schedule I can see ahead of time?", a: "No—and that’s by design. This experience is intentionally crafted to help you loosen your grip on control and learn to trust the unfolding. You won’t be handed an itinerary. You’ll be guided—step by step—through a series of rituals, workshops, and moments that build on each other like a great story." },
  { q: "Still have questions?", a: "Email support@ozanvarol.com" },
];

export default function Experiences() {
  return (
    <>
      <section className="awakening-hero">
        <div className="container">
          <span className="awakening-eyebrow">not a retreat. a rebirth.</span>
          <h1 className="awakening-title">THE AWAKENING</h1>
          <p className="awakening-subtitle">An intimate 2-day experience to help you shed the life that no longer fits—and step into the one that does.</p>
          <a href={signupUrl} target="_blank" className="btn-primary btn-large">Join the Awakening &rarr;</a>
        </div>
      </section>

      <section className="awakening-intro">
        <div className="container">
          <p className="awakening-lead">You’ve followed the map. Hit the milestones. Built a life that looks good on paper. And yet . . . something feels off.</p>
          <p className="awakening-body">You feel restless. Stuck. Like you’re going through the motions in a life that no longer fits.</p>
          <p className="awakening-body">What if that discomfort isn’t a problem to fix . . . but a signal to decode? What if the exhaustion you feel isn’t burnout… but the weight of a life that no longer fits? And what if the ending you’ve been avoiding… is the doorway to everything that’s next?</p>
          <h2 className="awakening-question">What if the life you’ve built… is too small for who you’re becoming?</h2>
        </div>
      </section>

      <section className="awakening-welcome">
        <div className="container">
          <h2 className="awakening-section-title">Welcome to The Awakening</h2>
          <p className="awakening-body">A sacred disruption. A permission slip to fully step into your new becoming.</p>
          <p className="awakening-body">The Awakening is a two-day, in-person experience designed for 20 humans ready to outgrow the life they’ve built—and step into the one they’re meant to live. You’ll step into guided workshops, sensory experiences, and soul-level conversations that bypass your overthinking brain and land straight in your body. This is not about talking about transformation. This is about living it.</p>
          <p className="awakening-tagline">THIS ISN'T A RETREAT. it's a letting go.</p>
          <a href={signupUrl} target="_blank" className="btn-primary btn-large">Join the Awakening &rarr;</a>
        </div>
      </section>

      <section className="awakening-expect">
        <div className="container">
          <h2 className="awakening-section-title">What to Expect</h2>
          <p className="awakening-subheading">YOU'LL BE GUIDED THROUGH:</p>
          <ul className="awakening-expect-list">
            {expectItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="awakening-body">This isn’t a place where you passively absorb information. This is an experience that moves through you. You’ll reconnect with the parts of yourself that have gone silent—from years of overwork, caretaking, performing, conforming.</p>
        </div>
      </section>

      <section className="awakening-flow-text">
        <div className="container">
          <h2 className="awakening-section-title">You’ll be ushered from one experience to the next</h2>
          <p className="awakening-body">Like a story unfolding in real time. Like an immersive film that pulls you in frame by frame. Some moments will challenge you. Some will soothe you. Others may crack you wide open. But through it all, you’ll be held. You’ll hear your inner voice again—the one that’s been drowned out by emails, algorithms, and expectations.</p>
        </div>
      </section>

      <section className="awakening-leave">
        <div className="container">
          <h3 className="awakening-subheading">And you'll leave with:</h3>
          <ul className="awakening-leave-list">
            {leaveWith.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="awakening-body">You’ve never done anything like this. And you may never get the chance again. There are just 20 spots, and they’ll fill quickly.</p>
          <a href={signupUrl} target="_blank" className="btn-primary btn-large">Start Your Rebirth &rarr;</a>
        </div>
      </section>

      <section className="awakening-details">
        <div className="container">
          <h2 className="awakening-section-title">The Details</h2>
          <div className="awakening-details-grid">
            <div className="detail-block"><h3 className="detail-label">WHEN:</h3><p>June 27th - June 29th (Arrive in Portland by 7 pm on June 26th. Depart any time on the 29th.).</p></div>
            <div className="detail-block"><h3 className="detail-label">WHERE:</h3><p>Portland, Oregon</p></div>
            <div className="detail-block"><h3 className="detail-label">WHO:</h3><p>20 like-hearted people</p></div>
            <div className="detail-block"><h3 className="detail-label">THE INVESTMENT:</h3><p>$3,000 (Meals are included. Travel and lodging are not included).</p></div>
          </div>
        </div>
      </section>

      <section className="awakening-who">
        <div className="container">
          <div className="who-column">
            <h2 className="awakening-section-title">Who is this for?</h2>
            <ul className="who-list">
              {forWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="who-column">
            <h2 className="awakening-section-title">Who is it <em>not</em> for?</h2>
            <ul className="who-list not-list">
              {notForWhom.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="awakening-body">The Awakening isn’t for everyone. This isn’t a passive experience or a personal growth “getaway.” It’s an immersive, embodied journey—and it asks something of you.</p>
            <p className="awakening-tagline">This experience isn’t about escape. It’s about presence. And presence can be uncomfortable before it becomes liberating.</p>
          </div>
        </div>
      </section>

      <section className="awakening-where">
        <div className="container">
          <h2 className="awakening-section-title">Where is it?</h2>
          <p className="awakening-body">This isn’t happening in a sterile convention center where you’re served continental breakfast along with stale coffee. This will unfold in the most intimate of spaces: our home in Portland, Oregon.</p>
          <p className="awakening-body">I'll co-host this experience with my wife Kathy. We’ll be walking this path with you—not from a stage, but beside you. Over candlelit dinners. In quiet conversations. In the in-between moments where the real breakthroughs happen. For those of you who’ve followed my work for years, this is your chance to connect not just with my ideas—but with me, and with a group of like-hearted humans who are ready to shed their old skin.</p>
          <a href={signupUrl} target="_blank" className="btn-primary btn-large">Join the Awakening &rarr;</a>
        </div>
      </section>

      <section className="awakening-flow">
        <div className="container">
          <h2 className="awakening-section-title">The Flow</h2>
          <p className="awakening-body">Here’s how the transformation begins, deepens, and integrates:</p>
          <div className="flow-grid">
            {flow.map((step) => (
              <div className="flow-card" key={step.title}>
                <div className="flow-icon">{step.icon}</div>
                <h3 className="flow-title">{step.title}</h3>
                <ul className="flow-points">
                  {step.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="awakening-cost">
        <div className="container">
          <h3 className="awakening-section-title">What’s the cost of staying the same?</h3>
          <p className="awakening-body">You’ve done everything “right.” Built the career. Grown the business. Checked the boxes. And yet… something’s missing. It feels like you’re moving through your days with the music turned down and the noise turned up. The longer you hold onto a life that no longer fits, the harder it becomes to imagine what else is possible. The Awakening is an invitation to stop circling the truth—and finally live it.</p>
          <a href={signupUrl} target="_blank" className="btn-primary btn-large">I'm Ready to Begin &rarr;</a>
        </div>
      </section>

      <section className="awakening-why">
        <div className="container">
          <h2 className="awakening-section-title">Why We Created This Experience</h2>
          <p className="awakening-body">We’ve both spent years sharing our work—through books, keynotes, podcasts, and courses. But those mediums have limits. We wanted to create a space where transformation isn’t just talked about—but lived. A space that allows for the full human experience—your tears, your laughter, your longing, your breakthroughs. That’s what birthed <em>The Awakening.</em></p>
          <p className="awakening-body">I’ve moved through many personal evolutions in my own life—each one requiring a death before a rebirth. I’ve gone from being a rocket scientist to a tenured law professor to a bestselling author and speaker. So I don’t just teach reinvention. I live it. My wife and co-host Kathy brings the embodiment, the ritual, the remembrance. Together, we dreamed this into being not as a retreat—but as a cocoon. A soul container to honor what’s ending . . . and midwife what’s awakening.</p>
        </div>
      </section>

      <section className="awakening-faq">
        <div className="container">
          <h2 className="awakening-section-title">Questions?</h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <div className="faq-item" key={f.q}>
                <h3 className="faq-question">{f.q}</h3>
                <p className="faq-answer">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">This isn’t a retreat. It’s your life.</h2>
          <p className="cta-text">If you feel something stirring… if your body leaned in while reading this… if a quiet voice inside you just whispered, “Yes”—listen. That’s not your imagination. Are you ready to answer?</p>
          <div className="cta-buttons">
            <a href={signupUrl} target="_blank" className="btn-primary btn-large">I'm Ready to Begin &rarr;</a>
          </div>
        </div>
      </section>
    </>
  );
}