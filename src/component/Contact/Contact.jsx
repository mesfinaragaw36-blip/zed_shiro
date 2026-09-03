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
                <a href="tel:+25913002858">+251913002858</a> <br />
                <a href="tel:+251911475429">+251911475429</a>
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
          <div className="location-panel">
            <div className="location-panel-content">
              <div className="contact-icon">📍</div>
              <div>
                <h3 className="location-heading">Find Us</h3>
                <p className="location-description">Visit ZED SHIRO and enjoy authentic Ethiopian flavors.</p>
              </div>
            </div>
            <a
              className="btn btn-primary location-button"
              href="https://maps.app.goo.gl/bLfUQowGQ1BDLb3K8"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
