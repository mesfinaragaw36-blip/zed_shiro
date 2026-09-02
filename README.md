# ZED SHIRO - Restaurant Website

![ZED SHIRO](https://img.shields.io/badge/ZED%20SHIRO-Restaurant%20Website-burgundy)
![React](https://img.shields.io/badge/React-19.2.8-blue)
![Vite](https://img.shields.io/badge/Vite-8.2.2-purple)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-green)

A modern, fully responsive restaurant website for ZED SHIRO Ethiopian Restaurant with bilingual support (English/Amharic), complete menu management, and mobile QR code ordering system.

## ✨ Features

### 🏠 Homepage
- **Hero Section** - Stunning welcome with call-to-action
- **Menu Introduction** - Preview of menu with visual appeal
- **Our Story** - Restaurant history (Started in 2005)
- **Payment Methods** - 5 payment options with QR codes:
  - Telebirr
  - Commercial Bank of Ethiopia (2 accounts)
  - Awash Bank
  - Amhara Bank
- **How It Works** - 6-step ordering process
- **Contact Section** - Phone, address, and opening hours

### 🍽️ Menu Page
- **25 Menu Items** - Complete Ethiopian cuisine (23 foods + Tea & Coffee)
- **7 Categories**:
  - Traditional Dishes (የባህል ምግቦች)
  - Pasta & Vegetables (ፓስታ እና አትክልት)
  - Firfir (ፍርፍር)
  - Meat Dishes (የስጋ ምግቦች)
  - Special Dishes (ልዩ ምግቦች)
  - Soft Drinks (ለስላሳ መጠጦች)
- **Search Functionality** - Real-time menu search
- **Food Details Modal** - Complete information for each dish
- **Cart System** - Add items, manage quantities, place orders
- **Order Confirmation** - Order number and estimated time

### 🌍 Bilingual Support
- Complete English translations
- Complete Amharic translations (አማርኛ)
- One-click language toggle
- All content translates seamlessly

### 📱 Mobile-First Design
- Optimized for QR code scanning
- Touch-friendly interface (44px minimum touch targets)
- Smooth horizontal scrolling for categories
- Hamburger menu for mobile navigation
- Responsive breakpoints: 320px, 576px, 768px, 992px, 1200px+
- Object-fit: contain for food images (no cropping)

### 🎨 Design Highlights
- Ethiopian color palette (Burgundy & Golden)
- Smooth animations and transitions
- Hover effects and interactive elements
- Modern card-based layouts
- Beautiful gradient backgrounds
- Pattern overlays for visual depth

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd zed_shiro

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Or if you have PowerShell execution policy issues:
node ./node_modules/vite/bin/vite.js
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Or:
node ./node_modules/vite/bin/vite.js build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
zed_shiro/
├── public/
│   ├── image/              # All food and section images
│   │   ├── beyayinet.jpg
│   │   ├── shiro.jpg
│   │   ├── Tibs.jpg
│   │   ├── background-picture.jpg
│   │   ├── menu-picture.png
│   │   └── ... (all menu images)
│   └── favicon.svg
├── src/
│   ├── component/
│   │   ├── Header.jsx      # Navigation header with routing
│   │   ├── Footer/         # Footer component
│   │   ├── Cart/           # Shopping cart
│   │   ├── foodcard/       # Menu item cards
│   │   ├── search/         # Search bar
│   │   ├── catagorynav/    # Category navigation
│   │   ├── FoodDetails/    # Food detail modal
│   │   ├── OrderConfirmation/ # Order success screen
│   │   └── sections/       # Homepage sections
│   │       ├── Hero.jsx
│   │       ├── MenuIntro.jsx
│   │       ├── OurStory.jsx
│   │       ├── PaymentMethods.jsx
│   │       ├── HowItWorks.jsx
│   │       └── Contact.jsx
│   ├── pages/
│   │   ├── HomePage.jsx    # Main landing page
│   │   └── MenuPage.jsx    # Full menu page
│   ├── App.jsx             # Main app with routing
│   ├── translations.js     # Bilingual translations
│   ├── App.css             # Global styles
│   └── index.css           # Base styles
├── TESTING_CHECKLIST.md    # Complete testing guide
├── DEPLOYMENT_GUIDE.md     # Deployment instructions
└── package.json
```

## 🎯 Key Components

### Routing System
Simple state-based routing (no external library):
- `home` - HomePage with all sections
- `menu` - MenuPage with full menu
- Section scrolling within homepage
- Smooth navigation between pages

### Menu Data
All menu items in `App.jsx` with:
- Bilingual names (English/Amharic)
- Prices in ETB
- Descriptions
- Ingredients
- Images
- Categories
- Availability status

### Translation System
Complete bilingual support in `translations.js`:
- Navigation labels
- Section headings
- Menu categories
- Food names and descriptions
- UI text
- Error messages

## 🛠️ Technologies Used

- **React 19.2.8** - UI library
- **Vite 8.2.2** - Build tool & dev server
- **Bootstrap 5.3.8** - Grid system & utilities
- **CSS3** - Custom styling with CSS variables
- **Oxlint** - Fast JavaScript linter

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch targets: minimum 44px
- Smooth touch scrolling
- Optimized images (object-fit: contain)
- Fast loading on mobile networks
- QR code friendly interface
- Landscape orientation support

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Mobile Chrome (Android)

## 📝 TODO / Future Enhancements

- [ ] Convert HEIC QR codes to JPG/PNG
- [ ] Add Telebirr QR code image
- [ ] Replace Tea & Coffee placeholder images
- [ ] Add loading states
- [ ] Implement lazy loading for images
- [ ] Add PWA support (offline mode)
- [ ] Connect to backend API for orders
- [ ] Add admin panel for menu management
- [ ] Implement real-time order tracking
- [ ] Add customer reviews section
- [ ] Integrate payment gateways

## 📄 Documentation

- [TESTING_CHECKLIST.md](./TESTING_CHECKLIST.md) - Complete testing guide
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Deployment instructions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Developer

**Mesfin**  
Portfolio: [mesfin-a.netlify.app](https://mesfin-a.netlify.app)

## 📜 License

© 2024 ZED SHIRO. All rights reserved.

---

**Built with ❤️ using React + Vite**
