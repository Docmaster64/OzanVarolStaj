export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-image">
          <img src="https://static.showit.co/1600/Vaf8rrlHQhqmbP081NjgJg/260793/ozan_varol-244.png" alt="Ozan Varol" />
        </div>
        <div className="footer-content">
          <div className="footer-section">
            <h4 className="footer-heading">navigate</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/speaking">Speaking</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/newsletter">Newsletter</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">books</h4>
            <ul className="footer-links">
              <li><a href="/rocket-scientist">Think Like A Rocket Scientist</a></li>
              <li><a href="/awaken">Awaken Your Genius</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="footer-heading">join 50k+ readers</h4>
            <p className="footer-text">Join 50K+ readers who call it 'the email highlight of my week.' Takes 3 minutes to read. Takes longer to shake.</p>
            <a href="/newsletter" className="footer-link">subscribe &rarr;</a>
          </div>
        </div>
        <div className="footer-bottom">
          <a href="/" className="footer-logo">
            <img src="https://static.showit.co/200/ToPPkbZRT0C0XqIAErQWtg/260793/ozan_varol-283.png" alt="Ozan Varol" />
          </a>
          <p className="footer-copyright">
            Copyright 2025 Reimagine Ventures LLC |
            <a href="/terms">terms and conditions</a> |
            <a href="/privacy-policy">privacy policy</a> |
            <a href="/affiliate-disclosure">affiliate disclosure</a> |
            <a href="https://megganstefan.com/" target="_blank">site credit</a>
          </p>
        </div>
      </div>
    </footer>
  );
}