import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.style.background = 'rgba(241, 95, 28, 0.95)';
          navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
          navbar.style.background = 'var(--color-orange)';
          navbar.style.boxShadow = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-logo">
          <img src="https://static.showit.co/200/3pfMTuu2Qhy59tTMuCFugw/260793/ozan_varol-112_1.png" alt="Ozan Varol" />
        </a>
        <button
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`}
          id="navToggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/about" className="nav-link">About</a></li>
          <li><a href="/speaking" className="nav-link">Speaking</a></li>
          <li><a href="/books" className="nav-link">Books</a></li>
          <li><a href="/blog" className="nav-link">Blog</a></li>
          <li><a href="/contact" className="nav-link">Contact</a></li>
          <li><a href="/experiences" className="nav-link">Experiences</a></li>
        </ul>
      </div>
    </nav>
  );
}