import { t } from "../../translations";
import "./WelcomeScreen.css";

function WelcomeScreen({ language, onExplore, onLanguageToggle }) {
  return (
    <div className="app welcome-view">
      <div className="welcome-panel">
        <header className="welcome-topbar">
          <div className="language-toggle" aria-label="Toggle language">
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={onLanguageToggle}
            >
              English
            </button>
            <button
              type="button"
              className={language === "am" ? "active" : ""}
              onClick={onLanguageToggle}
            >
              አማርኛ
            </button>
          </div>
        </header>

        <main className="welcome-hero">
          <div className="hero-copy">
            <p className="hero-tag">Authentic Ethiopian Taste</p>
            <h1>{t(language, "restaurantName")}</h1>
            <h2>{t(language, "welcomeTitle")}</h2>
            <p className="hero-subtitle">{t(language, "welcomeSubtitle")}</p>

            <button type="button" className="btn-view-menu" onClick={onExplore}>
              {t(language, "viewMenuButton")}
              <span className="btn-arrow">→</span>
            </button>
          </div>

          <aside className="hero-info-card">
            <div className="info-pill">Fresh • Traditional • Cozy</div>
            <div className="info-row">
              <span>Location</span>
              <strong>Paster, Addis Ababa, Ethiopia</strong>
            </div>
            <div className="info-row">
              <span>Opening Hours</span>
              <strong>1:00 AM – 2:00 PM</strong>
            </div>
            <div className="info-row">
              <span>Phone</span>
              <strong>0913002858</strong>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}

export default WelcomeScreen;
