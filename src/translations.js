// Translation system for Zed Shiro
export const translations = {
  en: {
    // Restaurant name
    restaurantName: "ZED SHIRO",
    
    // Welcome Screen
    welcomeTitle: "Welcome to Zed Shiro",
    welcomeSubtitle: "Authentic Ethiopian taste, served with love.",
    viewMenuButton: "View Menu",
    welcomeIntro: "Enjoy the rich flavors and traditional dishes of Ethiopia, freshly prepared for you.",
    
    // Header & Navigation
    search: "Search",
    cart: "Cart",
    
    // Menu
    ourMenu: "Our Menu",
    dishes: "dishes",
    noDishesFound: "No dishes found",
    tryAdjusting: "Try adjusting your search or filter criteria.",
    showAllDishes: "Show All Dishes",
    searchPlaceholder: "Search for dishes...",
    
    // Categories (existing Amharic categories with English translations)
    categories: {
      "ሁሉም": "All",
      "የባህል ምግቦች": "Traditional Dishes",
      "ፓስታ እና አትክልት": "Pasta & Vegetables",
      "ፍርፍር": "Firfir",
      "የስጋ ምግቦች": "Meat Dishes",
      "ልዩ ምግቦች": "Special Dishes",
      "ለስላሳ መጠጦች": "Soft Drinks"
    },
    
    // Food Details
    viewDetails: "View Details",
    ingredients: "Ingredients",
    quantity: "Quantity",
    addToOrder: "Add to Order",
    
    // Cart
    yourOrder: "Your Order",
    cartEmpty: "Your cart is empty",
    total: "Total",
    tableNumber: "Table Number",
    enterTableNumber: "Enter table number",
    placeOrder: "Place Order",
    pleaseEnterTable: "Please enter a table number",
    
    // Order Confirmation
    orderReceived: "Order Received",
    thankYou: "Thank you for choosing Zed Shiro.",
    orderNumber: "Order",
    table: "Table",
    estimatedTime: "Estimated preparation time: 20–30 minutes",
    backToMenu: "Back to Menu",
    
    // Footer
    contact: "Contact",
    openingHours: "Opening Hours",
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    madeWithLove: "Developed by Mesfin | mesfin-a.netlify.app"
  },
  
  am: {
    // Restaurant name
    restaurantName: "ዜድ ሽሮ",
    
    // Welcome Screen
    welcomeTitle: "ወደ ዜድ ሽሮ እንኳን በደህና መጡ",
    welcomeSubtitle: "ትክክለኛ የኢትዮጵያ ምግብ፣ በፍቅር የቀረበ።",
    viewMenuButton: "መኑን ይመልከቱ",
    welcomeIntro: "የኢትዮጵያን የበለፀገ ጣዕም እና ባህላዊ ምግቦች ይደሰቱ፣ ትኩስ ተዘጋጅቶልዎታል።",
    
    // Header & Navigation
    search: "ፈልግ",
    cart: "ጋሪ",
    
    // Menu
    ourMenu: "የእኛ ምናሌ",
    dishes: "ምግቦች",
    noDishesFound: "ምግብ አልተገኘም",
    tryAdjusting: "የፍለጋ ወይም ምደባ መስፈርትዎን ያስተካክሉ።",
    showAllDishes: "ሁሉንም ምግቦች አሳይ",
    searchPlaceholder: "ምግብ ይፈልጉ...",
    
    // Categories (keeping original Amharic names as they are)
    categories: {
      "ሁሉም": "ሁሉም",
      "የባህል ምግቦች": "የባህል ምግቦች",
      "ፓስታ እና አትክልት": "ፓስታ እና አትክልት",
      "ፍርፍር": "ፍርፍር",
      "የስጋ ምግቦች": "የስጋ ምግቦች",
      "ልዩ ምግቦች": "ልዩ ምግቦች",
      "ለስላሳ መጠጦች": "ለስላሳ መጠጦች"
    },
    
    // Food Details
    viewDetails: "ዝርዝር ይመልከቱ",
    ingredients: "ግብዓቶች",
    quantity: "ብዛት",
    addToOrder: "ወደ ትዕዛዝ ጨምር",
    
    // Cart
    yourOrder: "ትእዛዝዎ",
    cartEmpty: "ጋሪዎ ባዶ ነው",
    total: "ጠቅላላ",
    tableNumber: "የጠረጴዛ ቁጥር",
    enterTableNumber: "የጠረጴዛ ቁጥር ያስገቡ",
    placeOrder: "ትእዛዝ ያስቀምጡ",
    pleaseEnterTable: "እባክዎ የጠረጴዛ ቁጥር ያስገቡ",
    
    // Order Confirmation
    orderReceived: "ትእዛዝ ደርሷል",
    thankYou: "ዜድ ሽሮን ስለመረጡ እናመሰግናለን።",
    orderNumber: "ትእዛዝ",
    table: "ጠረጴዛ",
    estimatedTime: "የሚዘጋጅበት ግምት ጊዜ፡ 20–30 ደቂቃዎች",
    backToMenu: "ወደ ምናሌ ተመለስ",
    
    // Footer
    contact: "አድራሻ",
    openingHours: "የስራ ሰዓት",
    monday: "ሰኞ",
    tuesday: "ማክሰኞ",
    wednesday: "ረቡዕ",
    thursday: "ሐሙስ",
    friday: "አርብ",
    saturday: "ቅዳሜ",
    sunday: "እሁድ",
    madeWithLove: "የተዘጋጀው በ መስፍን | mesfin-a.netlify.app"
  }
};

// Get translation based on current language
export const t = (language, key) => {
  const keys = key.split('.');
  let value = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};
