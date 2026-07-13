import type { MetaFunction } from "@remix-run/node";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => [
  { title: "Terms and Conditions | Ozan Varol" },
  { name: "description", content: "Terms and conditions for Ozan Varol's website and services." },
];

export default function Terms() {
  return (
    <>
      <Navigation />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Terms and Conditions</h1>
          <p className="page-subtitle">Last updated: January 2025</p>
        </div>
      </section>

      <section className="terms-section">
        <div className="container">
          <div className="terms-content">
            <h2>Agreement to Terms</h2>
            <p>These Terms and Conditions constitute a legally binding agreement made by and between Ozan Varol ("we", "us", or "our") and you ("you" or "your") regarding your access to and use of our website, products, and services.</p>
            <h2>Intellectual Property</h2>
            <p>All content, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Ozan Varol and is protected by international copyright laws.</p>
            <h2>Use of Website</h2>
            <p>You may use our website for lawful purposes only. You agree not to use our website:</p>
            <ul>
              <li>In any way that violates applicable laws or regulations</li>
              <li>To transmit or procure the sending of any unsolicited or unauthorized advertising</li>
              <li>To impersonate or attempt to impersonate Ozan Varol or any of our associates</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use of the website</li>
            </ul>
            <h2>Disclaimer</h2>
            <p>The content on this website is for informational purposes only. While we strive to provide accurate and up-to-date information, we make no warranties of any kind about the completeness, reliability, or accuracy of this information.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms and Conditions, please contact us at <a href="mailto:hello@ozanvarol.com">hello@ozanvarol.com</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}