import { t } from "../../translations";
import "./HowItWorks.css";

function HowItWorks({ language }) {
  const steps = [
    {
      number: 1,
      title: t(language, 'step1Title'),
      description: t(language, 'step1Description'),
      icon: '📱'
    },
    {
      number: 2,
      title: t(language, 'step2Title'),
      description: t(language, 'step2Description'),
      icon: '📖'
    },
    {
      number: 3,
      title: t(language, 'step3Title'),
      description: t(language, 'step3Description'),
      icon: '🍽️'
    },
    {
      number: 4,
      title: t(language, 'step4Title'),
      description: t(language, 'step4Description'),
      icon: '✅'
    },
    {
      number: 5,
      title: t(language, 'step5Title'),
      description: t(language, 'step5Description'),
      icon: '💳'
    },
    {
      number: 6,
      title: t(language, 'step6Title'),
      description: t(language, 'step6Description'),
      icon: '😋'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-heading">{t(language, 'howItWorksHeading')}</h2>
          <p className="section-subheading">{t(language, 'howItWorksSubheading')}</p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.number} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">Step {step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
