import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="nav-logo">
            <img
              src="https://static.showit.co/200/3pfMTuu2Qhy59tTMuCFugw/260793/ozan_varol-112_1.png"
              alt="Ozan Varol"
            />
          </a>
          <ul className="nav-menu" id="navMenu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/speaking" className="nav-link">Speaking</a></li>
            <li><a href="/experiences" className="nav-link">Experiences</a></li>
            <li><a href="/books" className="nav-link">Books</a></li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
          <a href="/newsletter" className="nav-spark">YOUR WEEKLY SPARK</a>
          <button
            className="nav-toggle"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className={`overlay-menu ${isMenuOpen ? "open" : ""}`} id="overlayMenu">
        <button className="overlay-close" aria-label="Close menu" onClick={() => setIsMenuOpen(false)}>
          <svg viewBox="0 0 512 512"><polygon points="405 121.8 390.2 107 256 241.2 121.8 107 107 121.8 241.2 256 107 390.2 121.8 405 256 270.8 390.2 405 405 390.2 270.8 256 405 121.8" /></svg>
        </button>
        <div className="overlay-inner">
          <div className="overlay-links">
            <a href="/about">About</a>
            <a href="/books">Books</a>
            <a href="/speaking">Speaking</a>
            <a href="/courses">Courses</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
            <a href="/experiences">Experiences</a>
          </div>
          <div className="overlay-side">
            <div className="audio-box">
              <h3>Reimagine The Status Quo</h3>
              <p>Get a free audio training with 3 simple strategies to make giant leaps in your life and work.</p>
              <a href="https://geni.us/6uDnAm" target="_blank">download &rarr;</a>
            </div>
            <div className="overlay-bestsellers">
              <h3>WSJ BESTSELLERS:</h3>
              <a href="https://geni.us/6uDnAm" target="_blank"><i>Awaken Your Genius</i></a>
              <a href="https://geni.us/TLaRS" target="_blank"><i>Think Like a Rocket Scientist</i></a>
              <img src="https://static.showit.co/200/SDje6V3rSxOj3fvu53ighA/260793/awakenyourgenius_1e.jpg" alt="Awaken Your Genius" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}