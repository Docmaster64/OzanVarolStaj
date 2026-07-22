export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">JOIN 50K+<br />READERS</h3>
            <p className="footer-newsletter-text">
              Join 50K+ readers who call it 'the email highlight<br />
              of my week.' Takes 3 minutes to read.<br />
              Takes longer to shake.
            </p>
            <a href="/newsletter" className="footer-subscribe">
              SUBSCRIBE <span className="footer-arrow">→</span>
            </a>
          </div>
          <div className="footer-links-grid">
            <div className="footer-nav">
              <h4 className="footer-nav-title">NAVIGATE</h4>
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/speaking">Speaking</a>
              <a href="/experiences">Experiences</a>
              <a href="/blog">Blog</a>
              <a href="/newsletter">Newsletter</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-books">
              <h4 className="footer-books-title">BOOKS</h4>
              <a href="/rocket-scientist">Think Like A Rocket Scientist</a>
              <a href="/awaken">Awaken Your Genius</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-scroll-top-wrapper">
        <button
          onClick={scrollToTop}
          className="footer-scroll-top"
          aria-label="Scroll to top"
        >
          <img
            src="https://static.showit.co/200/ToPPkbZRT0C0XqIAErQWtg/260793/ozan_varol-283.png"
            alt="Scroll to top"
          />
        </button>
      </div>
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-content">
            <div className="footer-bottom-left">
              <p className="footer-copyright">
                COPYRIGHT 2025 REIMAGINE VENTURES LLC |
                <a href="/terms">TERMS AND CONDITIONS</a> |
                <a href="/privacy-policy">PRIVACY POLICY</a> |
                <a href="/affiliate-disclosure">AFFILIATE DISCLOSURE</a> |
                <a href="https://megganstefan.com/" target="_blank">SITE CREDIT</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-watermark">
        <img
          src="https://static.showit.co/2400/Vaf8rrlHQhqmbP081NjgJg/260793/ozan_varol-244.png"
          alt="Ozan Varol"
        />
      </div>
    </footer>
  );
}
