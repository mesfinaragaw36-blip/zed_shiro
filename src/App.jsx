import { useState, useEffect } from "react";
import Header from "./component/Header";
import CategoryNav from "./component/catagorynav/catagorynav";
import FoodCard from "./component/foodcard/foodcard";
import Search from "./component/search/search";
import FoodDetails from "./component/FoodDetails/FoodDetails";
import Footer from "./component/Footer/Footer";
import WelcomeScreen from "./component/WelcomeScreen/WelcomeScreen";
import Cart from "./component/Cart/Cart";
import OrderConfirmation from "./component/OrderConfirmation/OrderConfirmation";
import { t } from "./translations";
import "./App.css";

const categories = [
  "ሁሉም",
  "የባህል ምግቦች",
  "ፓስታ እና አትክልት",
  "ፍርፍር",
  "የስጋ ምግቦች",
  "ልዩ ምግቦች",
  "ለስላሳ መጠጦች",
];

const menuItems = [
  {
    id: 1,
    name: {
      en: "Beyayinet",
      am: "በያይነት"
    },
    price: 170,
    category: "የባህል ምግቦች",
    description: {
      en: "A combination of different vegetarian dishes served together with injera.",
      am: "በእንጀራ ላይ የተለያዩ የአትክልት ምግቦች በአንድነት የቀረቡ።"
    },
    ingredients: {
      en: "Mixed lentils, collard greens, cabbage, carrots, beetroot, injera",
      am: "የተቀላቀሉ ምስር፣ ጎመን፣ ጎመን አበባ፣ ካሮት፣ ቀይ ሥር፣ እንጀራ"
    },
    image: "/image/beyayinet.jpg",
    available: true,
  },
  {
    id: 2,
    name: {
      en: "Timatim Lebleb",
      am: "ቲማቲም ለብ ለብ"
    },
    price: 170,
    category: "የባህል ምግቦች",
    description: {
      en: "Traditional Ethiopian tomato stew prepared with spices.",
      am: "በባህላዊ መንገድ በቅመማ ቅመም የተዘጋጀ የቲማቲም ወጥ።"
    },
    ingredients: {
      en: "Tomatoes, onions, garlic, berbere spice, Ethiopian butter",
      am: "ቲማቲም፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ በርበሬ፣ የኢትዮጵያ ቅቤ"
    },
    image: "/image/timatim.jpg",
    available: true,
  },
  {
    id: 3,
    name: {
      en: "Shiro",
      am: "ሽሮ"
    },
    price: 170,
    category: "የባህል ምግቦች",
    description: {
      en: "Traditional chickpea stew prepared with Ethiopian spices.",
      am: "በኢትዮጵያ ቅመማ ቅመም የተዘጋጀ ባህላዊ የሽምብራ ወጥ።"
    },
    ingredients: {
      en: "Chickpea flour, onions, garlic, berbere spice, Ethiopian butter",
      am: "የሽምብራ ዱቄት፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ በርበሬ፣ የኢትዮጵያ ቅቤ"
    },
    image: "/image/shiro.jpg",
    available: true,
  },
  {
    id: 4,
    name: {
      en: "Haf Haf",
      am: "ሀፍ ሀፍ"
    },
    price: 170,
    category: "የባህል ምግቦች",
    description: {
      en: "Traditional Ethiopian mixed vegetable dish.",
      am: "ባህላዊ የአትክልት ድብልቅ ምግብ።"
    },
    ingredients: {
      en: "Mixed vegetables, onions, garlic, Ethiopian spices",
      am: "የተቀላቀሉ አትክልቶች፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/halfhalf.jpg",
    available: true,
  },
  {
    id: 5,
    name: {
      en: "pasta beatklit",
      am: "ፓስታ በአትክልት"
    },
    price: 170,
    category: "ፓስታ እና አትክልት",
    description: {
      en: "Pasta served with mixed vegetables in Ethiopian style.",
      am: "ፓስታ በኢትዮጵያ ዘይቤ ከተቀላቀሉ አትክልቶች ጋር የቀረበ።"
    },
    ingredients: {
      en: "Pasta, mixed vegetables, onions, garlic, tomato sauce",
      am: "ፓስታ፣ የተቀላቀሉ አትክልቶች፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ የቲማቲም መረቅ"
    },
    image: "/image/pastabatklit.jpg",
    available: true,
  },
  {
    id: 6,
    name: {
      en: "pasta besgo",
      am: "ፓስታ በስጎ"
    },
    price: 170,
    category: "ፓስታ እና አትክልት",
    description: {
      en: "Pasta prepared with meat in traditional Ethiopian style.",
      am: "ፓስታ በባህላዊ የኢትዮጵያ ዘይቤ ከስጋ ጋር የተዘጋጀ።"
    },
    ingredients: {
      en: "Pasta, beef, onions, tomato sauce, Ethiopian spices",
      am: "ፓስታ፣ የበሬ ስጋ፣ ሽንኩርት፣ የቲማቲም መረቅ፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/pasta.jpg",
    available: true,
  },
  {
    id: 7,
    name: {
      en: "Kikil",
      am: "ቅቅል"
    },
    price: 300,
    category: "የስጋ ምግቦች",
    description: {
      en: "Traditional Ethiopian dish prepared with finely cut meat.",
      am: "በጥሩ ሁኔታ በተከተፈ ስጋ የተዘጋጀ ባህላዊ የኢትዮጵያ ምግብ።"
    },
    ingredients: {
      en: "Beef, onions, green peppers, Ethiopian spices",
      am: "የበሬ ስጋ፣ ሽንኩርት፣ አረንጓዴ በርበሬ፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/kikil.jpg",
    available: true,
  },
  {
    id: 8,
    name: {
      en: "Key Wot",
      am: "ቀይ ወጥ"
    },
    price: 300,
    category: "የስጋ ምግቦች",
    description: {
      en: "Traditional Ethiopian red meat stew with berbere.",
      am: "ባህላዊ የኢትዮጵያ ቀይ ወጥ በበርበሬ የተዘጋጀ።"
    },
    ingredients: {
      en: "Beef, onions, berbere spice, garlic, Ethiopian butter",
      am: "የበሬ ስጋ፣ ሽንኩርት፣ በርበሬ፣ ነጭ ሽንኩርት፣ የኢትዮጵያ ቅቤ"
    },
    image: "/image/keywet.jpg",
    available: true,
  },
  {
    id: 9,
    name: {
      en: "Tibs",
      am: "ጥብስ"
    },
    price: 300,
    category: "የስጋ ምግቦች",
    description: {
      en: "Sautéed pieces of beef with onion, pepper and Ethiopian spices.",
      am: "ከሽንኩርት፣ በርበሬ እና የኢትዮጵያ ቅመማ ቅመም ጋር የተጠበሰ የበሬ ስጋ።"
    },
    ingredients: {
      en: "Beef cubes, onions, green peppers, rosemary, Ethiopian spices",
      am: "የበሬ ስጋ ቁርጥራጭ፣ ሽንኩርት፣ አረንጓዴ በርበሬ፣ የአዝሙድ፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/Tibs.jpg",
    available: true,
  },
  {
    id: 10,
    name: {
      en: "Dulet",
      am: "ዱለት"
    },
    price: 300,
    category: "የስጋ ምግቦች",
    description: {
      en: "Traditional Ethiopian dish prepared with finely chopped meat and organs.",
      am: "በጥሩ ሁኔታ በተከተፈ ስጋ እና የውስጥ አካል የተዘጋጀ ባህላዊ የኢትዮጵያ ምግብ።"
    },
    ingredients: {
      en: "Liver, tripe, lean beef, onions, jalapeños, Ethiopian spices",
      am: "ጉበት፣ ከርሰ መሬት፣ ስብ የለለው የበሬ ስጋ፣ ሽንኩርት፣ ቃርያ፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/dulet.jpg",
    available: true,
  },
  {
    id: 11,
    name: {
      en: "Milas Senber",
      am: "ምላስ ሰንበር"
    },
    price: 300,
    category: "የስጋ ምግቦች",
    description: {
      en: "Special Ethiopian meat dish prepared with tongue and vegetables.",
      am: "ከምላስ እና አትክልት ጋር የተዘጋጀ ልዩ የኢትዮጵያ የስጋ ምግብ።"
    },
    ingredients: {
      en: "Tongue, vegetables, onions, garlic, Ethiopian spices",
      am: "ምላስ፣ አትክልቶች፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/milassember.jpeg",
    available: true,
  },
  {
    id: 12,
    name: {
      en: "Macoroni",
      am: "መኮረኒ"
    },
    price: 170,
    category: "ፓስታ እና አትክልት",
    description: {
      en: "Macaroni prepared in Ethiopian style with vegetables.",
      am: "መኮረኒ በኢትዮጵያ ዘይቤ ከአትክልት ጋር የተዘጋጀ።"
    },
    ingredients: {
      en: "Macaroni, mixed vegetables, tomato sauce, Ethiopian spices",
      am: "መኮረኒ፣ የተቀላቀሉ አትክልቶች፣ የቲማቲም መረቅ፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/mecoroni.jpg",
    available: true,
  },
  {
    id: 13,
    name: {
      en: "Gomen",
      am: "ጎመን"
    },
    price: 170,
    category: "ፓስታ እና አትክልት",
    description: {
      en: "Traditional Ethiopian collard greens prepared with spices.",
      am: "በቅመማ ቅመም የተዘጋጀ ባህላዊ የኢትዮጵያ ጎመን።"
    },
    ingredients: {
      en: "Collard greens, onions, garlic, ginger, green peppers",
      am: "ጎመን፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ ዝንጅብል፣ አረንጓዴ በርበሬ"
    },
    image: "/image/gomen.jpg",
    available: true,
  },
  {
    id: 14,
    name: {
      en: "Injera Firfir",
      am: "እንጀራ ፍርፍር"
    },
    price: 170,
    category: "ፍርፍር",
    description: {
      en: "Pieces of injera mixed with berbere sauce and Ethiopian spices.",
      am: "የእንጀራ ቁርጥራጭ ከበርበሬ መረቅ እና የኢትዮጵያ ቅመማ ቅመም ጋር የተደባለቀ።"
    },
    ingredients: {
      en: "Injera, berbere sauce, onions, Ethiopian spices",
      am: "እንጀራ፣ የበርበሬ መረቅ፣ ሽንኩርት፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/injerafirfir.jpeg",
    available: true,
  },
  {
    id: 15,
    name: {
      en: "enkulal Firfir",
      am: "እንቁላል ፍርፍር"
    },
    price: 170,
    category: "ፍርፍር",
    description: {
      en: "Firfir prepared with scrambled eggs and injera.",
      am: "ከተለወሱ እንቁላሎች እና እንጀራ ጋር የተዘጋጀ ፍርፍር።"
    },
    ingredients: {
      en: "Injera, eggs, berbere sauce, onions, Ethiopian butter",
      am: "እንጀራ፣ እንቁላል፣ የበርበሬ መረቅ፣ ሽንኩርት፣ የኢትዮጵያ ቅቤ"
    },
    image: "/image/enkulalfirfir.jpg",
    available: true,
  },
  {
    id: 16,
    name: {
      en: "sga Firfir",
      am: "ስጋ ፍርፍር"
    },
    price: 300,
    category: "ፍርፍር",
    description: {
      en: "Firfir prepared with meat and injera pieces.",
      am: "ከስጋ እና የእንጀራ ቁርጥራጭ ጋር የተዘጋጀ ፍርፍር።"
    },
    ingredients: {
      en: "Injera, beef, berbere sauce, Ethiopian butter, onions",
      am: "እንጀራ፣ የበሬ ስጋ፣ የበርበሬ መረቅ፣ የኢትዮጵያ ቅቤ፣ ሽንኩርት"
    },
    image: "/image/sgafirfir.jpg",
    available: true,
  },
  {
    id: 17,
    name: {
      en: "mulu kuanta Firfir",
      am: "ሙሉ ቋንጣ ፍርፍር"
    },
    price: 400,
    category: "ልዩ ምግቦች",
    description: {
      en: "Firfir prepared with full chicken portions and berbere sauce.",
      am: "ከሙሉ ዶሮ ክፍሎች እና የበርበሬ መረቅ ጋር የተዘጋጀ ፍርፍር።"
    },
    ingredients: {
      en: "Whole chicken, injera, berbere sauce, Ethiopian butter, onions",
      am: "ሙሉ ዶሮ፣ እንጀራ፣ የበርበሬ መረቅ፣ የኢትዮጵያ ቅቤ፣ ሽንኩርት"
    },
    image: "/image/kuantafirfir.jpg",
    available: true,
  },
  {
    id: 18,
    name: {
      en: "gmash kuanta Firfir",
      am: "ግማሽ ቋንጣ ፍርፍር"
    },
    price: 200,
    category: "ልዩ ምግቦች",
    description: {
      en: "Half chicken firfir with traditional spices and injera.",
      am: "ከባህላዊ ቅመማ ቅመም እና እንጀራ ጋር ግማሽ ዶሮ ፍርፍር።"
    },
    ingredients: {
      en: "Half chicken, injera, berbere sauce, Ethiopian butter, onions",
      am: "ግማሽ ዶሮ፣ እንጀራ፣ የበርበሬ መረቅ፣ የኢትዮጵያ ቅቤ፣ ሽንኩርት"
    },
    image: "/image/kuantafirfir.jpg",
    available: true,
  },
  {
    id: 19,
    name: {
      en: "dinch besga",
      am: "ድንች በስጋ"
    },
    price: 250,
    category: "የስጋ ምግቦች",
    description: {
      en: "Potatoes cooked with meat in Ethiopian style.",
      am: "ድንች በኢትዮጵያ ዘይቤ ከስጋ ጋር የተበሰለ።"
    },
    ingredients: {
      en: "Potatoes, beef, onions, tomatoes, Ethiopian spices",
      am: "ድንች፣ የበሬ ስጋ፣ ሽንኩርት፣ ቲማቲም፣ የኢትዮጵያ ቅመማ ቅመም"
    },
    image: "/image/dinch.jpg",
    available: true,
  },
  {
    id: 20,
    name: {
      en: "Mirinda",
      am: "ሚሪንዳ"
    },
    price: 50,
    category: "ለስላሳ መጠጦች",
    description: {
      en: "Refreshing orange flavored soft drink.",
      am: "አዝናኝ የብርቱካን ጣዕም ያለው ለስላሳ መጠጥ።"
    },
    ingredients: {
      en: "Carbonated water, sugar, orange flavor",
      am: "ካርቦኔትድ ውሃ፣ ስኳር፣ የብርቱካን ጣዕም"
    },
    image: "/image/mirinda.jpg",
    available: true,
  },
  {
    id: 21,
    name: {
      en: "Coca-Cola",
      am: "ኮካ-ኮላ"
    },
    price: 50,
    category: "ለስላሳ መጠጦች",
    description: {
      en: "Classic Coca-Cola soft drink.",
      am: "ክላሲክ ኮካ-ኮላ ለስላሳ መጠጥ።"
    },
    ingredients: {
      en: "Carbonated water, sugar, cola flavor",
      am: "ካርቦኔትድ ውሃ፣ ስኳር፣ የኮላ ጣዕም"
    },
    image: "/image/coca.jpg",
    available: true,
  },
  {
    id: 22,
    name: {
      en: "Sprite",
      am: "ስፕራይት"
    },
    price: 50,
    category: "ለስላሳ መጠጦች",
    description: {
      en: "Refreshing lemon-lime flavored soft drink.",
      am: "አዝናኝ የሎሚ-ሎሚ ጣዕም ያለው ለስላሳ መጠጥ።"
    },
    ingredients: {
      en: "Carbonated water, sugar, lemon-lime flavor",
      am: "ካርቦኔትድ ውሃ፣ ስኳር፣ የሎሚ-ሎሚ ጣዕም"
    },
    image: "/image/sprite.jpg",
    available: true,
  },
  {
    id: 23,
    name: {
      en: "Fanta",
      am: "ፋንታ"
    },
    price: 50,
    category: "ለስላሳ መጠጦች",
    description: {
      en: "Fruity flavored soft drink.",
      am: "የፍራፍሬ ጣዕም ያለው ለስላሳ መጠጥ።"
    },
    ingredients: {
      en: "Carbonated water, sugar, fruit flavor",
      am: "ካርቦኔትድ ውሃ፣ ስኳር፣ የፍራፍሬ ጣዕም"
    },
    image: "/image/fanta.jpg",
    available: true,
  },
];

function App() {
  // Language state - default English, persist in localStorage
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("zed-shiro-language") || "en";
  });
  
  const [currentView, setCurrentView] = useState("welcome");
  const [selectedCategory, setSelectedCategory] = useState("ሁሉም");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);
  
  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem("zed-shiro-language", language);
  }, [language]);
  
  // Language toggle function
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "am" : "en");
  };

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

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const placeOrder = (tableNumber) => {
    const newOrderNumber = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber({ number: newOrderNumber, table: tableNumber });
    setCart([]);
    setShowCart(false);
    setCurrentView("orderConfirmation");
  };

  if (currentView === "welcome") {
    return <WelcomeScreen language={language} onExplore={() => setCurrentView("menu")} onLanguageToggle={toggleLanguage} />;
  }

  if (currentView === "orderConfirmation") {
    return (
      <OrderConfirmation
        language={language}
        orderNumber={orderNumber}
        onBackToMenu={() => {
          setCurrentView("menu");
          setOrderNumber(null);
        }}
      />
    );
  }

  return (
    <div className="app menu-view">
      <Header language={language} cartCount={cart.length} onCartClick={() => setShowCart(true)} onLanguageToggle={toggleLanguage} />

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

        <section className="container py-4">
          {filteredItems.length > 0 ? (
            <div className="row g-4">
              {filteredItems.map((item) => (
                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
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

      <Footer language={language} />
    </div>
  );
}

export default App;
