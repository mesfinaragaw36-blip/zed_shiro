import { t } from "../../translations";
import "./OrderConfirmation.css";

function OrderConfirmation({ language, orderNumber, onBackToMenu }) {
  return (
    <div className="app confirmation-view">
      <div className="confirmation-content">
        <div className="confirmation-icon">✓</div>
        <h1>{t(language, 'orderReceived')}</h1>
        <p className="confirmation-message">
          {t(language, 'thankYou')}
        </p>
        <div className="order-details">
          <div className="order-number">{t(language, 'orderNumber')} #{orderNumber?.number}</div>
          <div className="order-table">{t(language, 'table')} {orderNumber?.table}</div>
          <div className="order-time">
            {t(language, 'estimatedTime')}
          </div>
        </div>
        <button
          type="button"
          className="btn btn-dark btn-lg rounded-pill px-5 mt-4"
          onClick={onBackToMenu}
        >
          {t(language, 'backToMenu')}
        </button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
