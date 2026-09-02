import { t } from "../../translations";
import "./Contact.css";

function Contact({ language }) {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-content">
          <div className="section-header">
            <h2 className="section-heading">{t(language, 'contactHeading')}</h2>
            <p className="section-subheading">{t(language, 'contactSubheading')}</p>
          </div>
          <div className="contact-info-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3 className="contact-label">{t(language, 'phoneLabel')}</h3>
              <p className="contact-value">
                <a href="tel:+25913002858">+251913002858</a>
              </p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-label">{t(language, 'addressLabel')}</h3>
              <p className="contact-value">{t(language, 'addressValue')}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">🕒</div>
              <h3 className="contact-label">{t(language, 'hoursLabel')}</h3>
              <p className="contact-value">{t(language, 'hoursValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
