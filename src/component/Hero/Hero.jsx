import { t } from "../../translations";
import "./Hero.css";

function Hero({ language }) {
  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-welcome">{t(language, 'welcomeTitle')}</p>
        <p className="hero-subtitle">{t(language, 'welcomeSubtitle')}</p>
        <p className="hero-description">{t(language, 'welcomeIntro')}</p>
      </div>
    </section>
  );
}

export default Hero;
