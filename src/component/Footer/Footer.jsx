import { t } from "../../translations";
import "./Footer.css";

function Footer({ language }) {
  return (
    <footer className="food-house-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <h3>{t(language, 'restaurantName')}</h3>
            <p className="footer-tagline">{t(language, 'welcomeSubtitle')}</p>
          </div>

          <div className="footer-section">
            <h4>{t(language, 'contact')}</h4>
            <ul className="footer-links">
              <li>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                <span>0913002858</span>
              </li>
              <li>
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span>Paster, Addis Ababa, Ethiopia</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>{t(language, 'openingHours')}</h4>
            <ul className="footer-hours">
              <li><span>{t(language, 'monday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'tuesday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'wednesday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'thursday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'friday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'saturday')}</span><span>1:00 AM - 2:00 PM</span></li>
              <li><span>{t(language, 'sunday')}</span><span>1:00 AM - 2:00 PM</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; 2026 {t(language, 'restaurantName')}. {" "}
            <a
              href="https://mesfin-a.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="footer-portfolio-link"
            >
              {t(language, 'madeWithLove')}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
