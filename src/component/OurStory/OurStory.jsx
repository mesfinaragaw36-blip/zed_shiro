import { t } from "../../translations";
import "./OurStory.css";

function OurStory({ language }) {
  return (
    <section className="our-story-section" id="our-story">
      <div className="container">
        <div className="our-story-content">
          <h2 className="section-heading">{t(language, 'ourStoryHeading')}</h2>
          <div className="story-badge">{t(language, 'ourStoryStarted')}</div>
          <p className="story-text">{t(language, 'ourStoryDescription')}</p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
