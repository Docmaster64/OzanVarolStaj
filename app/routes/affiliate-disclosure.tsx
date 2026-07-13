import type { MetaFunction } from "@remix-run/node";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export const meta: MetaFunction = () => [
  { title: "Affiliate Disclosure | Ozan Varol" },
  { name: "description", content: "Full disclosure of affiliate relationships and partnerships." },
];

export default function AffiliateDisclosure() {
  return (
    <>
      <Navigation />

      <section className="page-header">
        <div className="container">
          <h1 className="page-title">Affiliate Disclosure</h1>
          <p className="page-subtitle">Transparency in partnerships and recommendations</p>
        </div>
      </section>

      <section className="disclosure-section">
        <div className="container">
          <div className="disclosure-content">
            <h2>Federal Trade Commission Disclosure</h2>
            <p>This website contains affiliate links. This means if you click on a link and purchase something, I may receive a small commission at no extra cost to you.</p>
            <h2>Affiliate Relationships</h2>
            <p>Ozan Varol is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</p>
            <h2>Our Commitment</h2>
            <p>We only recommend products and services that we genuinely believe will add value to our readers. Our recommendations are based on:</p>
            <ul>
              <li>Personal experience with the product or service</li>
              <li>Extensive research and reader feedback</li>
              <li>Alignment with our mission of helping you think better and achieve more</li>
            </ul>
            <h2>Transparency</h2>
            <p>When we recommend a product with an affiliate link, we believe in its value. The small commission we may receive helps support the continued creation of free content for our community.</p>
            <h2>Contact</h2>
            <p>If you have any questions about our affiliate relationships, please contact us at <a href="mailto:hello@ozanvarol.com">hello@ozanvarol.com</a>.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}