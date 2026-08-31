import { t } from "../../translations";
import "./foodcard.css";
import { useState } from "react";

function FoodCard({ language, item, onClick }) {
  const [imageError, setImageError] = useState(false);
  
  // Get language-specific content
  const itemName = typeof item.name === 'object' ? item.name[language] : item.name;
  const itemDescription = typeof item.description === 'object' ? item.description[language] : item.description;

  return (
    <div className="food-card" onClick={onClick} role="button" tabIndex={0}>
      <div className="food-image">
        {!imageError ? (
          <img
            src={item.image}
            alt={itemName}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="food-image-fallback">
            <span>🍽️</span>
          </div>
        )}
      </div>
      <div className="food-info">
        <h3 className="food-name">{itemName}</h3>
        <p className="food-description">{itemDescription}</p>
        <div className="food-bottom">
          <span className="price">{item.price} ETB</span>
          <button type="button" className="btn-view-details">
            {t(language, 'viewDetails')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;