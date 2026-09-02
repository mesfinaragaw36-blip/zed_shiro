import { t } from "../../translations";
import "./MenuIntro.css";

function MenuIntro({ language, onViewFullMenu }) {
  return (
    <section className="menu-intro-section" id="menu-intro">
      <div className="container">
        <div className="menu-intro-content">
          <div className="menu-intro-image">
            <img src="/image/menu-picture.png" alt="ZED SHIRO Menu" />
          </div>
          <div className="menu-intro-text">
            <h2 className="menu-intro-heading">{t(language, 'menuIntroHeading')}</h2>
            <p className="menu-intro-description">{t(language, 'menuIntroDescription')}</p>
            <button 
              type="button" 
              className="view-full-menu-btn"
              onClick={onViewFullMenu}
            >
              {t(language, 'viewFullMenu')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuIntro;
