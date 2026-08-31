import { t } from "../../translations";
import "./FoodDetails.css";
import { useState } from "react";

function FoodDetails({ language, item, onClose, onAddToCart }) {
  const [imageError, setImageError] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  // Get language-specific content
  const itemName = typeof item.name === 'object' ? item.name[language] : item.name;
  const itemDescription = typeof item.description === 'object' ? item.description[language] : item.description;
  const itemIngredients = typeof item.ingredients === 'object' ? item.ingredients[language] : item.ingredients;

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    setQuantity(1);
  };

  return (
    <>
      <div className="modal-backdrop show" onClick={onClose}></div>
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="food-details-image">
                {!imageError ? (
                  <img
                    src={item.image}
                    alt={itemName}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="food-details-image-fallback">
                    <span>🍽️</span>
                  </div>
                )}
              </div>
              <div className="food-details-info">
                <h2 className="food-details-name">{itemName}</h2>
                <p className="food-details-description">{itemDescription}</p>
                <div className="food-details-ingredients">
                  <h4>{t(language, 'ingredients')}</h4>
                  <p>{itemIngredients}</p>
                </div>
                <div className="food-details-price-section">
                  <span className="food-details-price">{item.price} ETB</span>
                </div>
                <div className="quantity-selector">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    −
                  </button>
                  <span className="qty-display">{quantity}</span>
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0">
              <button
                type="button"
                className="btn btn-primary w-100 btn-lg"
                onClick={handleAddToCart}
              >
                {t(language, 'addToOrder')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodDetails;
