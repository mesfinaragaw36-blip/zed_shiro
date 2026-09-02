import { t } from "../translations";
import Hero from "../component/Hero/Hero";
import MenuIntro from "../component/MenuIntro/MenuIntro";
import OurStory from "../component/OurStory/OurStory";
import PaymentMethods from "../component/PaymentMethods/PaymentMethods";
import HowItWorks from "../component/HowItWorks/HowItWorks";
import Contact from "../component/Contact/Contact";
import "./HomePage.css";

function HomePage({ language, onNavigateToMenu }) {
  return (
    <div className="home-page">
      <Hero language={language} />
      <MenuIntro language={language} onViewFullMenu={onNavigateToMenu} />
      <OurStory language={language} />
      <PaymentMethods language={language} />
      <HowItWorks language={language} />
      <Contact language={language} />
    </div>
  );
}

export default HomePage;
