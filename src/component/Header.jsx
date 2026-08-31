import { t } from "../translations";
import "./Header.css";

function Header({ language, cartCount, onCartClick, onLanguageToggle }) {
  return (
    <header className="food-house-header">
      <div className="container">
        <div className="header-content">
          <div className="header-logo">
            <h1>{t(language, 'restaurantName')}</h1>
          </div>
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