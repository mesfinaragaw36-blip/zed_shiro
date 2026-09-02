import { useEffect, useState } from "react";
import { t } from "../../translations";
import "./Header.css";

function Header({ 
  language, 
  cartCount, 
  onCartClick, 
  onLanguageToggle,
  currentPage,
  onNavigate 
}) {
  const [activeNavId, setActiveNavId] = useState(
    currentPage === 'menu' ? 'menu-intro' : currentPage
  );

  useEffect(() => {
    if (currentPage === 'menu') {
      setActiveNavId('menu-intro');
    }
  }, [currentPage]);

  const navLinks = [
    { id: 'home', label: t(language, 'navHome') },
    { id: 'menu-intro', label: t(language, 'navMenu'), section: true },
    { id: 'our-story', label: t(language, 'navOurStory'), section: true },
    { id: 'payment-methods', label: t(language, 'navPaymentMethods'), section: true },
    { id: 'how-it-works', label: t(language, 'navHowItWorks'), section: true },
    { id: 'contact', label: t(language, 'navContact'), section: true }
  ];

  const handleNavClick = (link) => {
    setActiveNavId(link.id);

    if (link.section) {
      // Navigate to home first if not already there, then scroll to section
      if (currentPage !== 'home') {
        onNavigate('home', link.id);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(link.id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      onNavigate(link.id);
    }
  };

  return (
    <header className="food-house-header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <h1
              onClick={() => {
                setActiveNavId('home');
                onNavigate('home');
              }}
              style={{ cursor: 'pointer' }}
            >
              {t(language, 'restaurantName')}
            </h1>
          </div>

          {/* Horizontal Scrollable Navigation */}
          <nav className="header-nav">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={`nav-link ${activeNavId === link.id ? 'active' : ''}`}
                onClick={() => handleNavClick(link)}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="header-actions">
            {onLanguageToggle && (
              <button
                type="button"
                className="language-toggle-btn"
                onClick={onLanguageToggle}
                aria-label="Toggle language"
              >
                {language === "en" ? "አማ" : "EN"}
              </button>
            )}
            <button
              type="button"
              className="cart-icon-btn"
              onClick={onCartClick}
              aria-label={t(language, 'cart')}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
