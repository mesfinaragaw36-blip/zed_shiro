import { t } from "../../translations";
import "./Cart.css";

function Cart({
  language,
  cart,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onPlaceOrder,
}) {
  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePlaceOrder = () => {
    const tableInput = document.getElementById("tableNumber");
    if (tableInput.value) {
      onPlaceOrder(tableInput.value);
    } else {
      alert(t(language, 'pleaseEnterTable'));
    }
  };

  return (
    <div className="cart-panel-backdrop" onClick={onClose}>
      <div className="cart-panel" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h2>{t(language, 'yourOrder')}</h2>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          ></button>
        </div>
        <div className="cart-body">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <p>{t(language, 'cartEmpty')}</p>
            </div>
          ) : (
            <>
              {cart.map((item) => {
                const itemName = typeof item.name === 'object' ? item.name[language] : item.name;
                return (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={itemName} />
                    <div className="cart-item-info">
                      <h4>{itemName}</h4>
                      <p>{item.price} ETB</p>
                    </div>
                    <div className="cart-item-controls">
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="cart-item-remove"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      ×
                    </button>
                  </div>
                );
              })}
              <div className="cart-total">
                <strong>{t(language, 'total')}:</strong>
                <strong>{getTotalAmount()} ETB</strong>
              </div>
              <div className="cart-table-input">
                <label htmlFor="tableNumber">{t(language, 'tableNumber')}</label>
                <input
                  type="number"
                  id="tableNumber"
                  className="form-control"
                  placeholder={t(language, 'enterTableNumber')}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && e.target.value) {
                      onPlaceOrder(e.target.value);
                    }
                  }}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary w-100 btn-lg"
                onClick={handlePlaceOrder}
              >
                {t(language, 'placeOrder')}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
