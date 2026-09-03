import { useState } from "react";
import CategoryNav from "../component/catagorynav/catagorynav";
import FoodCard from "../component/foodcard/foodcard";
import Search from "../component/search/search";
import FoodDetails from "../component/FoodDetails/FoodDetails";
import Cart from "../component/Cart/Cart";
import OrderConfirmation from "../component/OrderConfirmation/OrderConfirmation";
import { t } from "../translations";
import "./MenuPage.css";

const categories = [
  "ሁሉም",
  "የባህል ምግቦች",
  "ፓስታ እና አትክልት",
  "ፍርፍር",
  "የስጋ ምግቦች",
  "ልዩ ምግቦች",
  "ለስላሳ መጠጦች",
];

function MenuPage({ language, menuItems, cart, setCart }) {
  const [selectedCategory, setSelectedCategory] = useState("ሁሉም");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [nextOrderNumber, setNextOrderNumber] = useState(1);

  const filteredItems = menuItems.filter((item) => {
    if (!item.available) return false;
    const matchesCategory =
      selectedCategory === "ሁሉም" || item.category === selectedCategory;
    const itemName = typeof item.name === 'object' ? item.name[language] : item.name;
    const matchesSearch = itemName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    setSelectedItem(null);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const updateCartQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const placeOrder = (tableNumber) => {
    const newOrderNumber = nextOrderNumber;
    setNextOrderNumber((currentNumber) => currentNumber + 1);
    setOrderNumber({ number: newOrderNumber, table: tableNumber });
    setCart([]);
    setShowCart(false);
    setShowOrderConfirmation(true);
  };

  if (showOrderConfirmation) {
    return (
      <OrderConfirmation
        language={language}
        orderNumber={orderNumber}
        onBackToMenu={() => {
          setShowOrderConfirmation(false);
          setOrderNumber(null);
        }}
      />
    );
  }

  return (
    <div className="menu-page">
      <Search language={language} searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <CategoryNav
        language={language}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <main className="menu-container">
        <div className="intro">
          <span>🍽️</span>
          <h2>{t(language, 'ourMenu')}</h2>
          <p className="result-count">{filteredItems.length} {t(language, 'dishes')}</p>
        </div>

        <section className="menu-grid-section py-4">
          {filteredItems.length > 0 ? (
            <div className="menu-grid">
              {filteredItems.map((item) => (
                <div
                  className="menu-grid-item"
                  key={item.id}
                >
                  <FoodCard
                    language={language}
                    item={item}
                    onClick={() => setSelectedItem(item)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-5">
              <div className="fs-1 mb-3">🔍</div>
              <h3>{t(language, 'noDishesFound')}</h3>
              <p className="text-muted">
                {t(language, 'tryAdjusting')}
              </p>
              <button
                type="button"
                className="btn btn-dark rounded-pill px-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("ሁሉም");
                }}
              >
                {t(language, 'showAllDishes')}
              </button>
            </div>
          )}
        </section>
      </main>

      {selectedItem && (
        <FoodDetails
          language={language}
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          onAddToCart={addToCart}
        />
      )}

      {showCart && (
        <Cart
          language={language}
          cart={cart}
          onClose={() => setShowCart(false)}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeFromCart}
          onPlaceOrder={placeOrder}
        />
      )}
    </div>
  );
}

export default MenuPage;
