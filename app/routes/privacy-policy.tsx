import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [
  { title: "Privacy Policy | Ozan Varol" },
  { name: "description", content: "Privacy policy explaining how we collect, use, and protect your personal information." },
];

export default function PrivacyPolicy() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-subtitle">Last updated: January 2025</p>
        </div>
      </section>

      <section className="privacy-section">
        <div className="container">
          <div className="privacy-content">
            <h2>Information We Collect</h2>
            <p>We collect information you provide directly to us through our website, including:</p>
            <ul>
              <li>Email addresses when you subscribe to our newsletter</li>
              <li>Name and contact information when you fill out forms</li>
              <li>Communications you send to us</li>
            </ul>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Send you newsletters and updates you requested</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Improve our website and develop new products/services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <h2>Information Sharing</h2>
            <p>We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:</p>
            <ul>
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and property</li>
            </ul>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Unsubscribe from our communications at any time</li>
            </ul>
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@ozanvarol.com">hello@ozanvarol.com</a>.</p>
          </div>
        </div>
      </section>
    </>
  );
}